// 1. FIRST REDUCER TO COMBINE
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

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

// 2. SECOND REDUCER TO COMBINE
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = { authenticated: false }, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        authenticated: true
      };
    case LOGOUT:
      return {
        authenticated: false
      };
    default:
      return state;
  }
};

// 3. COMBINING REDUCERS INTO ONE OBJECT
const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
});

// 4. PASSING THE REDUCER TO THE STORE
const store = Redux.createStore(rootReducer);
