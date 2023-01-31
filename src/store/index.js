import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import signUpFirstStep from './Slices/SignUpSlice';

const rootReducer=combineReducers({
    signUpFirstStep:signUpFirstStep,
})

const store = configureStore({
    reducer:rootReducer,
});


export default store;

