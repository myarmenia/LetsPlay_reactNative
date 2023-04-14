import axiosInstance from '../Api'
import { createSlice } from '@reduxjs/toolkit'

export const CrocodileSlice = createSlice({
  name: 'crocodile',
  initialState,
  reducers: {
    setCommands: (store, action) => {
      return { ...store, commands: action.payload }
    },
  },
})

export const sendCrocodileSettings = data => dispatch => {
  // axiosInstance
  //   .post('api/game/crocodile', data)
  //   .then(response => {
  //
  //     }
  //   })
  //   .catch(err => {
  //     console.log('err sending crocodile settings :', err)
  //   })
}
export const { setCommands } = CrocodileSlice.actions
export default CrocodileSlice.reducer
