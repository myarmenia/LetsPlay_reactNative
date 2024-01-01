import { createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../Api'

const initialState = {
  chatMessages: [],
  playMessageId: null,
  pausedMessageId: null,
  voiceDuration: '00:00:00',
  chats: []

}

export const ChatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    setChats: (store, action) => {
      const sortedData = action.payload.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
      store.chats = sortedData
    },

    setMessages: (store, action) => {
      return {
        ...store,
        chatMessages: action.payload,
      }
    },
    addSingleMessage: (store, action) => {
      const index = store.chatMessages.findIndex(item => item.id === action.payload.id)
      if (index === -1) {
        store.chatMessages.unshift(action.payload)
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
    setAllChats: (store, action) => {
      return {
        ...store,
        allGameChats: action.payload,
      }
    },
    setDeleteChat: (store, action) => {
      store.chats = store.chats.filter((elm) => elm._id !== action.payload)
    },
    setAllTeamChats: (store, action) => {
      return {
        ...store,
        allTeamChats: action.payload,
      }
    },
  },
})



export const getAllChats = () => async (dispatch) => {
  try {
    const data = await axiosInstance.get('api/create/game/to_play/allChats')
    if (data.data.statusCode === 200) {
      dispatch(setChats(data.data.datas))
    }
  } catch (error) {
    console.log(error, 'error')
  }
}


export const getTourneyChatMessages = (id) => async (dispatch) => {
  try {
    const messages = await axiosInstance.get(`api/tourney/chat/${id}`)
    if (messages.data.datas.length) {
      dispatch(setMessages(messages.data.datas.reverse()))
    }
  } catch (error) {
    console.log(error, 'error');
  }
}
export const sendTourneyChatMessage = (obj) => async () => {
  try {
    const data = await axiosInstance.post('api/tourney/chat', obj)
  } catch (error) {
    console.log(error, 'error');
  }
}
export const deleteTourneyChat = (gameId, callBack) => (dispatch) => {
  axiosInstance
    .delete(`api/tourney/${gameId}`)
    .then((res) => {
      if (res.data.statusCode === 200) {
        callBack(false)
        dispatch(setDeleteChat(gameId))
      }
    })
    .catch((err) => {
      console.error('Error: createGame', err)
    })
}

export const getGameChatMessages = (data) => (dispatch) => {
  axiosInstance
    .get(`/api/create/game/chat/${data}`)
    .then((response) => {
      dispatch(setMessages(response.data.datas))
    })
    .catch((err) => {
      console.error('Error', err.request._response)
    })
}
export const sendGameChatMessage = (data) => () => {
  axiosInstance
    .post(`/api/create/game/chat/`, data)
    .then((res) => { })
    .catch((err) => {
      console.error('Error: request', err.request._response)
    })
}
export const deleteGameChat = (gameId, callBack) => (dispatch) => {
  axiosInstance
    .delete(`api/create/game/${gameId}`)
    .then((res) => {
      if (res.data.statusCode === 200) {
        callBack(false)
        dispatch(setDeleteChat(gameId))
      }
    })
    .catch((err) => {
      console.error('Error: createGame', err)
    })
}

export const getTeamChatMessages = (data) => (dispatch) => {
  axiosInstance
    .get(`/api/team/chat/${data}`)
    .then((response) => {
      dispatch(setMessages(response.data.datas.reverse()))
    })
    .catch((err) => {
      console.error('Error', err.request._response)
    })
}
export const sendTeamChatMessage = (data) => () => {
  axiosInstance
    .post(`/api/team/chat`, data)
    .then((response) => { })
    .catch((err) => {
      console.error('Error', err)
    })
}
export const deleteTeamChat = (body, callBack) => (dispatch) => {
  axiosInstance
    .put('api/team/delete/team/player', body)
    .then((res) => {
      if (res.data.statusCode === 200) {
        callBack(false)
        dispatch(setDeleteChat(body.team_id))
      }
    })
    .catch((err) => {
      console.log('Error: createGame', err)
    })
}


export const getTeamCreateGameChatMessages = (data) => (dispatch) => {
  axiosInstance
    .get(`/api/team/create_game/chat/${data}`)
    .then((response) => {
      dispatch(setMessages(response.data.datas.reverse()))
    })
    .catch((err) => {
      console.error('Error', err.request._response)
    })
}
export const sendTeamCreateGameChatMessage = (data) => (dispatch) => {
  axiosInstance
    .post(`/api/team/create_game/chat`, data)
    .then((response) => {
    })
    .catch((err) => {
      console.error('Error: request', err)
    })
}
export const deleteTeamCreateGameChat = (gameId, callBack) => (dispatch) => {
  axiosInstance
    .delete(`api/team/create/game/${gameId}`)
    .then((res) => {
      if (res.data.statusCode === 200) {
        callBack(false)
        dispatch(setDeleteChat(gameId))
      }
    })
    .catch((err) => {
      console.error('Error: createGame', err)
    })
}

export const {
  setChats,
  setMessages,
  setPlayMessageId,
  setPausedMessageId,
  setVoiceDuration,
  setAllChats,
  setDeleteChat,
  setAllTeamChats,
  addSingleMessage
} = ChatsSlice.actions
export default ChatsSlice.reducer
