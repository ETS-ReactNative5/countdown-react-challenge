import React, { useState } from "react";
import { useTimerContext } from "../context/TimerContext";

const Form = () => {
  const { seconds, setSeconds, setIsRunning, setCountdown } = useTimerContext();
  const [minutes, setMinutes] = useState(seconds / 60);

  function handleMinutesChange(e) {
    setMinutes(e.target.value);
  }

  function handleStart(e) {
    e.preventDefault();
    const seconds = minutes * 60;
    setSeconds(seconds);
    setCountdown(seconds);
    setIsRunning(true);
  }

  return (
    <>
      <form className="Form" onSubmit={handleStart}>
        <span>Countdown:</span>
        <input
          autoFocus
          id="minutes"
          min="1"
          onChange={handleMinutesChange}
          placeholder="Minutes"
          step="1"
          type="number"
          value={minutes}
        />
        <button type="submit" onClick={handleStart}>
          Start
        </button>
      </form>
      <label className="Label" htmlFor="minutes">
        {minutes > 1 ? "Minutes" : "Minute"}
      </label>
    </>
  );
};

export default Form;
