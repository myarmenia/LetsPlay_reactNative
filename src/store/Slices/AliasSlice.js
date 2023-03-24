import { createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../Api'

const initialState = {
  rules: '',
  qrGame: false,
}

export const AliasSlice = createSlice({
  name: 'alias',
  initialState,
  reducers: {},
})

export const {} = AliasSlice.actions
export default AliasSlice.reducer
