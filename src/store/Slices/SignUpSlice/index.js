import {createSlice,} from '@reduxjs/toolkit';
import axios from 'axios';

const initialStateFirstStep = {
    load: false,
    error: false,
    token: null,
}

export const signUpFirstSlice = createSlice({
    name: 'signUpFirst',
    initialState: initialStateFirstStep,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase('signUpFirst/pending', (state, action) => {
            state.load = true
            state.error = false
            state.token = null
        })
        builder.addCase('signUpFirst/fulfilled', (state, action) => {
            state.load = false
            state.error = false
            state.token = JSON.parse(action.payload).data.expired_token
        })
        builder.addCase('signUpFirst/rejected', (state, action) => {
            alert('cholo')
        })
    }

});

export const {} = signUpFirstSlice.actions;

export default signUpFirstSlice.reducer;
