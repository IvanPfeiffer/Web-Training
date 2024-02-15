import { TextField, Slider, Box } from "@mui/material";
import { useState } from "react";

export default function FormDemo() {
  const [name, setName] = useState("");
  const [volume, setVolume] = useState(50);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const handleVolumeChange = (event, newVolume) => {
    setVolume(newVolume);
  };
  return (
    <Box sx={{ border: "1px solid red", p: 3, width: 200, margin: "0 auto" }}>
      <h1>The new name is: {name}</h1>
      <TextField
        placeholder="Puppy Name"
        id="outlined-basic"
        label="Puppy"
        variant="outlined"
        value={name}
        onChange={updateName}
      />
      <h1>Volume is {volume}</h1>
      <Slider
        aria-label="Volume"
        value={volume}
        onChange={handleVolumeChange}
      />
    </Box>
  );
}
