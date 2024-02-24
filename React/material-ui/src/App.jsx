import Button from "@mui/material/Button";
import RatingDemo from "./Rating-Demo";
import FormDemo from "./FormDemo";
import "./App.css";
import Navbar from "./NavBar";

function App() {
  return (
    <div>
      <Navbar />
      <Button variant="contained">Contained</Button>
      <Button color="success" variant="outlined">
        Outlined
      </Button>
      <Button size="large" color="error" variant="text">
        Text
      </Button>
      <RatingDemo maxValue={15} />
      <FormDemo />
    </div>
  );
}

export default App;
