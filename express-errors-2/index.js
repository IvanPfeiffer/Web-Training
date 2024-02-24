const express = require("express");
const app = express();
const morgan = require("morgan");
const AppError = require("./AppError");
//it is used to debug during production.
app.use(morgan("dev"));

// app.use((req, res, next) => {
//   console.log("1st MiddleWare");
//   next();
// });
// app.use((req, res, next) => {
//   console.log("2nd MiddleWare");
//   next();
// });

app.use((req, res, next) => {
  //   req.method = "POST";
  console.log(req.method.toUpperCase(), req.path);

  next();
});

app.use("/dogs", (req, res, next) => {
  console.log("I love Dogs");
  next();
});

const verifyPass = (req, res, next) => {
  console.log(req.query);
  if (req.query.password === "nugget") {
    next();
  }
  throw new AppError("Password Required", 401);
};

app.get("/", (req, res) => {
  res.send("Home Page");
});

//This is the default express error handling, a http response is sent.
app.get("/error", (req, res) => {
  chicken.fly();
});

app.get("/dogs", (req, res) => {
  res.send("Dogs pages");
});

app.get("/secret", verifyPass, (req, res) => {
  res.send("Welcome to the secret page!");
});

//this will run only if nothing is matched
app.use((req, res) => {
  res.status(404).send("Not Found");
  //   res.render(not found template)
});

//Error handlers must have four arguments
app.use((err, req, res, next) => {
  const { status = 500, message = "Something Went Wrong" } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log("Connected Succesfuly");
});
