import * as actionType from '../action-types/';

const initialState = {
	error: null,
	loading: false,
	user: null,
};

export const logInUserReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionType.AUTH_REQUEST:
			return {
				loading: true,
				user: null,
				error: null,
			};
		case actionType.AUTH_REQUEST_SUCCESS:
			return {
				loading: false,
				user: action.payload,
				error: null,
			};
		case actionType.AUTH_REQUEST_FAIL:
			return {
				loading: false,
				user: null,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default logInUserReducer;
