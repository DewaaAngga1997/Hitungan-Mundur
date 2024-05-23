import React, { forwardRef, useImperativeHandle, useRef } from "react";

const NilaiModal = forwardRef(function NilaiModal({ nilai, targetWaktu }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
  }));

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {nilai}</h2>
      <p>
        The target time was <strong>{targetWaktu} seconds.</strong>
      </p>
      <p>
        You Stop the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default NilaiModal;
