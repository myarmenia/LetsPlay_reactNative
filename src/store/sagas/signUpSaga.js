import { takeEvery, call, put } from 'redux-saga/effects';
import {FIRST_STEP, FIRST_STEP_SUCCESS, FIRST_STEP_FAIL, } from "../action/SignUpAction";
import {signUp} from '@/apis/ApiSignUp';

export const firstStep= function * watcher() {
    yield takeEvery(FIRST_STEP, handleFirstStep)
}

function * handleFirstStep(action) {
    try {
        const data = yield call(signUp.firstStep, action.payload);

        yield put({
            type: FIRST_STEP_SUCCESS,
            payload: data,
        })

    } catch (e) {
        yield put({
            type:FIRST_STEP_FAIL,
            payload: {e}
        })
    }
}
