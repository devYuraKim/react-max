import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" target={1} />
        <TimerChallenge title="Not Easy" target={5} />
        <TimerChallenge title="Getting Touch" target={10} />
        <TimerChallenge title="Pros Only" target={15} />
      </div>
    </>
  );
}

export default App;
