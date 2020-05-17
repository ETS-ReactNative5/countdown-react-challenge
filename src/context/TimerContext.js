import React, { createContext, useState, useEffect, useContext } from "react";

const TimerContext = createContext(null);

const TimerProvider = ({ children }) => {
  const timesup = new Audio('./timesup.mp3');
  const [seconds, setSeconds] = useState(60); // Initial timer seconds
  const [countdown, setCountdown] = useState(60); // Remaining timer seconds
  const [isRunning, setIsRunning] = useState(false); // Is the rimer running?
  const [speed, setSpeed] = useState(1); // How fast is running?

  useEffect(() => {
    /**
     * Decrease the countdown each tick
     * and stops the counter when countdown reachs 0
     */
    function onTick() {
      const remaining = countdown - 1;

      if (remaining <= 0) {
        setIsRunning(false);
        setCountdown(0);
        timesup.play();
        return;
      }

      setCountdown(remaining);
    }

    let id;
    if (isRunning) {
      id = setInterval(onTick, 1000 / speed);
    }

    return () => clearInterval(id);
  }, [countdown, seconds, speed, isRunning, timesup]);

  return (
    <TimerContext.Provider
      value={{
        countdown,
        isRunning,
        seconds,
        setCountdown,
        setIsRunning,
        setSeconds,
        setSpeed,
        speed,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

const useTimerContext = () => {
  const context = useContext(TimerContext);
  if (context === null) {
    throw new Error(
      "useTimerContext must be used within an TimerContextProvider"
    );
  }
  return context;
};

export { TimerProvider, useTimerContext };
export default TimerContext;
