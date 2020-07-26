import { createStore, compose } from 'redux';

import rootReducer from './index';

const composeEnhancer =
  (process.env.NODE_ENV === 'development' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const store = createStore(rootReducer, composeEnhancer());

export default store;
