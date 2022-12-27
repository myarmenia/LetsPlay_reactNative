import {GET_USERS_ID, USERS_LOAD_ID_FAIL, USERS_LOAD_ID_SUCCESS, USERS_ID_LOAD} from "../action/getUserId"
import {put,call, takeEvery} from "redux-saga/effects";
import {Api} from "../../dep/api";

export default function* watcher(){
    yield takeEvery(GET_USERS_ID, hndlGetUser)
}

function* hndlGetUser(action){
    try{
        yield put({
            type:USERS_ID_LOAD,
        })
        let {data}= yield call (Api.getUsersId, action.payload+"")
        let user=data.data
        yield put({
            type:USERS_LOAD_ID_SUCCESS,
            payload:user,
        })
    }catch {
        yield put({
            type:USERS_LOAD_ID_FAIL,
        })

    }

}