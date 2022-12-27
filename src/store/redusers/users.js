import {USERS_LOAD_SUCCESS,USERS_LOAD, USERS_LOAD_FAIL } from "../action/users";

let initialState={
    status:"",
    allUsers:[],
}

export function getAllUsers(state=initialState, action){

    switch (action.type){
        case USERS_LOAD :{
            return {
                ...state,
                status:"load"
            }
        }
        case USERS_LOAD_SUCCESS :{
            return {
                ...state,
                status: "ok",
                allUsers: action.payload
            }
        }
        case USERS_LOAD_FAIL :{
            return {
                ...state,
                status: "error"
            }
        }
        default:{
            return state
        }
    }
}