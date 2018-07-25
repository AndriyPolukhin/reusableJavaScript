// Initiate a store

const reducer = (state = 5) => {
  return state;
};

// Here the store comes to play

const store = Redux.createStore(reducer);

// Update:

const store = Redux.createStore((state = 5) => satte);
// Get the state from the store:
const currentState = store.getState();

// Define an action
const action = {
  type: "LOGIN"
};

// to Send actions to the store we createa an actionCreator func

function actionCreator() {
  return action;
}

// The dispatch. This are equivalent:
store.dispatch(actionCreator());
store.dispatch({ type: "Login" });

// Dispatching an Action Event

const store = Redux.createStore((state = { login: false }) => state);

const loginAction = () => {
  return {
    type: "LOGIN"
  };
};

store.dispatch(loginAction());
