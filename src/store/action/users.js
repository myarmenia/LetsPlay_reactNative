export let GET_ALL_USERS="GET_ALL_USERS";
export let USERS_LOAD_SUCCESS="USERS_LOAD_SUCCESS";
export let USERS_LOAD_FAIL="USERS_LOAD_FAIL";
export let USERS_LOAD="USERS_LOAD";

export function getAllUsers (data){
    return{
        type:GET_ALL_USERS
    }
}