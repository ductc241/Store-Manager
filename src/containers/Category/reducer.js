import * as Types from "./constants";

const inittialState = {
    category: [],
    isLoading: false
}

const categoryReduce = (state = inittialState, action) => {
    switch(action.type) {
        case Types.FETCH_CATEGORY:
            return {
                ...state,
                category: action.payload
            };
        case Types.SET_CATEGORY_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
            
        default: 
            return state;
    }
}

export default categoryReduce