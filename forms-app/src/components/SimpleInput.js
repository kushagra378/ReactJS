import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastname,
    isValid: lastnameIsValid,
    hasError: lastnameInputHasError,
    valueChangeHandler: lastnameChangeHandler,
    inputBlurHandler: lastnameBlurHandler,
    reset: lastnameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  let formIsValid = false;
  if (nameIsValid && emailIsValid && lastnameIsValid) {
    formIsValid = true;
  }
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log("Name :", enteredName);
    console.log("Last Name :", enteredLastname);
    console.log("Email :", enteredEmail);
    nameReset();
    emailReset();
    lastnameReset();
  };
  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const lastnameInputClasses = lastnameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your First Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">First Name must not be empty!</p>
        )}
      </div>
      <div className={lastnameInputClasses}>
        <label htmlFor="name">Your Last Name</label>
        <input
          type="text"
          id="name"
          onChange={lastnameChangeHandler}
          onBlur={lastnameBlurHandler}
          value={enteredLastname}
        />
        {lastnameInputHasError && (
          <p className="error-text">Last Name must not be empty!</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Email must not be empty or missing '@' !</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
