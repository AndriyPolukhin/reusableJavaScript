const ADD_TO_DO = 'ADD_TO_DO';

const todos = ['Go to the gym', 'Code with Redux', 'Learn Node', 'Earn Money'];

const immutableReducer = (state = todos, action) => {
  switch (action.type) {
    case ADD_TO_DO:
      return state.concat(action.todo);
    default:
      return state;
  }
};

const addTodo = todo => {
  return {
    type: ADD_TO_DO,
    todo: todo
  };
};

const store = Redux.createStore(immutableReducer);

// EXAMPLE 2
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch (action.type) {
    case 'ADD_TO_DO':
      return [...state, action.todo];
    default:
      return satte;
  }
};

const addToDo = todo => {
  return {
    type: 'ADD_TO_DO',
    todo
  };
};

const store = Redux.createStore(immutableReducer);

const immutableReducer = (state = [0, 1, 2, 3, 4, 5], action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
  }
};

const removeItem = index => {
  return {
    type: 'REMOVE_ITEM',
    index
  };
};

const store = Redux.createStore(immutableReducer);
