import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

function TimerChallenge({ title, targetTime }) {
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  const timer = useRef();
  const dialog = useRef();

  //ref object returned by useRef has a property called current that holds the mutable value

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      console.log(dialog.current);
      dialog.current.showModal();
      // showModal()은 input element의 자체 function인데, ref가 하는 일이 이런 요소에 접근 가능하도록 하는 것임
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        result={timerExpired ? "lose" : "win"}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : ""}>
          Timer {timerStarted ? "running" : "inactive"}
        </p>
      </section>
    </>
  );
}

export default TimerChallenge;
