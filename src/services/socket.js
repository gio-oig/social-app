import io from "socket.io-client";

const ENDPOINT =
  process.env.NODE_ENV === "production"
    ? "https://arcane-bayou-45011.herokuapp.com"
    : "http://localhost:5000";

export const socket = io(ENDPOINT);
