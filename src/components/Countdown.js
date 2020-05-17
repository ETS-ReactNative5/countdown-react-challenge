import React from "react";
import { useTimerContext } from "../context/TimerContext";

const Countdown = () => {
  const { countdown } = useTimerContext();
  const minutes = String(parseInt(countdown / 60)).padStart(2, "0");
  const seconds = String(countdown % 60).padStart(2, "0");
  return (
    <div className={`
      Countdown
      ${countdown <= 20? "danger" : ""}
      ${countdown <= 10 && countdown > 0 ? "blinking" : ""}
    `}>
      <span>{minutes}</span>
      <span>:</span>
      <span>{seconds}</span>
    </div>
  );
};

export default Countdown;
