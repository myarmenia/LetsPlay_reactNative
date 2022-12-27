import { takeEvery, takeLatest, call, put } from 'redux-saga/effects';
import {GET_COMMENTS_TEST, GET_COMMENTS_TEST_SUCCESS, GET_COMMENTS_TEST_FAIL, } from "../action/testAction";
import {ApiTest} from '@/apis/Api';

export default function* watcher() {
    yield takeEvery(GET_COMMENTS_TEST, handleGetUsersData)
}

function* handleGetUsersData(action) {
    try {
        const data = yield call(ApiTest.getCommentsTest);

        yield put({
            type: GET_COMMENTS_TEST_SUCCESS,
            payload: data,
        })

    } catch (e) {
        yield put({
            type:GET_COMMENTS_TEST_FAIL,
            payload: {e}
        })
    }
}
