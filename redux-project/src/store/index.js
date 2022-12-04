import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  showCounter: true
};

const counterSlice = createSlice({
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

const store = configureStore({
  reducer: counterSlice.reducer
});

export default store;