import { GET_TEMPLATE_FAIL, GET_TEMPLATE_REQUEST, GET_TEMPLATE_SUCCESS } from "../constants/constant"
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
                // setData(res.data);
                dispatch({ type: GET_TEMPLATE_SUCCESS, payload: res.data });
            } else {
                toast.error(res.status_message);
            }
        })
    } catch (error) {
        dispatch({ type: GET_TEMPLATE_FAIL, payload: error });
    }
}