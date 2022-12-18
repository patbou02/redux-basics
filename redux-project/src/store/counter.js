import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
  counter: 0,
  showCounter: true
};

const counterSlice = createSlice({
  name: 'general',
  initialState: initialCounterState,
  reducers: {
    increment(state) { // action not needed here
      state.counter++; // here it is ok to manipulate the state since redux toolkit keeps track of the state behind the scenes.
    },
    decrement(state) {
      state.counter--;
    },
    incrementby(state, action) { // action needed here since we use it as additional payload.
      state.counter = state.counter + action.payload
    },
    toggle(state) {
      state.showCounter = !state.showCounter
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;