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
  username: String,
  age: Number,
});

const tweetSchema = new mongoose.Schema({
  text: String,
  likes: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

const makeTweet = async () => {
  //   const u = new User({ username: "u", age: 24 });
  const u = await User.findOne({ username: "u" });
  //   const t1 = new Tweet({ text: "This is the 1st tweet", likes: 0 });
  const t2 = new Tweet({ text: "This is the 2nd tweet", likes: 1000 });
  t2.user = u;
  //   u.save();
  t2.save();
};

// makeTweet();

const findTweet = async () => {
  const t = await Tweet.findOne({}).populate("user", "username");
  console.log(t);
};

findTweet();
