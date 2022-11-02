import { ADD_TO_CART, DELETE_FROM_CART, GET_CART_ITEMS } from "../constants/constant"

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const existItem = state.cartItems.find((x) => x._id === action.payload._id);
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) => x._id === existItem._id ? action.payload : x),
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload],
                }
            }

        case DELETE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x._id !== action.payload._id),
            }

        case GET_CART_ITEMS:
            return { ...state, cartItems: action.payload }

        default:
            return state;
    }
}