const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

mongoose
  .connect("mongodb://127.0.0.1:27017/yelp-camp")
  .then(() => {
    console.log("Succesfuly connected");
  })
  .catch((e) => {
    console.log(e);
  });

const sample = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 30) + 10;
    const camp = new Campground({
      title: `${sample(descriptors)} ${sample(places)}`,
      author: "65d8e71577431aeb5ac79230",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      image: "https://source.unsplash.com/collection/483251",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates eius porro, repellat commodi corrupti deserunt ut reiciendis nostrum ea nesciunt enim inventore asperiores quos corporis obcaecati! Possimus incidunt assumenda tempora",
      price: price,
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
