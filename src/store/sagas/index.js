import { all, fork } from 'redux-saga/effects'
import testSaga from './testSaga'

export default function* watchers() {
    yield all([
        testSaga,
    ].map(fork))
}
