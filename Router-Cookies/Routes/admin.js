const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  if (req.query.isAdmin) {
    next();
  }
  res.send("Sorry you are not an Admin");
});

router.get("/topsecret", (req, res) => {
  res.send("Top secret page");
});
router.get("/deleteall", (req, res) => {
  res.send("Deleting All");
});

module.exports = router;
