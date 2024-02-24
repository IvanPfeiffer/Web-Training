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

const userSchema = new mongoose.Schema({
  first: String,
  last: String,
  address: [
    {
      _id: { _id: false },
      street: String,
      city: String,
      state: String,
      country: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const makeUser = async () => {
  const u = new User({
    first: "Harry",
    last: "Potter",
  });

  u.address.push({
    street: "123 Sesame St.",
    city: "NY",
    state: "NY",
    country: "US",
  });
  const res = await u.save();
  console.log(res);
};

const addAddress = async (id) => {
  const user = await User.findById(id);
  user.address.push({
    street: "99 Sesame St.",
    city: "NY",
    state: "NY",
    country: "US",
  });
  await user.save();
};

makeUser();
