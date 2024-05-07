import { useRef, useState } from "react";
import Nilai from "./Nilai";

// let timer;
export default function TantanganWaktu({ title, targetWaktu }) {
  const timer = useRef();
  const [waktuDiMulai, setWaktuDiMulai] = useState(false);
  const [waktuHabis, setWaktuHabis] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setWaktuHabis(true);
    }, targetWaktu * 1000);
    setWaktuDiMulai(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }
  return (
    <>
      {waktuHabis && <Nilai targetWaktu={targetWaktu} nilai="Lost" />}
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetWaktu} second{targetWaktu > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={waktuDiMulai ? handleStop : handleStart}>
            {waktuDiMulai ? "Stop" : "Start"} Game
          </button>
        </p>
        <p className="{waktuDiMulai ? 'active' : undefined}">
          {waktuDiMulai ? "Waktu Berjalan..." : "Waktu Belum Berjalan"}
        </p>
      </section>
    </>
  );
}
