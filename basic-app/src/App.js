import { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    setCount((count) => count + 1);
  }
  useEffect(function () {
    getAdvice();
  }, []);
  return (
    <div>
      <h1> Hello World</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <p>{advice}</p>
      <Message count={count} />
    </div>
  );
}
function Message(props) {
  return (
    <p>
      You have taken <strong>{props.count}</strong> advices so far
    </p>
  );
}
export default App;
