import * as types from '../action-types/';

export const logInUserAction = (userData) => (dispatch) => {
	try {
		dispatch({ type: types.AUTH_REQUEST });
	} catch (error) {
		dispatch({ type: types.AUTH_REQUEST_FAIL, payload: error });
	}
};
