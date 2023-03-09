import { getAsyncStorage } from '@/helpers/asyncStore'
import { createSlice } from '@reduxjs/toolkit'
import axiosInstance, { getDefualtHeaders } from '../Api'

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

export const getGames = (data) => async (dispatch) => {
  axiosInstance
    .get(`api/game/${data}`)

    .then((response) => {
      dispatch(setGames(response.data.datas))
    })
    .catch((err) => {
      console.log('err request', err.request._response)
    })
}
export const getGamesOnlyNames = () => async dispatch => {
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

export const { setGames, setNames } = GameSlice.actions
export default GameSlice.reducer
