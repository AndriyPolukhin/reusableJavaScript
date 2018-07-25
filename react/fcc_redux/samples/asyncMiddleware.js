// 1. Define action type variables:
const REQUESTING_DATA = 'REQUESTING_DATA';
const RECEIVED_DATA = 'RECEIVED_DATA';

// 2. Define actions:
const requestingData = () => {
  return {
    type: REQUESTING_DATA
  };
};

const receivedData = data => {
  return {
    type: RECEIVED_DATA,
    users: data.users
  };
};

// 3. HANDLE ASYNC <REQUE></REQUE>STS/RESPONCE

const handleAsync = () => {
  return function(dispatch) {
    dispatch(requestingData());
    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      };
      dispatch(receivedData(data));
    }, 2500);
  };
};

// 4. Set defaultState:
const defaultState = {
  fetching: false,
  users: []
};

// 5. Create a asyncReducer
const asyncDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      };
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      };
    default:
      return state;
  }
};

// 6. Create a store and pass the reduer and middleware
const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);
