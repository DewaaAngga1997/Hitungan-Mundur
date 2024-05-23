import { useRef, useState } from "react";

export default function Player() {
  const inputName = useRef();

  const [inputPayerName, setInputPayerName] = useState("");

  function handleClick() {
    setInputPayerName(inputName.current.value);
    inputName.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {inputPayerName ? inputPayerName : "unknown entity"}</h2>
      <p>
        <input ref={inputName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
