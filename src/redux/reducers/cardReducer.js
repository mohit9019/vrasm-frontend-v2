import { ADD_TO_CART, DELETE_FROM_CART, GET_CART_ITEMS } from "../constants/constant"

export const cartReducer = (state = [], action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return { state: action.payload }
        case ADD_TO_CART:
            const existItem = state.find(x => x.template_id === action.payload.template_id);
            if (existItem) {
                return {
                    ...state,
                    state: state.map(x => x.template_id === existItem.template_id ? action.payload : x)
                }
            } else {
                return {
                    ...state,
                    state: action.payload
                }
            }
        case DELETE_FROM_CART:
            return {
                ...state,
                state: state.map(x => x.template_id !== action.payload.template_id)
            }
        default:
            return state;
    }
}