import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  rules: '',
  qrGame: false,
  commands: null,
  minutesInGame: 0,
  users: [
    { id: 0, f: '' },
    { id: 1, f: '' },
    { id: 2, f: '' },
    { id: 3, f: '' },
    { id: 4, f: '' },
    { id: 5, f: '' },
    { id: 6, f: '' },
    { id: 7, f: '' },
    { id: 8, f: '' },
    { id: 9, f: '' },
    { id: 10, f: '' },
    { id: 11, f: '' },
    { id: 12, f: '' },
  ],
  reservedUsers: [],
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
    setReservedUsers: (store, action) => {
      return { ...store, reservedUsers: action.payload }
    },
    // setTrueAnswers: (store, action) => {
    //   return {
    //     ...store,
    //     answers: {
    //       ...answers,
    //       truthy: answers.truthy + 1,
    //     },
    //   }
    // },
    // setFalseAnswers: (store, action) => {
    //   return {
    //     ...store,
    //     answers: {
    //       ...answers,
    //       falsy: answers.falsy + 1,
    //     },
    //   }
    // },
    // setResetAnswers: (store, action) => {
    //   return {
    //     ...store,
    //     answers:{
    //       truthy:0,
    //       falsy:0
    //     }
    //   }
    // }
  },
})

export const {
  setCommands,
  setMinutes,
  setTrueAnswers,
  setFalseAnswers,
  setReservedUsers,
} = AliasSlice.actions
export default AliasSlice.reducer
