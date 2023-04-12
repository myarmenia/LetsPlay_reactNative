import { createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../Api'
import { useSelector } from 'react-redux'
import { setPending } from './AuthSlice'

const initialState = {
  rules: '',
  qrGameImg: false,
  commands: null,
  complexity: null,
  aliasGameId: null,
  countOfWords: null,
  minutesInGame: 0,
  playersInGame: [],
  reservedUsers: [],
  userIsOrganizer: false,
  participateSuccess: null,
}

export const AliasSlice = createSlice({
  name: 'alias',
  initialState,
  reducers: {
    setCommands: (store, action) => {
      return { ...store, commands: action.payload }
    },
    setMinutes: (store, action) => {
      return { ...store, minutesInGame: action.payload }
    },
    setReservedUsers: (store, action) => {
      return { ...store, reservedUsers: action.payload }
    },
    setAliasGameId: (store, action) => {
      return { ...store, aliasGameId: action.payload }
    },
    setTeams: (store, action) => {
      return { ...store, teamDatas: action.payload }
    },
    setComplexity: (store, action) => {
      return { ...store, complexity: action.payload }
    },
    setCountWords: (store, action) => {
      return { ...store, countOfWords: action.payload }
    },
    setQrImg: (store, action) => {
      return { ...store, qrGameImg: action.payload }
    },
    setPlayersInGame: (store, action) => {
      return { ...store, playersInGame: action.payload }
    },
    setUserIsOrganizer: (store, action) => {
      return {
        ...store,
        userIsOrganizer: action.payload,
      }
    },
    setParticipateSuccess: (store, action) => {
      return {
        ...store,
        participateSuccess: action.payload,
      }
    },
    // setTrueAnswers: (store, action) => {
    //   return {
    //     ...store,
    //     answers: {
    //       ...answers,
    //       truthy: answers.truthy + 1,
    //     },
    //   }
    // },
    // setFalseAnswers: (store, action) => {
    //   return {
    //     ...store,
    //     answers: {
    //       ...answers,
    //       falsy: answers.falsy + 1,
    //     },
    //   }
    // },
    // setResetAnswers: (store, action) => {
    //   return {
    //     ...store,
    //     answers:{
    //       truthy:0,
    //       falsy:0
    //     }
    //   }
    // }
  },
})

export const sendAliasSettings = (data) => (dispatch) => {
  axiosInstance
    .post('api/game/alias', data)
    .then((response) => {
      if (response.data?.data) {
        dispatch(setQrImg(response.data?.data?.qr_link))
        dispatch(setAliasGameId(response.data?.data?._id))
        dispatch(setTeams(response.data.data.teams))
      }
    })
    .catch((err) => {
      console.log('err sending alias settings :', err)
    })
}
export const sendAliasGameId = (id) => (dispatch) => {
  dispatch(setPending(true))
  axiosInstance
    .post(`api/game/alias/participate/${id}`)
    .then(async (response) => {
      console.log()
      if (response.data?.data?.players) {
        dispatch(setPlayersInGame(response.data.data.players))
      }
      dispatch(setAliasGameId(id))
      dispatch(setParticipateSuccess(true))
    })
    .catch((err) => {
      dispatch(setParticipateSuccess(false))
      console.log('err sending alias game id :', err)
    })
}
export const setPlayers = (teamInfo) => (dispatch) => {
  console.log('teamInfo', teamInfo)
  axiosInstance
    .post(`api/game/alias/confirm/team`, teamInfo)
    .then((response) => {
      console.log('setPlayers response', response.data)
    })
    .catch((err) => {
      console.log('err setPlayers : response', err.response)
    })
}
export const startAliasGame = (gameId) => (dispatch) => {
  console.log('gameId', gameId)
  axiosInstance
    .post(`api/game/alias/start/${gameId}`)
    .then((response) => {
      console.log('startAliasGame response', response.data)
    })
    .catch((err) => {
      console.log('err startAliasGame esponse', err.response)
    })
}
export const {
  setQrImg,
  setTeams,
  setMinutes,
  setCommands,
  setCountWords,
  setComplexity,
  setAliasGameId,
  setTrueAnswers,
  setFalseAnswers,
  setPlayersInGame,
  setReservedUsers,
  setUserIsOrganizer,
  setParticipateSuccess,
} = AliasSlice.actions
export default AliasSlice.reducer
