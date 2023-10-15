import "./App.css";
import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handlePrevCount() {
    setCount((currCount) => currCount - step);
  }

  function handleNextCount() {
    setCount((currCount) => currCount + step);
  }

  function clacFutureDate(count) {
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + count);

    return futureDate.toDateString();
  }

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span style={{ fontSize: "32px" }}>{step}</span>
      </div>
      <div>
        <button style={{ fontSize: "32px" }} onClick={handlePrevCount}>
          -
        </button>
        <input
          type="text"
          style={{ fontSize: "32px" }}
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <button style={{ fontSize: "32px" }} onClick={handleNextCount}>
          +
        </button>
      </div>
      <span style={{ fontSize: "32px" }}>
        {count > 0
          ? `${count} days from today is: `
          : count < 0
          ? `${Math.abs(count)} days ago was: `
          : `Today is : `}
      </span>
      <span style={{ fontSize: "32px" }}>{clacFutureDate(count)}</span>

      <div>
        <Reset count={count} setCount={setCount} setStep={setStep} />
      </div>
    </div>
  );
}

function Reset({ count, setCount, setStep }) {
  console.log(count);
  if (count === 0) return;
  return (
    <button
      style={{ fontSize: "32px" }}
      onClick={() => {
        setCount(0);
        setStep(1);
      }}
    >
      Reset
    </button>
  );
}
