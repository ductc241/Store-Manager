import * as Types from "./constants";

const inittialState = {
    products: []
}

const productReduce = (state = inittialState, action) => {
    switch(action.type) {
        case Types.FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
            
        default: 
            return state;
    }
}

export default productReduce