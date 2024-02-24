const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1/relationshipDemo")
  .then(() => {
    console.log("Mongo Connection Open");
  })
  .catch((err) => {
    console.log("Mongo connection failed");
    console.log(err);
  });

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  season: {
    type: String,
    enum: ["Spring", "Summer", "Fall", "Winter"],
  },
});
const farmSchema = new mongoose.Schema({
  name: String,
  city: String,
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

const Product = mongoose.model("Product", productSchema);
const Farm = mongoose.model("Farm", farmSchema);

// Product.insertMany([
//   { name: "Melon", price: 2.5, season: "Summer" },
//   { name: "Watermelon", price: 3.99, season: "Summer" },
//   { name: "Mango", price: 2.0, season: "Spring" },
// ]);

const makeFarm = async () => {
  const farm = new Farm({ name: "Pollo Loco", city: "Guinda CA" });
  const melon = await Product.findOne({ name: "Melon" });
  farm.products.push(melon);
  await farm.save();
  console.log(farm);
};

// makeFarm();

const addProduct = async () => {
  const farm = await Farm.findOne({ name: "Pollo Loco" });
  const mango = await Product.findOne({ name: "Mango" });
  farm.products.push(mango);
  await farm.save();
  console.log(farm);
};

// addProduct();

Farm.findOne({ name: "Pollo Loco" })
  .populate("products") //Field to populate
  .then((farm) => console.log(farm));
