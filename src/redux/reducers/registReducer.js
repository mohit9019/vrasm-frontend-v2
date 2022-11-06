import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, OTP_FAIL, OTP_REQUEST, OTP_SUCCESS, REGISTRATION_FAIL, REGISTRATION_REQUEST, REGISTRATION_SUCCESS } from "../constants/constant";

export const registReducer = (state = {}, action) => {
    switch (action.type) {
        case REGISTRATION_REQUEST:
            return { loading: true, is_register: 0 }
        case REGISTRATION_SUCCESS:
            return { loading: false, userInfo: action.payload, is_register: 1 }
        case REGISTRATION_FAIL:
            return { loading: false, error: action.payload, is_register: 0 }
        default:
            return state;
    }
}

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { loading: true }
        case LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload }
        case LOGIN_FAIL:
            return { loading: false, error: action.payload }
        case LOGOUT:
            return {}
        default:
            return state;
    }
}

export const otpReducer = (state = {}, action) => {
    switch (action.type) {
        case OTP_REQUEST:
            return { loading: true }
        case OTP_SUCCESS:
            return { loading: false, verUserInfo: action.payload }
        case OTP_FAIL:
            return { loading: false }
        default:
            return state;
    }
}