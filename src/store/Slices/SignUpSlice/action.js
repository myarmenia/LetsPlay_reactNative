import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {signUp} from '@/apis/ApiSignUp'

export const signUpFirst = createAsyncThunk('signUpFirst', async (data) => {
    const response= await signUp.firstStep(data);
    console.log(response, 8888888)
    return response;
});
