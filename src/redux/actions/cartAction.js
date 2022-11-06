import ApiCaller from "../../apiCaller.js/apiCaller";
import { toast } from "react-toastify";
import { ADD_TO_CART, GET_CART_ITEMS, DELETE_FROM_CART } from '../constants/constant'

export const getCartItems = () => async (dispatch) => {
    try {
        let apiCaller = new ApiCaller();
        apiCaller.postData({
            url: 'template/get_cart',
            data: {} // put any 12 char string here for testing, when user comes, the 12 chars user_id you have to pass
        }).then(res => {
            if (apiCaller.validateResult(res)) {
                dispatch({ type: GET_CART_ITEMS, payload: res.data.data });
            }
        })
    } catch (error) {
        console.log(error);

    }
}


export const addToCart = (template_id) => async (dispatch) => {
    try {
        let apiCaller = new ApiCaller();
        apiCaller.postData({
            url: 'template/add_to_cart',
            data: {
                template_id,
                action: 'add'
            }
        }).then(data => {
            if (data && data.status_code === '1') {
                apiCaller.postData({
                    url: 'template/get',
                    data: { template_id } // put any 12 char string here for testing, when user comes, the 12 chars user_id you have to pass  
                }).then(res => {
                    if (apiCaller.validateResult(res)) {
                        dispatch({ type: ADD_TO_CART, payload: res.data[0] })
                        toast.success('template added to cart');
                    } else {
                        toast.error(res.status_message);
                    }
                })
            }
        })
    } catch (error) {
        console.log(error);
    }
}

export const deleteFromCart = (template_id) => async (dispatch) => {
    try {
        let apiCaller = new ApiCaller();
        apiCaller.postData({
            url: 'template/add_to_cart',
            data: {
                template_id,
                action: 'delete'
            }
        }).then(data => {
            if (apiCaller.validateResult(data)) {
                dispatch({ type: DELETE_FROM_CART, payload: { _id: template_id } })
                toast.success('Template deleted from cart');
            }
        })
    } catch (error) {
        console.log(error);
    }
}
