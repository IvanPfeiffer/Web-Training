const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const AppError = require("./AppError");

const Product = require("./models/product");

function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((e) => next(e));
  };
}

mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand2")
  .then(() => {
    console.log("Mongo Succesfuly connected");
  })
  .catch((e) => {
    console.log(e);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const categories = ["Fruit", "Veggie", "Dairy"];

app.get("/products", async (req, res) => {
  const { category } = req.query;
  if (category) {
    const products = await Product.find({ category });
    res.render("products/index", { products, category, categories });
  } else {
    const products = await Product.find({});
    res.render("products/index", { products, category: "All", categories });
  }

  // console.log(products)
});

app.get("/products/new", (req, res) => {
  // throw new AppError("Weird Error", 400);
  console.log(categories);
  res.render("products/new", { categories });
});

app.post("/products", async (req, res, next) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect("/products");
  } catch (e) {
    next(e);
  }
});

app.put("/products/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });
    res.redirect(`/products/${product._id}`);
  } catch (e) {
    next(e);
  }
});

app.get(
  "/products/:id",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return next(new AppError("Product Not Found", 404)); //In async functions you have to pass the error in next even if this is the route handler.
    }
    res.render("products/details", { product });
  })
);

app.get("/products/:id/edit", async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (!product) {
    return next(new AppError("Product Not Found", 404)); //In async functions you have to pass the error in next even if this is the route handler.
  }
  res.render("products/edit", { product, categories });
});

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);
  res.redirect("/products");
});

const handleValidationErr = (err) => {
  console.dir(err);
  return new AppError(`Validation error...${err.message}`, 404);
};

app.use((err, req, res, next) => {
  if (err.name === "Validation") {
    const err = handleValidationErr(err);
  }
  next(err);
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong" } = err;
  res.status(statusCode).send(message);
});

app.listen("3000", () => {
  console.log("Listening on port 3000");
});
