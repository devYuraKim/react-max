import { useState } from "react";

function TimerChallenge({ title, targetTime }) {
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  function handleStart() {
    setTimerStarted(true);
    setTimeout(() => {
      setTimerExpired(true);
      setTimerStarted(false);
    }, targetTime * 1000);
  }

  function handleStop() {
    setTimerStarted(false);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You Lost</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleStart}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerStarted ? "active" : ""}>
        Timer {timerStarted ? "running" : "inactive"}
      </p>
    </section>
  );
}

export default TimerChallenge;
