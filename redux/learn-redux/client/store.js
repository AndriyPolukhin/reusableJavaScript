import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory} from 'react-router';

// Import the root reducer
import rootReducer from './reducers/index';

// Raw data to work with
import comments from './data/comments';
import posts from './data/posts';


// 1.  create an object for the default data
const defaultState = {
  posts,
  comments
};

// 2. create store
const store = createStore(rootReducer, defaultState);

// 3. History
export const history = syncHistoryWithStore(browserHistory, store);

export default store;