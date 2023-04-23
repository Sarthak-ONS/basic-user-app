import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <Card>
      <div className={classes.backdrop} onClick={props.onClick}></div>
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onClick}>Okay!</Button>
        </footer>
      </div>
    </Card>
  );
};

export default ErrorModal;
