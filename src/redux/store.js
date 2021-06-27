import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { autoLoginMiddleware } from "./middleware";
import rootReducer from "./reducers";

// logger
const middleware = [autoLoginMiddleware, thunk];
const rootStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default rootStore;
