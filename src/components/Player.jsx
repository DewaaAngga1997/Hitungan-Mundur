import { useRef, useState } from "react";

export default function Player() {
  const input = useRef();

  const [inputPayerName, setInputPayerName] = useState("");

  function handleClick() {
    setInputPayerName(input.current.value);
    input.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {inputPayerName ? inputPayerName : "unknown entity"}</h2>
      <p>
        <input ref={input} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
