const Name = ({ name, isPacked }) => {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }
  return <li className="listName">{name}</li>;
};

const ListNames = () => {
  return (
    <>
      <section>
        <h1>List Of Names</h1>
        <ul>
          <Name
            isPacked={true}
            name="Blacklion567"
          />
          <Name
            isPacked={true}
            name="Nocodearea"
          />
          <Name
            isPacked={false}
            name="Aristides"
          />
        </ul>
      </section>
    </>
  );
};

export default ListNames;
