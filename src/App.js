import "./App.css";
import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handlePrevStep() {
    setStep((currStep) => currStep - 1);
  }

  function handleNextStep() {
    setStep((currStep) => currStep + 1);
  }
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
        <button style={{ fontSize: "40px" }} onClick={handlePrevStep}>
          -
        </button>
        <span style={{ fontSize: "32px" }}>Step: {step}</span>
        <button style={{ fontSize: "32px" }} onClick={handleNextStep}>
          +
        </button>
      </div>
      <div style={{ textAlign: "center" }}>
        <button style={{ fontSize: "32px" }} onClick={handlePrevCount}>
          -
        </button>
        <span style={{ fontSize: "32px" }}>Count: {count}</span>
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
    </div>
  );
}
