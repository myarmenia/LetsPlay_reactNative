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

export const getGames = () => (dispatch) => {
  axiosInstance
    .get(`api/game`)
    .then((response) => {
      dispatch(setGames(response.data.games))
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
export const confirmPhotoAfterFinishGame = (data) => (dispatch) => {
  axiosInstance
    .put(`api/create/game/confirm_file`, data)
    .then((response) => {
      console.log('confirmPhotoAfterFinishGame result', response.data)
    })
    .catch((err) => {
      console.log('err confirmPhotoAfterFinishGame', err.request._response)
    })
}
export const ratePlayersAfterFinishGame = (data, navigation) => (dispatch) => {
  console.log('ratePlayersAfterFinishGame data', data)
  axiosInstance
    .post(`api/create/game/create_game/rating`, data)
    .then((response) => {
      navigation.navigate('Home')
      console.log('ratePlayersAfterFinishGame result', response.data)
    })
    .catch((err) => {
      console.log('err ratePlayersAfterFinishGame', err.request._response)
    })
}
export const getGameById = (create_game_id, navigation) => (dispatch) => {
  axiosInstance
    .get(`api/create/game/${create_game_id}`)
    .then((response) => {
      if (response.data.data) {
        navigation.replace('CreateGameNavigator', {
          screen: 'GameCreating',
          params: { editGame: response.data.data },
        })
      }
    })
    .catch((err) => {
      console.log('err getGameById', err.request._response)
    })
}

export const { setGames, setNames, setGameFinishPhoto } = GameSlice.actions
export default GameSlice.reducer
