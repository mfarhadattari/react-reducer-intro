import { useReducer } from "react";

const ReducerCounter = () => {
  const initialValue = 0;

  const counterReducer = (state, action) => {
    console.log(state, action.type);
    switch (action.type) {
      case "increment":
        return (state = state + 1);
      case "decrement":
        return (state = state - 1);
      case "incrementByValue":
        return (state = state + action.payload);
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(counterReducer, initialValue);

  return (
    <div className="w-[300px] h-[200px] mx-auto mt-10 border p-5 rounded-md">
      <h1 className="text-lg font-medium text-center uppercase">
        Reducer Counter
      </h1>
      <div className="flex justify-between items-center w-full my-5">
        <button className="btn" onClick={() => dispatch({ type: "decrement" })}>
          Decrease
        </button>
        <div className="text-3xl">{state}</div>
        <button className="btn" onClick={() => dispatch({ type: "increment" })}>
          Increase
        </button>
      </div>
      <button
        className="btn w-full"
        onClick={() => dispatch({ type: "incrementByValue", payload: 5 })}
      >
        Increment by 5
      </button>
    </div>
  );
};

export default ReducerCounter;
