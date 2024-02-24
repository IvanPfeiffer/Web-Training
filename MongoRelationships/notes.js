// One to few

const oneToFew = {
  name: "Tommy Cash",
  saveAddresses: [
    { street: "Hola1", city: "Mexico", country: "Mexico" },
    { street: "Hola2", city: "Acapulco", country: "Mexico" },
  ],
};

// One to Many
// This stores a reference to a document instead of the document itself
const oneToMany = {
  farmName: "Pollos Locos",
  location: "Guinda, CA",
  produce: [ObjectID("12334"), ObjectID("12335"), ObjectID("12336")],
};

// One to Bajillions
// The parent is related to the child
const oneToBajilions = {
  text: "This is a tweet",
  tags: [1, 2, 3, 4],
  user: ObjectID("123444"),
};
