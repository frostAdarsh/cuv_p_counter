
import { useState } from "react";
import CounterParent from "./CounterParent";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const handleInc = () => {
      setCounter((pre) => {
        return (pre += 1);
      });
    };
    const handleDec = () => {
      setCounter((pre) => {
        return (pre -= 1);
      });
    };
    const handleReset = () => {
      setCounter(0);
    };
  
    return (
      <>
        <h2>Counter with Parent Control</h2>
        <h1>{counter}</h1>
        <button onClick={handleInc}>increase</button>
        <button onClick={handleDec}>desrease</button>
        <CounterParent handleReset={handleReset} />
      </>
    );
}

export default Counter