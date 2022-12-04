import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };
  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };
  const incrementByFiveHandler = amount => {
    dispatch({
      type: 'incrementbyfive',
      amount: amount
    });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button
          type='button'
          onClick={incrementHandler}
        >Increment</button>
        <button
          type='button'
          onClick={() => incrementByFiveHandler(5)}
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
