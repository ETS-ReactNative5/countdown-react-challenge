import React from "react";

import Countdown from "./Countdown";
import Controls from "./Controls";
import Info from "./Info";
import Form from "./Form";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Wrapper">
        <Info />
        <Countdown />
        <Controls />
        <Form />
      </div>
    </div>
  );
}

export default App;
