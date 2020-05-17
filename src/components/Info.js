import React from "react";
import { useTimerContext } from "../context/TimerContext";

const Info = () => {
  const { countdown, seconds, isRunning } = useTimerContext();

  let text = "Stoped!";

  if (isRunning) {
    text = "Running!";
  }

  if (countdown / seconds < 0.5) {
    text = "More than halfway there!";
  }

  if (countdown === 0) {
    text = "Time’s up!";
  }

  return (
    <div className="Info">
      <span>{text}</span>
    </div>
  );
};

export default Info;
