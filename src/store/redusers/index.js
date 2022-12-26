import {combineReducers} from "redux";
import {userFromId} from "./userFromId";
import {getAllUsers} from "./users";


const reducers=combineReducers({
    userFromId,
    getAllUsers,
})

export default reducers;
