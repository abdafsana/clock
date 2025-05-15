import { useState, useEffect } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => setTime((prev) => prev + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  const toggle = () => setRunning((prev) => !prev);

  return (
    <div>
      <h2>
        {String(Math.floor(time / 60)).padStart(2, "0")}:
        {String(time % 60).padStart(2, "0")}
      </h2>
      <button onClick={toggle}>
        {running ? "Dayan" : "Başla"}
      </button>
      {!running && time > 0 && alert(`Nəticə: ${time} saniyə`)}
    </div>
  );
}
