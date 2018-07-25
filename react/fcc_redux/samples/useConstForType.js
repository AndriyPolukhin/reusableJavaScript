// Create const for types
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const deafultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        authenticated: true
      };
    case LOGOUT:
      return {
        authenticated: false
      };
      deafult: return state;
  }
};
      };
      deafult: return state;
  }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  };
};
const logoutUser = () => {
  return {
    type: LOGOUT
  };
};
