const Dialog = (props) => {
  return (
    <>
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <h1 className="Dialog-message">
        {props.message}
      </h1>
    </>
  );
};

const WelcomeDialog = () => {
  return (
    <Dialog
      title="Welcome"
      message="Welcome to the world of React"
    />
  );
};

export default WelcomeDialog;
