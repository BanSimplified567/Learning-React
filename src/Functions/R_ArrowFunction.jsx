
const ReactArrowFunction = () => {
  const arrowFunc = 'REACT ARROW FUNCTION';
  const arrowFunction = 'React Arrow Function';

  return (
    <>
      <Headline value={arrowFunc} />
      <Headlines value={arrowFunction} />
    </>
  );
};

const Headline = ({ value }) => {
  return <p>{value}</p>;
};
const Headlines = ({ value }) => <p>{value}</p>;

export default ReactArrowFunction;
