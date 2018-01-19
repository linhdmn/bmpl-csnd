import * as type from '../constants/actionTypes'
import {showError, showSuccess} from '../constants/helpers'
import axios from 'axios'

function requestPostTodo(data){
    return {
        type: type.REQUEST_POST_TODO,
        data
    }
}

function receivePostLoginTodo(status,data){
    return{
        type: type.RECEIVE_POST_LOGIN_TODO,
        status,
        data
    }
}
function receiveGetSearchLawTodo(data){
    return{
        type: type.REQUEST_GET_SEARCH_LAW_TODO,
        data
    }
}

function receiveGetAllLawTodo(data){
    return{
        type: type.REQUEST_GET_ALL_LAW_TODO,
        data
    }
}

function receiveCreateLawTodo(data){
    return{
        type: type.REQUEST_CREATE_LAW_TODO,
        data
    }
}

function receiveUpdateLawTodo(data){
    return{
        type: type.REQUEST_UPDATE_LAW_TODO,
        data
    }
}

export function postLogin(data){
    return dispatch=> {

        dispatch(requestPostTodo(data));

        return axios({
            method: 'POST',
            url: 'https://bmpl-server.herokuapp.com/api/user/login',
            data: {
                email : data.email,
                password : data.password,
            }
        }).then((res) => {
            if(res.status ===200 || res.status === 304)
                dispatch(receivePostLoginTodo(res.status, res.data));
           else
                showError(res.message);
        })
            .catch(function (error) {
                showError(error.response.data);
            });
    }
}

export const logoutTodo=()=> {
    return{
        type: type.LOG_OUT_TODO,
    }
};

export  function getSeacrchLaw(lawName){
    return dispatch=>{
        dispatch(requestPostTodo(lawName));

        return axios({
            method: 'GET',
            url: 'https://bmpl-server.herokuapp.com/api/law/getlaw?name='+lawName
        }).then((res)=>{
            if(res.status!== 404)
                dispatch(receiveGetSearchLawTodo(res.status,res.data));
            else
                showError("Oops! have some error");
        })
            .catch(function (error) {
                alert("error" + error.response.data);
            });
    }
}

export function createLaw(data) {
    return dispatch=> {

        dispatch(requestPostTodo(data));

        return axios({
            method: 'POST',
            url: 'https://bmpl-server.herokuapp.com/api/law/addlaw',

            data: {
                lawId: data.number,
                tittle: data.tittle,
                subtittle: data.subtittle,
                number: data.number,
                description: data.description,
                organization: data.organization,
                content: data.content,
                time: data.time
            }
        }).then((res) =>{
            if(res.status === 200)
            {
                receiveCreateLawTodo(res.status);
            }else{
                showError('Create transaction fail :' + res.message);
            }
        })
            .catch((error)=> {
                showError("server error " + error.response.data);
            });

    }
}

export function getAllLaw(){
    return dispatch=>{
        dispatch(requestPostTodo());

        return axios({
            method: 'GET',
            url: 'https://bmpl-server.herokuapp.com/api/law/getlaw'
        }).then((res)=>{
            if(res.status!== 404)
                dispatch(receiveGetAllLawTodo(res.status,res.data));
            else
                showError("Oops! have some error");
        })
            .catch(function (error) {
                alert("error" + error.response.data);
            });
    }
}