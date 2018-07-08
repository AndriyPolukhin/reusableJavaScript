// a reducer tatkes in two things;

// 1. the action (info about what heppened)
// 2. copy of current state

function posts(state = [], action) {
  console.log(state, action);
  return state;
}

export default posts;