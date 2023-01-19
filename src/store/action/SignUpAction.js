export const FIRST_STEP="FIRST_STEP";
export const FIRST_STEP_SUCCESS="FIRST_STEP_SUCCESS";
export const FIRST_STEP_FAIL="FIRST_STEP_FAIL";

export  function signUpFirstStep(action){
    return{
        type:FIRST_STEP,
        payload:action
    }
}

export const SECOND_STEP="SECOND_STEP";
export const SECOND_STEP_SUCCESS="SECOND_STEP_SUCCESS";
export const SECOND_STEP_FAIL="SECOND_STEP_FAIL";

export  function signUpSecondStep (action){
    return{
        type:SECOND_STEP,
        payload:action
    }
}

