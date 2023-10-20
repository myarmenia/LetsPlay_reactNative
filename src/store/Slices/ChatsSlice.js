import { createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../Api'

const initialState = {
  chats: [],
  playMessageId: null,
  pausedMessageId: null,
  voiceDuration: '00:00:00',
  allGameChats: [],
  allTeamChats: [],
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
    setAllChats: (store, action) => {
      return {
        ...store,
        allGameChats: action.payload,
      }
    },
    setDeleteChat: (store, action) => {
      return {
        ...store,
        allChats: store.allChats.filter((elm) => elm._id !== action.payload),
      }
    },
    setAllTeamChats: (store, action) => {
      return {
        ...store,
        allTeamChats: action.payload,
      }
    },
  },
})

export const getAllGameChats = () => (dispatch) => {
  axiosInstance
    .get('api/create/game/all/create_games')
    .then((response) => {
      dispatch(setAllChats(response.data.data))
    })
    .catch((err) => {
      console.error('Error: getMessagesCount', err)
    })
}
export const deleteChat = (gameId, callBack) => (dispatch) => {
  axiosInstance
    .delete(`api/create/game/${gameId}`)
    .then((res) => {
      callBack()
      dispatch(setDeleteChat(gameId))
    })
    .catch((err) => {
      console.error('Error: createGame', err.request._response)
    })
}
export const getChats = (data) => (dispatch) => {
  axiosInstance
    .get(`/api/create/game/chat/${data}`)
    .then((response) => {
      dispatch(setChats(response.data.datas.reverse()))
    })
    .catch((err) => {
      console.error('Error: request chats', err.request._response)
    })
}
export const getAllTeamChats = () => (dispatch) => {
  axiosInstance
    .get(`api/team/create/game/all/team_games`)
    .then((response) => {
      dispatch(setAllTeamChats(response.data.data))
    })
    .catch((err) => {
      console.error('Error: getAllTeamChats', err.request._response)
    })
}
export const getTeamChats = (data) => (dispatch) => {
  axiosInstance
    .get(`/api/team/chat/${data}`)
    .then((response) => {
      dispatch(setChats(response.data.datas.reverse()))
    })
    .catch((err) => {
      console.error('Error: request chats', err.request._response)
    })
}
export const sendMessage = (data) => (dispatch) => {
  axiosInstance
    .post(`/api/create/game/chat/`, data)
    .then((res) => {})
    .catch((err) => {
      console.error('Error: request', err.request._response)
    })
}
export const sendTeamMessage = (data) => (dispatch) => {
  axiosInstance
    .post(`/api/team/chat`, data)
    .then((response) => {})
    .catch((err) => {
      console.error('Error: request', err.request._response)
    })
}
export const deleteMemberChat = (chatId, setDeleting) => (dispatch) => {
  axiosInstance
    .delete(`/api/participate/${chatId}`)
    .then((response) => {
      setDeleting(false)
    })
    .catch((err) => {
      console.error('Error: deleting chat deleteMemberChat', err)
    })
}
export const deleteOrganizerChat = (chatId, setDeleting) => (dispatch) => {
  axiosInstance
    .delete(`/api/create/game/${chatId}`)
    .then((response) => {
      setDeleting(false)
    })
    .catch((err) => {
      console.error('Error: deleting chat deleteOrganizerChat', err)
    })
}
// export const getAllChats

export const {
  setChats,
  setPlayMessageId,
  setPausedMessageId,
  setVoiceDuration,
  setAllChats,
  setDeleteChat,
  setAllTeamChats,
} = ChatsSlice.actions
export default ChatsSlice.reducer

let x = {
  __v: 1,
  _id: '64dd4fa5116a3f1d1e8f41de',
  address_name: 'RG7V+VV Тимирязевский район, Москва, Россия',
  age_restrictions_from: 1,
  age_restrictions_to: 50,
  chats: [],
  clicked_end_players: [],
  confirmed_players: [],
  createdAt: '2023-08-16T22:37:25.169Z',
  end_date: '2023-08-17T12:30:00.000Z',
  game: {
    _id: '63ec910c338f6ba3d35e9ee9',
    category: '63ec8d46338f6ba3d35e9ee1',
    description: null,
    formats: ['3:3', '5:5', '8:8', '11:11'],
    img: '/game_imgs/soccer-ball 1.png',
    name: 'Футбол',
    rules:
      'Футбол — командный вид спорта, в котором целью является забить мяч в ворота соперника ногами или другими частями тела (кроме рук) большее количество раз, чем команда соперника. Команда, которая забьет больше голов к концу игры, становится победителем.Организуйте увлекательную игру: подберите подходящую для Вас площадку в Вашем городе и с помощью “Играем” найдите единомышленников для совместной игры. Количество игроков должно быть не менее 3 человек.Главное - собраться. Удачной игры!',
    schema_img: '/game_schema_img/Group 1805.png',
    updatedAt: '2023-10-11T08:32:31.193Z',
  },
  id: '64dd4fa5116a3f1d1e8f41de',
  last_message: '2023-08-16T22:38:38.245Z',
  location: { coordinates: [37.54464351634547, 55.81474858416374], type: 'Point' },
  number_of_players_from: 10,
  number_of_players_to: 30,
  organizer_in_the_game: false,
  players: ['64e5f5acd199e848be438230'],
  players_gender: 'm/f',
  rating: {},
  start_date: '2023-08-17T13:30:00.000Z',
  ticket_price: 0,
  updatedAt: '2023-09-18T12:53:13.665Z',
  user: {
    _id: '64db7ee5875a68f80712bf84',
    avatar:
      'https://sun6-23.userapi.com/s/v1/if1/iry1_oWujLCYTnxbAtRCdTsy8e3woErwc2eKEzdhU-gf1VrsYxhONU-rBYariyVbrYrBk395.jpg?size=200x200&quality=96&crop=20,20,260,260&ava=1',
    dob: '1987-11-11T00:00:00.000Z',
    email: null,
    gender: 'male',
    id: '64db7ee5875a68f80712bf84',
    name: 'Вячеслав',
    phone_number: null,
    surname: 'Калугин',
  },
}
