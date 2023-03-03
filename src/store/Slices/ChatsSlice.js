import { createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../Api'

const initialState = {
  chats: [],
  playMessageId: null,
  pausedMessageId: null,
}

export const ChatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    setChats: (store, action) => {
      return {
        ...store,
        chats: action.payload,
      }
    },
    setPlayMessageId: (store, action) => {
      return {
        ...store,
        playMessageId: action.payload,
      }
    },
    setPausedMessageId: (store, action) => {
      return {
        ...store,
        pausedMessageId: action.payload,
      }
    },
  },
})

export const getChats = (data) => (dispatch) => {
  axiosInstance
    .get(`/api/create/game/chat/${data}`)
    .then((response) => {
      dispatch(setChats(response.data.datas.reverse()))
    })
    .catch((err) => {
      console.log('err request chats', err.request._response)
    })
}
export const sendMessage = (data) => (dispatch) => {
  axiosInstance
    .post(`/api/create/game/chat/`, data)
    .then((response) => {
      console.log(response.data)
    })
    .catch((err) => {
      console.log('err request', err.request._response)
    })
}

export const { setChats, setPlayMessageId, setPausedMessageId } = ChatsSlice.actions
export default ChatsSlice.reducer
