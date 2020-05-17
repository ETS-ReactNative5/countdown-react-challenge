import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { TimerProvider } from "./context/TimerContext";

ReactDOM.render(
  <TimerProvider>
    <App />
  </TimerProvider>,
  document.getElementById("root")
);
