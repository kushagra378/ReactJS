import React from "react";
import "./ErrorModal.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.okHandler} />;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="actions">
        <button onClick={props.okHandler}>OK</button>
      </footer>
    </div>
  );
};

const ErrorModal = (props) => {
  // const okHandler = () => {
  //   props.errorHandler();
  // };
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop okHandler={props.okHandler} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          okHandler={props.okHandler}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
export default ErrorModal;
