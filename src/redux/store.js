import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// logger
const middleware = [thunk];
const rootStore = createStore(rootReducer, applyMiddleware(...middleware));

export default rootStore;
