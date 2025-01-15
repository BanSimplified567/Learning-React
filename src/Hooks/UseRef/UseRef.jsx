import { useState, useEffect, useRef } from "react";

const UseRef = () => {

  const [inputValue, setInputValue] = useState('');
  const count = useRef(0);
  const previousInputElementValue = useRef('');
  const inputElement = useRef();


  useEffect(() => {
    previousInputElementValue.current = inputValue;
  }, [inputValue]);

  useEffect(() => {
    count.current = count.current + 1;
    console.log(count.current);
  }, [inputValue]);

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (

    <>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input type="text" ref={inputElement} />
        <button onClick={focusInput}>Focus Input</button>

        <h1>Render Count: {count.current}</h1>
        <h2>Current Value: {inputValue}</h2>
        <h2>Previous Value: {previousInputElementValue.current}</h2>
      </div>
    </>
  );
};

export default UseRef;
