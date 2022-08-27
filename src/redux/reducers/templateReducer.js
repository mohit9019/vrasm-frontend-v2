import { GET_TEMPLATE_FAIL, GET_TEMPLATE_REQUEST, GET_TEMPLATE_SUCCESS } from "../constants/constant"

export const getTemplateReducer = (state = [], action) => {
    switch (action.type) {
        case GET_TEMPLATE_REQUEST:
            return { loading: true, state: [] }
        case GET_TEMPLATE_SUCCESS:
            return { loading: false, state: action.payload }
        case GET_TEMPLATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}