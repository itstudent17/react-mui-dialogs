import React from "react";
import "./App.css";
import { Circle } from "./components/Circle";
import { Triangle } from "./components/Triangle";

function App() {
  return (
    <div className="App">
      <Circle />
      <hr />
      <Triangle />
    </div>
  );
}

export default App;
