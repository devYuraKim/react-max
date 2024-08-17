import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
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
  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left</strong>
      </p>
      <form method="dialog">
        {/* MDN https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog */}
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
