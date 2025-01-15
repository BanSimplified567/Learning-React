// # REACT FUNCTION COMPONENT: PROPS
function ReactFunctionComponentsprops() {

  const greeting = 'REACT FUNCTION COMPONENT: PROPS';
  const greetings = 'React Function Component Props';

  return (
    <>
      <Headline value={greeting} />
      <Headlines value={greetings} />
    </>);
}

function Headline(props) {
  return <p>{props.value}</p>;
}

function Headlines({ value }) {
  return <p>{value}</p>;
}


export default ReactFunctionComponentsprops;
