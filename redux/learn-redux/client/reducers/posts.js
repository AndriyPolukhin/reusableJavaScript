// a reducer tatkes in two things;

// 1. the action (info about what heppened)
// 2. copy of current state

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log('incrementing likes!!');
      const i = action.index;
      return [
        ...state.slice(0,i), // before the one we updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), // after the one we updating
      ]
    //return the udpated state
    default:
      return state;
  }
}

export default posts;