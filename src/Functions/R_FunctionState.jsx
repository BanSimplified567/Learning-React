import { useState } from "react";

const R_FunctionState = () => {
  return <Headline />;
};

const Headline = () => {
  const [greeting, setGreeting] = useState(
    'React Components State'
  );

  return (
    <>
      <p>{greeting}</p>

      <input
        type="text"
        value={greeting}
        onChange={event => setGreeting(event.target.value)}
      />
    </>
  );
};


export default R_FunctionState;
