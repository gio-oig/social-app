import Api from "./api";

export const userApi = {
  register(form) {
    return Api.post("user/register", form);
  },
  login(form) {
    return Api.post("user/login", form);
  },
  logout() {
    return Api.get("user/logout");
  },
  isLoggedin() {
    return Api.get("user/is-loggedin");
  },
  getAllUsers() {
    return Api.get("user/all");
  },
};
