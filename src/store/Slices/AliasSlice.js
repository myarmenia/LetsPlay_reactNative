import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  rules: '',
  qrGame: false,
  commands: null,
  minutesInGame: 0,
}

export const AliasSlice = createSlice({
  name: 'alias',
  initialState,
  reducers: {
    setCommands: (store, action) => {
      return { ...store, commands: action.payload }
    },
    setMinutes: (store, action) => {
      return { ...store, minutesInGame: action.payload }
    },
  },
})

export const { setCommands, setMinutes } = AliasSlice.actions
export default AliasSlice.reducer
