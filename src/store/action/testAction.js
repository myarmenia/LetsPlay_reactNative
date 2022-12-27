export const GET_COMMENTS_TEST="GET_COMMENTS_TEST";
export const GET_COMMENTS_TEST_SUCCESS="GET_COMMENTS_TEST_SUCCESS";
export const GET_COMMENTS_TEST_FAIL="GET_COMMENTS_TEST_FAIL";

export  function testAction (action){
    return{
        type:GET_COMMENTS_TEST,
        payload:action
    }
}
