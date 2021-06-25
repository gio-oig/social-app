import { combineReducers } from 'redux';

import { logInUserReducer } from './auth-reducer';

const rootReducer = combineReducers({
	user: logInUserReducer,
});

export default rootReducer;
