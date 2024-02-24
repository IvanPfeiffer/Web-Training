const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const Campground = require("../models/campground");
const { isLoggedIn } = require("../middleware");
const { isAuthor, validateCampground } = require("../middleware");
//Controllers
const campgroundControllers = require("../controllers/campgrounds");

router.get("/", catchAsync(campgroundControllers.index));

router.get("/new", isLoggedIn, campgroundControllers.newCampForm);

router.post(
  "/",
  isLoggedIn,
  validateCampground,
  catchAsync(campgroundControllers.postNewCamp)
);

router.get("/:id", catchAsync(campgroundControllers.viewCamp));

router.get(
  "/:id/edit",
  isLoggedIn,
  isAuthor,
  catchAsync(campgroundControllers.editCampForm)
);

router.put(
  "/:id",
  isLoggedIn,
  isAuthor,
  validateCampground,
  catchAsync(campgroundControllers.submitEditedCamp)
);

router.delete(
  "/:id",
  isLoggedIn,
  isAuthor,
  catchAsync(campgroundControllers.deleteCamp)
);

module.exports = router;
