import { createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../Api'

const initialState = {
  rules: '',
  qrGame: false,
}

export const MafiaSlice = createSlice({
  name: 'mafila',
  initialState,
  reducers: {
    setRules: (store, action) => {
      return {
        ...store,
        rules: action.payload,
      }
    },
    setQrGame: (store, action) => {
      return {
        ...store,
        qrGame: action.payload,
      }
    },
  },
})

// export const getChats = (data) => (dispatch) => {
//   axiosInstance
//     .get(`/api/create/game/chat/${data}`)
//     .then((response) => {
//       dispatch(setChats(response.data.datas.reverse()))
//     })
//     .catch((err) => {
//       console.log('err request chats', err.request._response)
//     })
// }

export const { setRules, setQrGame } = MafiaSlice.actions
export default MafiaSlice.reducer
