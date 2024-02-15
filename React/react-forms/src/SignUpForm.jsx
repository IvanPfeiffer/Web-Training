import { useState } from "react";

export default function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstNameChange = (evt) => {
    setFirstName(evt.target.value);
  };

  const handleLastNameChange = (evt) => {
    setLastName(evt.target.value);
  };

  const handleSubmit = () => {
    console.log(firstName, lastName);
  };

  return (
    <div>
      <label htmlFor="first-name">First Name: </label>
      <input
        type="text"
        placeholder="First Name..."
        value={firstName}
        onChange={handleFirstNameChange}
        name="first-name"
      />
      <label htmlFor="last-name">Last Name: </label>
      <input
        type="text"
        placeholder="Last Name..."
        value={lastName}
        onChange={handleLastNameChange}
        name="last-name"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
