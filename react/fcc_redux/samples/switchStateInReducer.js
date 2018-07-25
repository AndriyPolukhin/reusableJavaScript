// Switch Statement to Handle Multiple Actions

// 1. Set the default state
const defaultState = {
  authenticated: false
};

// 2. Set the reducer for authentications
const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return (state = { authenticated: true });
      break;
    case 'LOGOUT':
      return (state = { authenticated: false });
      break;
    default:
      return state;
  }
};

// 3. Pass the authReducer to the store
const store = Redux.createStore(authReducer);

// 4. Create Actions

const loginUser = () => {
  return {
    type: 'LOGIN'
  };
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  };
};
