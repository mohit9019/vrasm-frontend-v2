import ApiCaller from "../../apiCaller.js/apiCaller";
import { toast } from "react-toastify";
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, OTP_FAIL, OTP_REQUEST, OTP_SUCCESS, REGISTRATION_FAIL, REGISTRATION_REQUEST, REGISTRATION_SUCCESS } from "../constants/constant";

export const registration = (body) => async (dispatch) => {
    try {
        dispatch({ type: REGISTRATION_REQUEST })
        let apiCaller = new ApiCaller();
        apiCaller.postData({ url: 'buyer/register', data: body }).then(data => {
            if (data && data.status_code === '1') {
                toast.success('Otp sent on your email');
                setTimeout(() => {
                    // setis_register(1);
                    dispatch({ type: REGISTRATION_SUCCESS, payload: data });
                }, 5000);
            }
            else {
                dispatch({ type: REGISTRATION_FAIL, payload: data.status_message })
                // dispatch({ type: REGISTRATION_FAIL, payload: 'Errors' })
                toast.error(data.status_message);
            }
        }).catch(err => {
            console.log(err);
        })
    } catch (error) {
        console.log(error)

    }
}


export const verifyOtp = (body, navigate) => async (dispatch) => {
    try {
        dispatch({ type: OTP_REQUEST });
        let apiCaller = new ApiCaller();
        apiCaller.postData({ url: 'buyer/otp', data: body }).then(data => {
            if (data && data.status_code === '1') {
                toast.success('Otp Verified', { autoClose: 2000 });
                dispatch({ type: OTP_SUCCESS, payload: data })
                navigate('/');
                // window.location.reload("/");
            }
            else {
                toast.error("Otp doesn't Matched", { autoClose: 2000 });
                dispatch({ type: OTP_FAIL })
            }
        }).catch(err => {
            console.log(err);
        })
    } catch (error) {
        console.log(error)
    }
}

export const userLogin = (body, navigate) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST })
        let apiCaller = new ApiCaller();
        apiCaller.postData({
            url: 'user/login',
            data: body
        }).then(data => {
            if (data && data.status_code === '1') {
                toast.success('Log-in successfully', { autoClose: 2000 });
                dispatch({ type: LOGIN_SUCCESS, payload: data })
                navigate('/');
                // window.location.reload("/");
            }
            else {
                toast.error(data.status_message, { autoClose: 2000 });
                dispatch({ type: LOGIN_FAIL, payload: data.status_message });
            }
            // console.log(data);
        }).catch(err => {
            console.log(err);
        })
    } catch (error) {
        console.log(error);
    }
}

export const userLogout = () => dispatch => {
    localStorage.removeItem('userData');
    dispatch({ type: LOGOUT })
    // localStorage.clear();
    // window.location.reload();
}