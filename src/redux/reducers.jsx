import { combineReducers } from "redux";
import productReduce from "../containers/Product/reducer";

const createReducer = combineReducers({
    products: productReduce,
});

export default createReducer;