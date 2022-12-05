import { createSlice, configureStore } from '@reduxjs/toolkit';

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
    }
  }
});

const initialAuthState = {
  isAuthenticated: false
}

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true
    },
    logout(state) {
      state.isAuthenticated = false
    }
  }
})

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer
  }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;