const Campground = require("../models/campground");

module.exports.index = async (req, res, next) => {
  const campgrounds = await Campground.find({});
  res.render("campgrounds/index", { campgrounds });
};

module.exports.newCampForm = (req, res) => {
  res.render("campgrounds/new");
};

module.exports.postNewCamp = async (req, res, next) => {
  // if (!req.body.campground) throw new ExpressError("Invalid Camp Data", 400);
  const campground = new Campground(req.body.campground);
  campground.author = req.user._id;
  await campground.save();
  req.flash("success", "Campground was created");
  res.redirect(`/campgrounds/${campground._id}`);
};

module.exports.viewCamp = async (req, res, next) => {
  const campground = await Campground.findById(req.params.id)
    .populate({
      path: "reviews",
      populate: { path: "author" },
    })
    .populate("author");
  if (!campground) {
    req.flash("error", "The campground was lost in the woods 😅");
    return res.redirect("/campgrounds");
  }
  res.render("campgrounds/show", { campground });
};

module.exports.editCampForm = async (req, res, next) => {
  const campground = await Campground.findById(req.params.id);
  if (!campground) {
    req.flash("error", "The campground was lost in the woods 😅");
    return res.redirect("/campgrounds");
  }
  res.render("campgrounds/edit", { campground });
};

module.exports.submitEditedCamp = async (req, res, next) => {
  const { id } = req.params;
  const campground = await Campground.findByIdAndUpdate(
    id,
    {
      ...req.body.campground,
    },
    { new: true }
  );
  req.flash("success", "Campground was Updated");
  res.redirect(`/campgrounds/${campground._id}`);
};

module.exports.deleteCamp = async (req, res, next) => {
  const { id } = req.params;
  await Campground.findByIdAndDelete(id);
  req.flash("success", "Campground was deleted");
  res.redirect("/campgrounds");
};
