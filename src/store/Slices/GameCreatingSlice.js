import { getAsyncStorage } from '@/helpers/asyncStore'
import { useNavigation } from '@react-navigation/native'
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { Alert } from 'react-native'
import axiosInstance from '../Api'

const initialState = {
  start_date: new Date().toISOString().substring(0, 10),
  number_of_players_from: 0,
  number_of_players_to: 0,
  age_restrictions_from: 0,
  age_restrictions_to: 0,
  players_gender: '',
  latitude: 0,
  longitude: 0,
  end_date: new Date().toISOString().substring(0, 10),
  organizer_in_the_game: true,
  ticket_price: 0,
  game: 'Футбол',
  placeName: '',
}

export const GameCreatingSlice = createSlice({
  name: 'CreateGameSlice',
  initialState,
  reducers: {
    setStart_date: (store, action) => {
      return {
        ...store,
        start_date: action.payload,
      }
    },
    setNumber_of_players_from: (store, action) => {
      return {
        ...store,
        number_of_players_from: action.payload,
      }
    },
    setNumber_of_players_to: (store, action) => {
      return {
        ...store,
        number_of_players_to: action.payload,
      }
    },
    setAge_restrictions_from: (store, action) => {
      return {
        ...store,
        age_restrictions_from: action.payload,
      }
    },
    setAge_restrictions_to: (store, action) => {
      return {
        ...store,
        age_restrictions_to: action.payload,
      }
    },
    setPlayers_gender: (store, action) => {
      return {
        ...store,
        players_gender: action.payload,
      }
    },
    setLatitude: (store, action) => {
      return {
        ...store,
        latitude: action.payload,
      }
    },
    setLongitude: (store, action) => {
      return {
        ...store,
        longitude: action.payload,
      }
    },
    setPlaceName: (store, action) => {
      return {
        ...store,
        placeName: action.payload,
      }
    },
    setEndDate: (store, action) => {
      return {
        ...store,
        end_date: action.payload,
      }
    },
    setOrganizer_in_the_game: (store, action) => {
      return {
        ...store,
        organizer_in_the_game: action.payload,
      }
    },
    setTicket_price: (store, action) => {
      return {
        ...store,
        ticket_price: action.payload,
      }
    },
    setGame: (store, action) => {
      return {
        ...store,
        game: action.payload,
      }
    },
    setInitialState: (store, action) => {
      return { game: action.payload }
    },
  },
})

export const createGame = data => {
  axiosInstance
    .post('/create/game', data)
    .then(response => {
      console.log(response.data)
      // dispatch(setStart_date(data?.start_date)),
      //   dispatch(setNumber_of_players_from(data?.number_of_players_from)),
      //   dispatch(setNumber_of_players_to(data?.number_of_players_to)),
      //   dispatch(setAge_restrictions_from(data?.age_restrictions_from)),
      //   dispatch(setNumber_of_players_to(data?.age_restrictions_to)),
      //   dispatch(setLatitute(data?.latitud)),
      //   dispatch(setLongitude(data?.longitude)),
      //   dispatch(setEndDate(data?.endDate)),
      //   dispatch(setOrganizer_in_the_game(data)),
      //   dispatch(setTicket_price(data?.ticket_price)),
      //   dispatch(setGame(data?.game))
    })
    .catch(err => {
      Alert(err)
    })
}

export const {
  setStart_date,
  setNumber_of_players_from,
  setNumber_of_players_to,
  setAge_restrictions_from,
  setAge_restrictions_to,
  setPlayers_gender,
  setLatitude,
  setLongitude,
  setPlaceName,
  setEndDate,
  setOrganizer_in_the_game,
  setTicket_price,
  setGame,
  setInitialState,
} = GameCreatingSlice.actions
export default GameCreatingSlice.reducer
