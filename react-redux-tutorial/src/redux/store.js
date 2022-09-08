import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import print1 from "./middleware/print1";
import print2 from "./middleware/print2";
import rootReducer from "./rootReducer";
const store = createStore(rootReducer, applyMiddleware(print1, print2));

export default store;
