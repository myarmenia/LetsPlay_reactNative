import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { signUp } from '@/apis/ApiSignUp'

export const signUpFirst = createAsyncThunk('signUpFirst', async (data) => {
  try {
    const res = await signUp.firstStep(data)
    // console.log()
    return JSON.stringify(res)
  } catch (e) {
    return e
  }
})
