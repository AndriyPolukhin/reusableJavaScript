// Handle an Action in the Store

// 1. Set the default state
const defaultState = {
  login: false
};

// 2. Create a reducer that holds works with state
const reducer = (state = defaultState, action) => {
  // 2.1 Process action of type
  if (action.type === "LOGIN") {
    return (state = { login: true });
  } else {
    // 2.2 fall back to the  default state
    return defaultState;
  }
};

// 3. Create a store that uses the reducer
const store = Redux.createStore(reducer);

// 4. Set the Actions
const loginAction = () => {
  return {
    type: "LOGIN"
  };
};
