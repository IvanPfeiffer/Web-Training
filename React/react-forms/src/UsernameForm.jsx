import { useState } from "react";

export default function UsernameForm() {
  const [username, setUsername] = useState("");

  const handleUsernameChange = (evt) => {
    setUsername(evt.target.value);
  };

  return (
    <div>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={handleUsernameChange}
        name="username"
      />
      <button>Submit</button>
    </div>
  );
}
