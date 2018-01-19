import * as type from '../constants/actionTypes'
import {showError, showSuccess} from '../constants/helpers'
const initState={
    //'931678ea00891d74b9252e2fb1f49d07'
    userID: null,
    email: null,
    role: null,
};


const accountInfo = (state=initState,action) => {
    switch (action.type){
        case type.RECEIVE_POST_LOGIN_TODO:
            if(action.status === 200){
                return Object.assign({}, state, {
                    userID: action.data.user.userID,
                    email: action.data.user.email,
                    role: action.data.user.role,
                })
            }else{
                showError(action.data);
                return state;
            }
        case type.LOG_OUT_TODO:
            //console.log("***************************************");
            return Object.assign({}, state, {
                userID: null,
                email: null,
                role: null
            });
        default:
            return state;
    }
};

export default accountInfo