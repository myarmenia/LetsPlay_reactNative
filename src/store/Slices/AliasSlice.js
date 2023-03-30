import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  rules: '',
  qrGame: false,
  commands: null,
}

export const AliasSlice = createSlice({
  name: 'alias',
  initialState,
  reducers: {
    setCommands: (store, action) => {
      return { ...store, commands: action.payload }
    },
  },
})

export const { setCommands } = AliasSlice.actions
export default AliasSlice.reducer
