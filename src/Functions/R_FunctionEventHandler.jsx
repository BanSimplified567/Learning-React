import { useState } from "react";

const R_FunctionEventHandler = () => {
  return <App />;
};

const App = () => {

  const [greeting, setGreeting] = useState('React Function Components!');

  const HandleChange = event => setGreeting(event.target.value);

  return (
    <>
      <p>{greeting}</p>

      <input type="text" value={greeting} onChange={HandleChange} />
    </>
  );
};

export default R_FunctionEventHandler;
