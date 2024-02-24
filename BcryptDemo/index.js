const bcrypt = require("bcrypt");

const hashPassword = async (pw) => {
  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(pw, salt);
  console.log(salt);
  console.log(hash);
};

const login = async (pw, hashed) => {
  const result = await bcrypt.compare(pw, hashed);
  if (result) {
    console.log("Logged In");
  } else {
    console.log("Invalid Password");
  }
};

// hashPassword("monkey"); output $2b$12$3YvqvtEeDUW0YLzqJZo3EeVHplt1VR1PlYJ6aCUgXF0raT0gzSO2.
login("monkey", "$2b$12$3YvqvtEeDUW0YLzqJZo3EeVHplt1VR1PlYJ6aCUgXF0raT0gzSO2.");
