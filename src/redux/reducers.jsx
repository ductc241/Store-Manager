import { combineReducers } from "redux";
import productReduce from "../containers/Product/reducer";
import categoryReduce from "../containers/Category/reducer";

const createReducer = combineReducers({
    products: productReduce,
    categories: categoryReduce
});

export default createReducer;