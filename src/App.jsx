import Player from "./components/Player.jsx";
import TantanganWaktu from "./components/TantanganWaktu.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TantanganWaktu title="Easy" targetWaktu={1} />
        <TantanganWaktu title="Medium" targetWaktu={5} />
        <TantanganWaktu title="Hard" targetWaktu={10} />
        <TantanganWaktu title="Very Hard" targetWaktu={15} />
      </div>
    </>
  );
}

export default App;
