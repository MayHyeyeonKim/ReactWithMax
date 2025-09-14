import Player from "./components/Player";
import TimerChallenge from "./components/TimerChallenge";

function App() {
  const challenges = [
    { title: "Easy", targetTime: 1 },
    { title: "Not easy", targetTime: 5 },
    { title: "Getting tough", targetTime: 10 },
    { title: "Pros only", targetTime: 15 },
  ];
  return (
    <>
      <Player />
      <div id="challenges">
        {challenges.map((challenge) => (
          <TimerChallenge
            key={challenge.title}
            title={challenge.title}
            targetTime={challenge.targetTime}
          />
        ))}
      </div>
    </>
  );
}

export default App;
