import { GET_TEMPLATE_FAIL, GET_TEMPLATE_REQUEST, GET_TEMPLATE_ERROR, GET_TEMPLATE_SUCCESS } from "../constants/constant"
import ApiCaller from "../../apiCaller.js/apiCaller";
import { toast } from "react-toastify";

export const getTemplate = (props) => async (dispatch) => {
    let apiCaller = new ApiCaller();
    try {
        dispatch({ type: GET_TEMPLATE_REQUEST });
        await apiCaller.postData({
            url: 'template/get',
            data: props ? props : {} // put any 12 char string here for testing, when user comes, the 12 chars user_id you have to pass  
        }).then(res => {
            if (apiCaller.validateResult(res)) {
                dispatch({ type: GET_TEMPLATE_SUCCESS, payload: res.data });
            } else {
                dispatch({ type: GET_TEMPLATE_ERROR });
                toast.error(res.status_message);
            }
        })
    } catch (error) {
        dispatch({ type: GET_TEMPLATE_FAIL, payload: error });
    }
}

export const feedback = (body) => async (dispatch) => {
    try {
        let apiCaller = new ApiCaller();
        apiCaller.postData({
            url: 'template/feedback',
            data: body
        }).then(data => {
            if (data && data.status_code === '1') {
                console.log("feedback data");
                console.log(data);
                toast.success('Feedback sent successfully');
                // getDetails();
                setTimeout(() => {
                }, 500);
            }
            else
                toast.error(data.status_message);
        }).catch(err => {
            console.log(err);
        })
    } catch (error) {
        console.log(error)
    }
}
