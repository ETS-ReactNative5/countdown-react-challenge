import React from "react";
import { useTimerContext } from "../context/TimerContext";

const SpeedControls = () => {
  const { setSpeed, speed, setIsRunning, isRunning } = useTimerContext();

  return (
    <div className="Controls">
      <button
        onClick={() => setIsRunning(!isRunning)}
        className={!isRunning ? "selected" : "danger"}
      >
        <i className={`fa fa-${isRunning ? "pause" : "play"}`}></i>
      </button>
      <button
        onClick={() => setSpeed(1)}
        className={speed === 1 ? "selected" : ""}
      >
        1x
      </button>
      <button
        onClick={() => setSpeed(1.5)}
        className={speed === 1.5 ? "selected" : ""}
      >
        1.5x
      </button>
      <button
        onClick={() => setSpeed(2)}
        className={speed === 2 ? "selected" : ""}
      >
        2x
      </button>
    </div>
  );
};

export default SpeedControls;
