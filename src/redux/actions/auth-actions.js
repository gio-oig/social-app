import { userApi } from "../../services/user";
import { AUTH_TOKEN } from "../../utils/constants";
import * as types from "../action-types/";

export const logInUserAction = (userData) => async (dispatch) => {
  try {
    dispatch({ type: types.AUTH_REQUEST });
    const { data: user } = await userApi.login(userData);
    localStorage.setItem(AUTH_TOKEN, user.token);
    dispatch({ type: types.AUTH_REQUEST_SUCCESS, payload: user });
  } catch (error) {
    dispatch({
      type: types.AUTH_REQUEST_FAIL,
      payload: error.response.data.error,
    });
  }
};

export const isUserLoggedInAction = () => async (dispatch) => {
  try {
    dispatch({ type: types.AUTH_REQUEST });
    const { data: user } = await userApi.isLoggedin();
    dispatch({ type: types.AUTH_REQUEST_SUCCESS, payload: user });
  } catch (error) {
    localStorage.removeItem(AUTH_TOKEN);
    dispatch({
      type: types.AUTH_REQUEST_FAIL,
      payload: error.response.data.error,
    });
  }
};

export const logOutAction = {
  type: types.LOG_OUT_USER,
};
