import ApiCaller from "../../apiCaller.js/apiCaller";
import { toast } from "react-toastify";
import { ADD_TO_LIKE, DELETE_FROM_LIKE, GET_LIKE_ITEMS } from '../constants/constant'

export const getLikeItems = () => async (dispatch) => {
    try {
        let apiCaller = new ApiCaller();
        apiCaller.postData({
            url: 'template/get',
            data: {
                type: 'like'
            } // put any 12 char string here for testing, when user comes, the 12 chars user_id you have to pass  
        }).then(res => {
            if (apiCaller.validateResult(res)) {
                dispatch({ type: GET_LIKE_ITEMS, payload: res.data })
            }
        })
    } catch (error) {
        console.log(error)

    }
}

export const addToLike = (template_id) => async (dispatch) => {
    try {
        let apiCaller = new ApiCaller();
        apiCaller.postData({
            url: 'template/like',
            data: {
                template_id,
                action: 'like'
            }
        }).then(data => {
            if (data && data.status_code === '1') {
                apiCaller.postData({
                    url: 'template/get',
                    data: { template_id } // put any 12 char string here for testing, when user comes, the 12 chars user_id you have to pass  
                }).then(res => {
                    if (apiCaller.validateResult(res)) {
                        dispatch({ type: ADD_TO_LIKE, payload: res.data[0] })
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

export const deleteFromLike = (template_id) => async (dispatch) => {
    try {
        let apiCaller = new ApiCaller();
        apiCaller.postData({
            url: 'template/like',
            data: {
                template_id,
                action: 'unlike',
            }
        }).then(data => {
            if (apiCaller.validateResult(data)) {
                dispatch({ type: DELETE_FROM_LIKE, payload: { _id: template_id } })
            }
        })
    } catch (error) {
        console.log(error);
    }
}
