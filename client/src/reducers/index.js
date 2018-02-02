import {combineReducers }from 'redux'
import { reducer as formReducer } from 'redux-form'
import accountInfo from './account'
import adminHelper from './adminHelper'
import homePage from './homePage'


const rootReducer = combineReducers({
    accountInfo,
    adminHelper,
    homePage,
    form: formReducer
});

export default rootReducer