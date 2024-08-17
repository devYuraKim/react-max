import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { timeRemaining, targetTime, onReset },
  ref
) {
  //여기서 새로 만들어진 useRef는 ResultModal component 내에서 element manipulate하기 위해 정의
  const dialog = useRef();

  //useImperativeHandle의 ref parameter는 parent component에서 pass down된 것으로, 여기에서 사용되는 element specific function을 재정의한다
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);

  return (
    //onReset은 ESC 키로 modal 닫았을 때도 button click과 같은 효과를 내기 위함
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      <h2>You {timeRemaining > 0 ? "win" : "lost"}</h2>
      {timeRemaining > 0 && <h2>Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{timeRemaining / 1000} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        {/* here, onSubmit is the same as onClick on the button */}
        {/* MDN https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog */}
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
