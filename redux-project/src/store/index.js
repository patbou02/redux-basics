import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  showCounter: true
};

createSlice({
  name: 'general',
  initialState, // same as initialState: initialState
  reducers: {
    increment(state) { // action not needed here
      state.counter++; // here it is ok to manipulate the state since redux toolkit keeps track of the state behind the scenes.
    },
    decrement(state) {
      state.counter--;
    },
    incrementby(state, action) { // action needed here since we use it as additional payload.
      state.counter = state.counter + action.amount
    },
    toggle(state) {
      state.showCounter = !state.showCounter
    }
  }
});


export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
export const INCREMENTBY = 'incrementby';
export const TOGGLE = 'toggle';

const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    };
  }

  if (action.type === DECREMENT) {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    };
  }

  if (action.type === INCREMENTBY) {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter
    };
  }

  if (action.type === TOGGLE) {
    return {
      counter: state.counter,
      showCounter: !state.showCounter
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;