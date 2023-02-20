import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const resetHandler = () => {
    dispatch({ type: "reset" });
  };
  const toggleCounterHandler = () => {
    dispatch({ type: "toogle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={resetHandler}>Reset</button>
    </main>
  );
};

export default Counter;
