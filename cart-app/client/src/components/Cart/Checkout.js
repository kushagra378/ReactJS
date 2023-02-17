import { useState, useContext, useRef } from "react";
import CartContext from "../../store/cart-context";
import classes from "./Checkout.module.css";
import Loading from "../../assets/loading.gif";

const Checkout = (props) => {
  const [isSending, setIsSending] = useState(false);

  const [isValid, setIsValid] = useState({
    name: true,
    street: true,
    city: true,
    pin: true,
  });

  const cartCtx = useContext(CartContext);
  const nameRef = useRef();
  const streetRef = useRef();
  const pinRef = useRef();
  const cityRef = useRef();

  const sendData = async (data) => {
    let dataInJSON = [];
    dataInJSON.push(JSON.stringify(data));
    setIsSending(true);
    try {
      const response = await fetch("/db", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: dataInJSON,
      });
      const dataSent = await response.json();
      alert(dataSent.status);
    } catch (error) {
      alert("Sorry! Cannot Place Order!\nServer is Down...");
      console.log("Error Found :", error);
    }
  };
  const checkoutHandler = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const street = streetRef.current.value;
    const pin = pinRef.current.value;
    const city = cityRef.current.value;

    const enteredNameIsValid = name.trim() !== "";
    const enteredStreetIsValid = street.trim() !== "";
    const enteredCityIsValid = city.trim() !== "";
    const enteredPinIsValid = pin.trim().length === 6;

    setIsValid({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      pin: enteredPinIsValid,
    });

    let formIsValid = true;

    formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPinIsValid &&
      enteredCityIsValid;

    if (formIsValid) {
      const address = "" + street + ", " + city + ", " + pin;
      const data = {
        items: cartCtx.items,
        totalAmount: cartCtx.totalAmount.toFixed(2),
        datetime: new Date(),
        name: name,
        address: address,
      };
      await sendData(data);
      setIsSending(false);
      props.onClose();
      cartCtx.emptyItem();
    }
  };

  const nameControlClasses = `${classes.control} ${
    isValid.name ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    isValid.street ? "" : classes.invalid
  }`;
  const pinControlClasses = `${classes.control} ${
    isValid.pin ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    isValid.city ? "" : classes.invalid
  }`;
  return (
    <div>
      {isSending ? (
        <div className={classes.gif}>
          <img src={Loading} alt="Loading..." />
        </div>
      ) : (
        <div>
          <h1 className={classes.cartheader}>Confirm Order</h1>
          <form className={classes.form} onSubmit={checkoutHandler}>
            <div className={nameControlClasses}>
              <label htmlFor="name">Your Name</label>
              <input ref={nameRef} type="text" id="name" />
              {!isValid.name && <p>Enter Valid Name...</p>}
            </div>
            <div className={streetControlClasses}>
              <label htmlFor="street">Street</label>
              <input ref={streetRef} type="text" id="street" />
              {!isValid.street && <p>Enter Valid Street...</p>}
            </div>
            <div className={pinControlClasses}>
              <label htmlFor="postal">PIN Code</label>
              <input
                ref={pinRef}
                type="number"
                id="postal"
                min="100000"
                max="999999"
                step="1"
              />
              {!isValid.pin && <p>Enter Valid PinCode...</p>}
            </div>
            <div className={cityControlClasses}>
              <label htmlFor="city">City</label>
              <input ref={cityRef} type="text" id="city" />
              {!isValid.city && <p>Enter Valid City...</p>}
            </div>
            <div className={classes.actions}>
              <button type="button" onClick={props.onCancel}>
                Cancel
              </button>
              <button className={classes.submit}>Confirm</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
