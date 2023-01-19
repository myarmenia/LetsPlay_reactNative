import {FIRST_STEP, FIRST_STEP_SUCCESS, FIRST_STEP_FAIL } from "../action/SignUpAction";

const initialStateFirstStep={
    load:false,
    error:false,
    res:null,
}

export function signUpFirst(state=initialStateFirstStep, action){

    switch (action.type){
        case FIRST_STEP :{
            return {
                ...state,
                load:true,
                error: false,
            }
        }
        case FIRST_STEP_SUCCESS :{
            return {
                ...state,
                load: false,
                res: action.payload
            }
        }
        case FIRST_STEP_FAIL :{
            return {
                ...state,
                load: false,
                error: action.payload,
            }
        }
        default:{
            return state;
        }
    }
}

// import {SECOND_STEP, SECOND_STEP_SUCCESS, SECOND_STEP_FAIL } from "../action/SignUpAction";
//
// const initialStateSecondStep={
//     load:false,
//     error:false,
//     user:null,
// }
//
// export function signUpSecond(state=initialStateSecondStep, action){
//
//     switch (action.type){
//         case SECOND_STEP :{
//             return {
//                 ...state,
//                 load:true,
//                 error: false,
//             }
//         }
//         case SECOND_STEP_SUCCESS :{
//             return {
//                 ...state,
//                 load: false,
//                 user: action.payload
//             }
//         }
//         case SECOND_STEP_FAIL :{
//             return {
//                 ...state,
//                 load: false,
//                 error: action.payload,
//             }
//         }
//         default:{
//             return state
//         }
//     }
// }
