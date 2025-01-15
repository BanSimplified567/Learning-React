function Item({ car, isCars }) {
  if (isCars) {
    return null;
  }
  return <li classcar="item">{car}</li>;
}

const CarsList = () => {
  return (
    <section>
      <h1>List Of Cars</h1>
      <ul>
        <Item
          isCars={true}
          car="BMW"
        />
        <Item
          isCars={true}
          car="Ford"
        />
        <Item
          isCars={false}
          car="nocodearea"
        />
      </ul>
    </section>
  );
};

export default CarsList;
