import axios from "axios";
import * as Types from "./constants";

// fetch products
export const fetchProducts = () => {
    return async (dispatch) => {
        dispatch({
            type: Types.SET_PRODUCTS_LOADING,
            payload: true
        })

        try {
            const { data } = await axios.get('http://localhost:5000/api/products')
            dispatch({
                type: Types.FETCH_PRODUCTS,
                payload: data.products
            })
        } catch (error) {
            console.log(error.message)
        } finally {
            dispatch({
                type: Types.SET_PRODUCTS_LOADING,
                payload: false
            })
        }
    }
}