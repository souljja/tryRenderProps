import React from "react";
import { render } from "react-dom";
import MouseTracker from "./MouseTracker.js";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <MouseTracker />
  </div>
);

render(<App />, document.getElementById("root"));
