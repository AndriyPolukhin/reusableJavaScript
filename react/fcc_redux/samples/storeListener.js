// GLOBAL VARIABLE FOR USE IN ACTION TYPES
const ADD = 'ADD';

// REDUCER Created

const reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

// Add Reducer to the store
const store = Redux.createStore(reducer);

// Set up the listener

// 1.Counter
let count = 0;
// 2. funciton
const increment = () => {
  count += 1;
};
// 3. subsctibe to the store
store.subscribe(increment);

// Call the action
store.dispatch(ADD);
console.log(count);
store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);
