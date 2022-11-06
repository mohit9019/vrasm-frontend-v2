import { ADD_TO_LIKE, DELETE_FROM_LIKE, GET_LIKE_ITEMS } from "../constants/constant"

export const likeReducer = (state = { likeItems: [] }, action) => {
    switch (action.type) {
        case ADD_TO_LIKE:
            const existItem = state.likeItems.find((x) => x._id === action.payload._id);
            if (existItem) {
                return {
                    ...state,
                    likeItems: state.likeItems.map((x) => x._id === existItem._id ? action.payload : x),
                }
            } else {
                return {
                    ...state,
                    likeItems: [...state.likeItems, action.payload],
                }
            }

        case DELETE_FROM_LIKE:
            return {
                ...state,
                likeItems: state.likeItems.filter((x) => x._id !== action.payload._id),
            }

        case GET_LIKE_ITEMS:
            return { ...state, likeItems: action.payload }

        default:
            return state;
    }
}