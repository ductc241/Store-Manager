import axios from "axios";
import * as Types from "./constants";

// fetch products api
export const fetchProducts = () => {
    return async (dispatch) => {
        const { data } = await axios.get('http://localhost:5000/api/products')

        dispatch({
            type: Types.FETCH_PRODUCTS,
            payload: data.products
        })
    }
}