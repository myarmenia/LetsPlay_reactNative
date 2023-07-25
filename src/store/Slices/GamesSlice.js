import { createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../Api'
import { setModalOptions } from './AppSlice'

const initialState = {
  games: [],
  nameOfGames: [],
  gameFinishPhoto: null,
}

export const GameSlice = createSlice({
  name: 'gameSlice',
  initialState,
  reducers: {
    setGames: (store, action) => {
      return {
        ...store,
        games: action.payload,
      }
    },
    setNames: (store, action) => {
      return {
        ...store,
        nameOfGames: action.payload,
      }
    },
    setGameFinishPhoto: (store, action) => {
      return {
        ...store,
        gameFinishPhoto: action.payload,
      }
    },
  },
})

export const getGames = (data) => (dispatch) => {
  axiosInstance
    .get(`api/game/${data}`)
    .then((response) => {
      dispatch(setGames(response.data.datas))
    })
    .catch((err) => {
      console.log('err request', err.request._response)
    })
}
export const getGamesOnlyNames = () => (dispatch) => {
  axiosInstance
    .get('api/game')
    .then((response) => {
      dispatch(
        setNames(
          response.data.games.map((elm) => {
            return {
              name: elm.name,
              checked: false,
              id: elm._id,
            }
          }),
        ),
      )
    })
    .catch((err) => {
      console.log('error getting games : ', err)
    })
}
export const participateToGame = (gameId) => (dispatch) => {
  axiosInstance
    .post(`/api/participate/${gameId}`)
    .then((response) => {
      console.log('response', response.data)
      dispatch(
        setModalOptions({
          visible: true,
          type: 'message',
          body: 'Вы подключились к игру',
        }),
      )
    })
    .catch((err) => {
      console.log('err request', err.request._response)
    })
}
export const addPhotoAfterFinishGame = (data) => (dispatch) => {
  axiosInstance
    .postForm(`api/create/game/add_images`, data, {
      'Content-Type': 'multipart/form-data',
    })
    .then((response) => {
      console.log('addPhotoAfterFinishGame result', response.data)
    })
    .catch((err) => {
      console.log('err addPhotoAfterFinishGame', err.request._response)
    })
}

export const { setGames, setNames, setGameFinishPhoto } = GameSlice.actions
export default GameSlice.reducer
