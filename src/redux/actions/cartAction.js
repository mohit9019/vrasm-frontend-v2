import ApiCaller from "../../apiCaller.js/apiCaller";
import { toast } from "react-toastify";
import { GET_CART_ITEMS } from '../constants/constant'

export const cart = (body) => async (dispatch) => {
    try {
        dispatch({ type: GET_CART_ITEMS })
        let apiCaller = new ApiCaller();
        apiCaller.postData({
            url: 'template/get_cart',
            data: {} // put any 12 char string here for testing, when user comes, the 12 chars user_id you have to pass  
        }).then(res => {
            if (apiCaller.validateResult(res)) {
                setTemplates(res.data.data);
            }
        })
    } catch (error) {
        console.log(error)

    }
}
