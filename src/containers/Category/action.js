import axios from "axios";
import * as Types from "./constants";

export const fetchCategory = () => {
    return async (dispatch) => {
        dispatch({
            type: Types.SET_CATEGORY_LOADING,
            payload: true
        })

        try {
            const { data } = await axios.get('http://localhost:5000/api/category')
            dispatch({
                type: Types.FETCH_CATEGORY,
                payload: data
            })

        } catch (error) {
            console.log(error.message)
        } finally {
            dispatch({
                type: Types.SET_CATEGORY_LOADING,
                payload: false
            })
        }
    }
}