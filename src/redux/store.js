import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { changePasswordReducer, loginReducer, registReducer, updateUserDetailsReducer } from './reducers/registReducer';
import thunk from 'redux-thunk';
import { getTemplateReducer } from './reducers/templateReducer';
import { composeWithDevTools } from 'redux-devtools-extension'
import { cartReducer } from './reducers/cartReducer';
import { likeReducer } from './reducers/likeReducer';

const userInfoFromStorage = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null;

const mainReducer = combineReducers({
    registReducer: registReducer,
    loginReducer: loginReducer,
    getTemplateReducer: getTemplateReducer,
    cartReducer: cartReducer,
    likeReducer: likeReducer,
    updateUserDetailsReducer: updateUserDetailsReducer,
    changePasswordReducer: changePasswordReducer,
});

const initialState = {
    loginReducer: { userInfo: userInfoFromStorage },
}

const store = createStore(mainReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;