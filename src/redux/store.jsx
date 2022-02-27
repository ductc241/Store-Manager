import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";

import createReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	createReducer,
	composeEnhancers(applyMiddleware(thunk))
)

export default store