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

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

// 2. create store
const store = createStore(rootReducer, defaultState, enhancers);

// 3. History
export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}


export default store;