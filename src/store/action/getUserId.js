export let GET_USERS_ID="GET_USERS_ID";
export let USERS_LOAD_ID_SUCCESS="USERS_LOAD_ID_SUCCESS";
export let USERS_LOAD_ID_FAIL="USERS_LOAD_ID_FAIL";
export let USERS_ID_LOAD="USERS_ID_LOAD";

export  function getUserId (action){
    return{
        type:GET_USERS_ID,
        payload:action
    }
}