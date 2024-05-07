import React from "react";

export default function Nilai({ nilai, targetWaktu }) {
  return (
    <dialog className="result-modal" open>
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
}
