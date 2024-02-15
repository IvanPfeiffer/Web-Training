/* eslint-disable react/prop-types */
import { Button, Rating } from "@mui/material";
import { useEffect, useState } from "react";

export default function RatingDemo({ maxValue }) {
  const [score, setScore] = useState(-0.2);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    if (load) {
      setScore((oldScore) => {
        if (oldScore <= maxValue) {
          return oldScore + 0.1;
        } else {
          return 0;
        }
      });
    }
  }, [score, load]);

  const toggleLoading = () => {
    setLoad(!load);
  };
  return (
    <div>
      {/* <h1>Rating Demo. Current Score: {score} </h1> */}
      <Rating
        name="half-rating"
        precision={0.1}
        value={score}
        onChange={(event, newValue) => {
          setScore(newValue);
        }}
        max={maxValue}
        data-testid="Rating"
        emptyIcon={"😗"}
        icon={"😘"}
      />
      <Button color="success" variant="outlined" onClick={toggleLoading}>
        Outlined
      </Button>
    </div>
  );
}
