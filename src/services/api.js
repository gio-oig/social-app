import axios from "axios";
import { AUTH_TOKEN } from "../utils/constants";

let Api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://react-social-back.herokuapp.com/api"
      : "http://localhost:5000/api",
});

// Access-Control-Allow-Credentials: true
// axios.defaults.headers['Access-Control-Allow-Origin'] = '*';

Api.defaults.withCredentials = true;
Api.defaults.headers.common = {
  Authorization: localStorage.getItem(AUTH_TOKEN) || "",
};

export default Api;
