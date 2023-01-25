import { all, fork } from 'redux-saga/effects'
import {firstStep} from './signUpSaga'

export default function* watchers() {
    yield all([
        firstStep,
    ].map(fork))
}
