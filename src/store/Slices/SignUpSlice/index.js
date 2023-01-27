import { createSlice,} from '@reduxjs/toolkit';
import axios from 'axios';

const initialStateFirstStep={
    load:false,
    error:false,
    res:null,
}

export const signUpFirstSlice = createSlice({
    name: 'signUpFirst',
    initialState:initialStateFirstStep,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase('signUpFirst/pending', (state, action) => {
           console.log(action)
        })
        builder.addCase('signUpFirst/fulfilled', (state, action) => {
            console.log('fulfilled')
        })
        builder.addCase('signUpFirst/rejected', (state, action) => {
            console.log(action)
        })
    }

});

export const {  } = signUpFirstSlice.actions;

export default signUpFirstSlice.reducer;
