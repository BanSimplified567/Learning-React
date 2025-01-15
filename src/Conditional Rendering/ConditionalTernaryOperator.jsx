const Colors = ({ color, isColors }) => {

  return (
    <li className="ListName">
      {isColors ? (
        <del>
          {color + " ✔"}
        </del>
      ) : (
        color
      )}
    </li>
  );
};



const ConditionalTernaryOperator = () => {
  return (
    <>
      <section>
        <h1>List Of Colors</h1>
        <ul>
          <Colors
            isColors={true}
            color="Red"
          />
          <Colors
            isColors={true}
            color="Blue"
          />
          <Colors
            isColors={false}
            color="Blacklion567"
          />
        </ul>
      </section>
    </>
  );
};

export default ConditionalTernaryOperator;
