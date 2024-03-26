import "./App.css";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [newCount, setNewCount] = useState(0);
  const [newStep, setNewStep] = useState(1);
  const date = new Date("January 1 2024");
  const newDate = new Date("January 31 2023");
  date.setDate(date.getDate() + count);
  newDate.setDate(newDate.getDate() + newCount);
  function handleReset() {
    setNewCount(0);
    setNewStep(1);
  }
  return (
    <div className="App">
      <div className="">
        <h1>Simple Date Calculator</h1>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div className="App">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <strong>
          <span>{date.toDateString()}</span>
        </strong>
      </p>
      <h1>Upgraded Date Counter</h1>

      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={newStep}
          onChange={(e) => setNewStep(Number(e.target.value))}
        />
        <span>Step:{newStep}</span>
        <br />
        <button onClick={() => setNewCount((cc) => cc - newStep)}>-</button>
        <input
          type="text"
          value={Math.abs(newCount)}
          onChange={(e) => setNewCount(Number(e.target.value))}
        />
        <button onClick={() => setNewCount((cc) => cc + newStep)}>+</button>
        <br />
        <p>
          <span>
            {newCount === 0
              ? "Today is "
              : newCount > 0
              ? `${newCount} days from today is `
              : `${Math.abs(newCount)} days ago was `}
          </span>
          <span>{newDate.toDateString()}</span>
        </p>
        <br />
        {newCount !== 0 || newStep !== 1 ? (
          <div>
            <button onClick={handleReset}>Reset</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
