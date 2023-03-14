import { createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../Api'

const initialState = {
  chats: [],
  playMessageId: null,
  pausedMessageId: null,
  voiceDuration: '00:00:00',
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
    setVoiceDuration: (store, action) => {
      return {
        ...store,
        voiceDuration: action.payload,
      }
    },
  },
})

export const getChats = data => dispatch => {
  axiosInstance
    .get(`/api/create/game/chat/${data}`)
    .then(response => {
      dispatch(setChats(response.data.datas.reverse()))
    })
    .catch(err => {
      console.log('err request chats', err.request._response)
    })
}
export const sendMessage = data => dispatch => {
  axiosInstance
    .post(`/api/create/game/chat/`, data)
    .then(response => {
      console.log(response.data)
    })
    .catch(err => {
      console.log('err request', err.request._response)
    })
}
export const deleteMemberChat = (chatId, setDeleting) => dispatch => {
  axiosInstance
    .delete(`/api/participate/${chatId}`)
    .then(response => {
      setDeleting(false)
    })
    .catch(err => {
      console.log('err deleting chat', err)
    })
}
export const deleteOrganizerChat = (chatId, setDeleting) => dispatch => {
  console.log(chatId)
  axiosInstance
    .delete(`/api/create/game/${chatId}`)
    .then(response => {
      setDeleting(false)
    })
    .catch(err => {
      console.log('err deleting chat', err)
    })
}

export const {
  setChats,
  setPlayMessageId,
  setPausedMessageId,
  setVoiceDuration,
} = ChatsSlice.actions
export default ChatsSlice.reducer
