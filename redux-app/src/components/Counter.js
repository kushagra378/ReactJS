import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const resetHandler = () => {
    dispatch(counterActions.reset());
  };
  const toggleHandler = () => {
    dispatch(counterActions.toogle());
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
      <button onClick={toggleHandler}>Toggle Counter</button>
      <button onClick={resetHandler}>Reset</button>
    </main>
  );
};

export default Counter;
