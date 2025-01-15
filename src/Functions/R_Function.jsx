// # REACT FUNCTION COMPONENT EXAMPLE
const ReactFunction = () => {
  const greeting = 'REACT FUNCTION';

  return (
    <>
      <p>{greeting}</p>
      <Headline />
    </>
  );
};

function Headline() {
  const greeting = 'React Functions';

  return <p>{greeting}</p>;
}

export default ReactFunction;
