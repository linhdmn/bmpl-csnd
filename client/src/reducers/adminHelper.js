import * as type from '../constants/actionTypes';
const initState = {
    lawId: null,
    tittle: null,
    subtittle: null,
    number: 0,
    description: null,
    organization: null,
    content: [],
    time: null,
    lawNameList:[]
}

const adminHelper = (state = initState, action) => {
    switch(action.type){
        case type.REQUEST_GET_SEARCH_LAW_TODO:
            return Object.assign({}, state, {
                lawId: action.data.lawId,
                tittle: action.data.tittle,
                subtittle: action.data.subtittle,
                number: action.data.number,
                description: action.data.description,
                organization: action.data.organization,
                content: action.data.content,
                time: action.data.content
            });
        case type.REQUEST_CREATE_LAW_TODO:
            return Object.assign({}, state, {
                lawId: action.data.lawId,
                tittle: action.data.tittle,
                subtittle: action.data.subtittle,
                number: action.data.number,
                description: action.data.description,
                organization: action.data.organization,
                content: action.data.content,
                time: action.data.content
            });
        case type.REQUEST_UPDATE_LAW_TODO:
            return Object.assign({}, state, {
                lawId: action.data.lawId,
                tittle: action.data.tittle,
                subtittle: action.data.subtittle,
                number: action.data.number,
                description: action.data.description,
                organization: action.data.organization,
                content: action.data.content,
                time: action.data.content
            });
        case type.REQUEST_GET_ALL_LAW_TODO:
            return Object.assign({}, state,{
                lawNameList:action.data
            });
        default:
            return state;
    }
}

export default adminHelper