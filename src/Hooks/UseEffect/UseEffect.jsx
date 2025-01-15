import { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => num * 2);
  }, [num]); // <- add the num variable here

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [count]);


  return (
    <>
      <div>
        <h1>I rendered {count} times!</h1>

        <p>Count: {num}</p>
        <button onClick={() => setNum((c) => c + 1)}>+</button>
        <p>Calculation: {calculation}</p>
      </div>


    </>
  );
};

export default UseEffect;
