const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const state = 0;

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const incAction = () => {
  return {
    type: INCREMENT,
    state: state + 1
  };
};

const decAction = () => {
  return {
    type: DECREMENT,
    state: state - 1
  };
};

const store = Redux.createStore(counterReducer);
