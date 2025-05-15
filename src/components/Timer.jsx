import { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (seconds === 0 && isRunning) {
      alert("Taymer bitdi!");
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const increment = (amount) => {
    if (!isRunning) setSeconds((prev) => prev + amount);
  };

  const toggleTimer = () => setIsRunning((prev) => !prev);

  return (
    <div>
      <h2>{String(Math.floor(seconds / 60)).padStart(2, "0")}:
          {String(seconds % 60).padStart(2, "0")}</h2>

      {!isRunning && (
        <div>
          <button onClick={() => increment(60)}>+1 dəq</button>
          <button onClick={() => increment(10)}>+10 san</button>
        </div>
      )}

      <button onClick={toggleTimer}>
        {isRunning ? "Pauza" : "Başla"}
      </button>
    </div>
  );
}
