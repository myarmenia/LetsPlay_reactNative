import axiosInstance from '../Api'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  qrGameImg: false,
  commands: null,
  complexity: null,
  aliasGameId: null,
  countOfWords: null,
  minutesInGame: 0,
  playersInGame: [],
  reservedUsers: [],
}

export const CrocodileSlice = createSlice({
  name: 'crocodile',
  initialState,
  reducers: {
    setCommands: (store, action) => {
      return { ...store, commands: action.payload }
    },
    setComplexity: (store, action) => {
      return { ...store, complexity: action.payload }
    },
  },
})

export const sendCrocodileSettings = data => dispatch => {
  axiosInstance
    .post('api/game/crocodile', data)
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log('err sending crocodile settings :', err)
    })
}
export const { setCommands, setComplexity } = CrocodileSlice.actions
export default CrocodileSlice.reducer
