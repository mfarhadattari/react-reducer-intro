import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="w-[300px] h-[200px] mx-auto mt-10 border p-5 rounded-md">
      <h1 className="text-lg font-medium text-center uppercase">Counter</h1>
      <div className="flex justify-between items-center w-full h-full">
        <button className="btn" onClick={() => setCount((state) => state - 1)}>
          Decrease
        </button>
        <div className="text-3xl">{count}</div>
        <button className="btn" onClick={() => setCount((state) => state + 1)}>
          Increase
        </button>
      </div>
    </div>
  );
};

export default Counter;
