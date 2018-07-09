function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      // return the new state with the new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      console.log('removing a comment');
      // remove and return the updated state
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ]
      return state;
    default:
      return state;
  }
  return state;
}

function comments(state = [], action) {

  if(typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite the current state
      [action.postId]: postComments(state[action.postId], action)
    }
  }

  return state;
}


export default comments;
