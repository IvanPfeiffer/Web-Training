import { useState } from "react";

export default function BetterSignUpForm() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleSubmit = () => {
    console.log(data.firstName, data.lastName);
  };

  const handleChange = (evt) => {
    const changedField = evt.target.name;
    const newValue = evt.target.value;
    setData((oldData) => {
      return { ...oldData, [changedField]: newValue };
    });
  };

  return (
    <div>
      <label htmlFor="first-name">First Name: </label>
      <input
        type="text"
        placeholder="First Name..."
        value={data.firstName}
        onChange={handleChange}
        name="firstName"
        id="first-name"
      />
      <label htmlFor="last-name">Last Name: </label>
      <input
        type="text"
        placeholder="Last Name..."
        value={data.lastName}
        onChange={handleChange}
        name="lastName"
        id="last-name"
      />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        placeholder="Password..."
        value={data.password}
        onChange={handleChange}
        name="password"
        id="password"
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
