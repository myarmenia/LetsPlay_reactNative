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

export const getGames = data => async dispatch => {
  let defualtHeaders // =  await getDefualtHeaders()
  axiosInstance
    .get(`api/game/${data}`, defualtHeaders)

    .then(response => {
      // console.log('signIn response', response.data.datas)
      dispatch(setGames(response.data.datas))
      //   dispatch(setSignInStep('EMAIL_SUCCESS'))
    })
    .catch(err => {
      console.log('err request', err.request._response)

      //   dispatch(
      //     setSignInError(
      //       typeof err.request._response == 'string'
      //         ? JSON.parse(err.request._response).message
      //         : err.request._response.message,
      //     ),
      //   )
    })
}
export const getGamesOnlyNames = () => async dispatch => {
  const defualtHeaders = await getDefualtHeaders()
  axiosInstance
    .get('api/game', defualtHeaders)

    .then(response => {
      dispatch(
        setNames(
          response.data.games.map(elm => {
            return {
              name: elm.name,
              checked: false,
              id: elm._id,
            }
          }),
        ),
      )
    })
    .catch(err => {
      console.log('error getting games : ', err)
    })
}

export const { setGames, setNames } = GameSlice.actions
export default GameSlice.reducer
