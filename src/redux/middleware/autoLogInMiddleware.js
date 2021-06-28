import { AUTH_TOKEN } from "../../utils/constants";
import { AUTO_LOGIN } from "../action-types";
import { isUserLoggedInAction } from "../actions/auth-actions";

export const autoLoginMiddleware = ({ dispatch }) => {
  return (next) => {
    return (action) => {
      if (action.type === AUTO_LOGIN) {
        if (localStorage.getItem(AUTH_TOKEN)) {
          //   const token = localStorage.getItem(AUTH_TOKEN);
          dispatch(isUserLoggedInAction());
        }
      } else {
        next(action);
      }
    };
  };
};
