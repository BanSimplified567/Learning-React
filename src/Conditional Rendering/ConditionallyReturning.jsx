const Names = ({ name, isPacked }) => {
  return <li className="nameList">{name}</li>;
};


const ItemList = () => {
  return (
    <>
      <section>
        <h1>List Of name</h1>
        <ul>
          <Names
            isPacked={true}
            name="Blacklion567"
          />
          <Names
            isPacked={true}
            name="Nocodearea"
          />
          <Names
            isPacked={false}
            name="Aristides"
          />
        </ul>
      </section>
    </>
  );
};

export default ItemList;
