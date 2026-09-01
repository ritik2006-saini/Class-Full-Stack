import React, { useState, useEffect, useRef } from "react";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [running]);

  const startTimer = () => {
    setRunning(true);
  };

  const pauseTimer = () => {
    setRunning(false);
  };

  const resetTimer = () => {
    setRunning(false);
    setSeconds(0);
  };

  return (
    <div>
      <h2>Stopwatch</h2>

      <h3>{seconds} sec</h3>

      <button onClick={startTimer}>
        Start
      </button>

      <button onClick={pauseTimer}>
        Pause
      </button>

      <button onClick={resetTimer}>
        Reset
      </button>
    </div>
  );
};

export default Stopwatch;