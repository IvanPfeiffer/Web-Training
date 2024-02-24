const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Dog Routes");
});
router.get("/:id", (req, res) => {
  res.send("One Dog");
});
router.get("/:id/edit", (req, res) => {
  res.send("editing one dog");
});

module.exports = router;
