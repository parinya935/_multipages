import "./timer.css";
import { useEffect, useState } from "react";

function Timer() {
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = null;
    if (running) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!running && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running, seconds]);

  function runClick() {
    setRunning(!running);
  }

  function secondsToString(seconds) {
    const minute = 60
    const hour = minute * 60
    const day = hour * 24

    const d = Math.floor(seconds / day)
    const h = Math.floor((seconds % day) / hour)
    const m = Math.floor((seconds % hour) / minute)
    const s = Math.floor(seconds % minute)

    if (d > 0) {
        return `${d}d ${h}h ${m}m ${s}s`
    } else if (h > 0) {
        return `${h}h ${m}m ${s}s`
    } else if (m > 0) {
        return `${m}m ${s}s`
    } else {
        return `${s}s`
    }
  }

  function resetClick() {
    setRunning(false);
    setSeconds(0);
  }

  return (
    <div className="timer-container">
      <h3 className="timer-title">Timer</h3>
      <p>
        <input
          className="timer-display"
          type="text"
        //   placeholder="1d 1h 1m 1s"
          value={secondsToString(seconds)}
          readOnly={true}
        />
      </p>
      <div className="timer-buttons">
        <button className="btn btn-danger" onClick={resetClick}>Reset</button>
        <button className={"btn " + (running ? "btn-warning" : "btn-success") + " btn-success"} onClick={runClick}>
          {running ? "Pause" : "Run"}
        </button>
      </div>
    </div>
  );
}

export default Timer;
