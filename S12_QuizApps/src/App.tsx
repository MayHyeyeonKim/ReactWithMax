import Header from "./components/Header";
import Quiz from "./components/Quiz";

function App() {
  return (
    <>
      <h2
        style={{
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
        }}
      >
        {" "}
        Quiz Apps
      </h2>
      <Header />
      <Quiz />
    </>
  );
}

export default App;
