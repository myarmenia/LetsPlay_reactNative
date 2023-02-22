import { getAsyncStorage } from '@/helpers/asyncStore'
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { createSlice } from '@reduxjs/toolkit'
import axiosInstance, { getDefualtHeaders } from '../Api'

const initialState = {
  games: [],
}

export const GameSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setGames: (store, action) => {
      return {
        ...store,
        games: action.payload,
      }
    },
  },
})

export const getGames = data => async dispatch => {
  const defualtHeaders = await getDefualtHeaders()
  axiosInstance
    .get(`api/game/${data}`, defualtHeaders)

    .then(response => {
      console.log('signIn response', response.data.datas)
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

export const { setGames } = GameSlice.actions
export default GameSlice.reducer
