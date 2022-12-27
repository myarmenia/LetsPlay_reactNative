import {GET_COMMENTS_TEST,GET_COMMENTS_TEST_SUCCESS, GET_COMMENTS_TEST_FAIL } from "../action/testAction";

const initialState={
    load:false,
    comments:[],
}

export function getCommentsTest(state=initialState, action){

    switch (action.type){
        case GET_COMMENTS_TEST :{
            return {
                ...state,
                load:true
            }
        }
        case GET_COMMENTS_TEST_SUCCESS :{
            console.log(action)
            return {
                ...state,
                load: false,
                comments: action.payload
            }
        }
        case GET_COMMENTS_TEST_FAIL :{
            return {
                ...state,
                load: false
            }
        }
        default:{
            return state
        }
    }
}
