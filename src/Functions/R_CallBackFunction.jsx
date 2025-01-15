import { useState } from "react";

const R_CallBackFunction = () => {

  const [greeting, setGreeting] = useState(
    'React CallBack Function'
  );
  const HandleChange = event => setGreeting(event.target.value);

  return (
    <>

      <App headline={greeting} onChangeHeadline={HandleChange} />

    </>
  );
};


const App = ({ headline, onChangeHeadline }) => (
  <div>
    <p>{headline}</p>
    <input type="text" value={headline} onChange={onChangeHeadline} />

  </div>
);

export default R_CallBackFunction;
