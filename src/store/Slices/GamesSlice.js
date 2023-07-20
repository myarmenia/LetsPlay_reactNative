import { createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../Api'

const initialState = {
  games: [],
  nameOfGames: [],
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
      console.log("response",response.data)
    })
    .catch((err) => {
      console.log('err request', err.request._response)
    })
}

export const { setGames, setNames } = GameSlice.actions
export default GameSlice.reducer
