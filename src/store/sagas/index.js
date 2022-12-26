import { all, fork } from 'redux-saga/effects'
import users from './users'
import userFromId from "./userFromId";

export default function* watchers() {
    yield all([
        users,
        userFromId,
    ].map(fork))
}
