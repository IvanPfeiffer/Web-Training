const express = require("express");
const app = express();

const session = require("express-session");

app.use(
  session({ secret: "thisisasecret", resave: false, saveUninitialized: false })
);

app.get("/viewcount", (req, res) => {
  if (req.session.count) {
    req.session.count += 1;
  } else {
    req.session.count = 1;
  }
  res.send(`Times you have viewed this page ${req.session.count} times`);
});

app.get("/register", (req, res) => {
  const { username = "Unknown" } = req.query;
  req.session.username = username;
  res.redirect("/greet");
});

app.get("/greet", (req, res) => {
  const { username } = req.session;
  console.log(req.session);
  res.send(`Welcome Back ${username}`);
});

app.listen(3000, () => {
  console.log("Port 3000 is listening");
});
