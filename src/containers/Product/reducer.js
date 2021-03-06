import * as Types from "./constants";

const inittialState = {
    products: [],
    isLoading: false
}

const productReduce = (state = inittialState, action) => {
    switch(action.type) {
        case Types.FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        case Types.SET_PRODUCTS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
            
        default: 
            return state;
    }
}

export default productReduce
