const AssigningJSXToVariable = ({ Name, isNames }) => {

  let Listnames = Name;
  if (isNames) {
    Listnames = Name + " ✔";
  }
  return (
    <li className="ListNames">
      {Listnames}
    </li>
  );
};


const ConditionallyAssigningJSXToAVariable = () => {
  return (
    <>
      <section>
        <h1>List Of Names</h1>
        <ul>
          <AssigningJSXToVariable
            isNames={true}
            Name={"Blacklion567"}
          />
          <AssigningJSXToVariable
            isNames={true}
            Name={"NocodeArea"}
          />
          <AssigningJSXToVariable
            isNames={false}
            Name={12345}
          />
        </ul>
      </section>
    </>

  );
};

export default ConditionallyAssigningJSXToAVariable;
