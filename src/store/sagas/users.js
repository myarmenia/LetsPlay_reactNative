import { takeEvery, takeLatest, call, put } from 'redux-saga/effects'
import {GET_ALL_USERS,USERS_LOAD_SUCCESS,USERS_LOAD, USERS_LOAD_FAIL } from "../action/users";
import {Api} from "../../dep/api";

export default function* watcher() {
    yield takeEvery(GET_ALL_USERS, handleGetUsersData)
}

function* handleGetUsersData(action) {
    try {
        yield put({
            type:USERS_LOAD,
        })
        const { data } = yield call(Api.getAllUsers)
        let list=data.data;
        yield put({
            type: USERS_LOAD_SUCCESS,
            payload: list
        })
    } catch (e) {
        yield put({
            type:USERS_LOAD_FAIL,
            payload: {}
        })
    }
}
