import { useState } from "react";

const UseState01 = () => {

  const [state, setState] = useState({
    names: "React", age: 20
  });
  const [num, setNum] = useState([1, 2, 3, 4, 5]);

  const UpdateName = () => {
    const names = [
      'Blacklion567',
      'nocodeare',
      'Proline',
      'JaiJai'
    ];
    const randomNum = Math.floor(Math.random() * names.length);
    setState({ ...state, names: names[randomNum] });
  };

  const UpdateAge = () => {
    setState({ ...state, age: state.age + 1 });
  };


  const UpdateNum = () => {
    const numbers = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const randomNum = Math.floor(Math.random() * numbers.length);
    setNum([...num, numbers[randomNum]]);
  };

  const DeleteNum = () => {
    setNum(num.slice(0, num.length - 1));
  };


  return (
    <>
      <p>{state.names}</p>
      <p>{state.age}</p>
      <p>{num}</p>

      <button
        onClick={UpdateAge}
      >
        Click Me
      </button>

      <button
        onClick={UpdateName}
      >
        Click Me
      </button>

      <button
        onClick={UpdateNum}
      >
        NumClick
      </button>

      <button
        onClick={DeleteNum}
      >
        Delete Num
      </button>
    </>
  );
};

export default UseState01;
