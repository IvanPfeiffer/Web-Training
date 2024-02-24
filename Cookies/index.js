const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser("thisismysecret"));

app.get("/greet", (req, res) => {
  const { name } = req.cookies;
  res.send(`Hey there ${name}`);
});

app.get("/setname", (req, res) => {
  res.cookie("name", "stevie");
  res.send("Sent you a cookie");
});

app.get("/getsignedcookie", (req, res) => {
  res.cookie("fruit", "grape", { signed: true });
  res.send("Signed cookie");
});

app.listen(3000, () => {
  console.log("Port 3000 is listening");
});
