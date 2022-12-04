import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT, DECREMENT, INCREMENTBY, TOGGLE } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  const toggleCounterHandler = () => {
    dispatch({ type: TOGGLE });
  };

  const incrementHandler = () => {
    dispatch({ type: INCREMENT });
  };
  const decrementHandler = () => {
    dispatch({ type: DECREMENT });
  };
  const incrementByFiveHandler = amount => {
    dispatch({
      type: INCREMENTBY,
      amount: amount
    });
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
