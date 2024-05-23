import { useRef, useState } from "react";
import NilaiModal from "./NilaiModal";

export default function TantanganWaktu({ title, targetWaktu }) {
  const timer = useRef();
  const dialog = useRef();

  const [waktuTersisa, setWaktuTersisa] = useState(targetWaktu * 1000);

  const waktuAktif = waktuTersisa > 0 && waktuTersisa < targetWaktu * 1000;

  if (waktuTersisa <= 0) {
    clearInterval(timer.current);
    setWaktuTersisa(targetWaktu * 1000);
    dialog.current.open();
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setWaktuTersisa((prevWaktuTersisa) => prevWaktuTersisa - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }
  return (
    <>
      <NilaiModal ref={dialog} targetWaktu={targetWaktu} nilai="Lost" />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetWaktu} second{targetWaktu > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={waktuAktif ? handleStop : handleStart}>
            {waktuAktif ? "Stop" : "Start"} Game
          </button>
        </p>
        <p className={waktuAktif ? "active" : undefined}>
          {waktuAktif ? "Waktu Berjalan..." : "Waktu Belum Berjalan"}
        </p>
      </section>
    </>
  );
}
