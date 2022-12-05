import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/index';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const incrementByHandler = amount => {
    dispatch(counterActions.incrementby(amount)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button
          type='button'
          onClick={incrementHandler}
        >Increment</button>
        <button
          type='button'
          onClick={() => incrementByHandler(4)}
        >Increment by 5</button>
        <button
          type='button'
          onClick={decrementHandler}
        >Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
