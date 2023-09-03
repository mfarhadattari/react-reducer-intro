import Counter from "./components/Counter";
import ReducerCounter from "./components/ReducerCounter";

function App() {
  return (
    <div>
      <h1 className="text-center mt-5 text-2xl font-medium uppercase">
        React Reducer Intro
      </h1>
      <Counter />
      <ReducerCounter />
    </div>
  );
}

export default App;
