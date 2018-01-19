import {combineReducers }from 'redux'
import accountInfo from './account'
import adminHelper from './adminHelper'
import homePage from './homePage'


const rootReducer = combineReducers({
    accountInfo,
    adminHelper,
    homePage
});

export default rootReducer