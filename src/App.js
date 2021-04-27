import { useState } from "react";
import EiffelTower from "./components/EiffelTower";
import Home from "./components/Home";
import Seine from "./components/Seine";
import Slides from "./components/Slides";
import "./styles.css";

export default function App() {
  const [state, setState] = useState(0);
  return (
    <div className="App">
      <h3
        onClick={() => {
          setState(0);
        }}
      >
        Home
      </h3>
      {state === 0 && <Home />}
      {state === 1 && <EiffelTower />}
      {state === 2 && <Seine />}
      <Slides state={state} setState={setState} />
      {/* <EiffelTower /> */}
    </div>
  );
}
