import {USERS_LOAD_ID_SUCCESS, USERS_LOAD_ID_FAIL, USERS_ID_LOAD} from "../action/getUserId";

let initialState={
    status:"",
    userId: {}
}

export function userFromId(state=initialState, action){
    switch (action.type){
        case USERS_ID_LOAD:{
            return {
                ...state,
                status: "load",
                userId: {},
            }
        }
        case USERS_LOAD_ID_SUCCESS :{
            return {
                ...state,
                status: "ok",
                userId:action.payload
            }
        }
        case USERS_LOAD_ID_FAIL:{
            return {
                ...state,
                status: "error",
                userId: {}
            }
        }
        default:{
            return state
        }
    }
}