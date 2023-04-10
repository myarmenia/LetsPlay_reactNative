import { createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../Api'
import { useSelector } from 'react-redux'

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
      console.log('action.payload', action.payload)
      return { ...store, playersInGame: action.payload }
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

export const sendAliasSettings = data => dispatch => {
  axiosInstance
    .post('api/game/alias', data)
    .then(response => {
      if (response.data?.data) {
        dispatch(setQrImg(response.data?.data?.qr_link))
        dispatch(setAliasGameId(response.data?.data?._id))
        dispatch(setTeams(response.data.data.teams))
        console.log('qr Link :', JSON.stringify(response.data.data.qr_link, null, 5))
      }
    })
    .catch(err => {
      console.log('err sending alias settings :', err)
    })
}
export const sendGameId = id => dispatch => {
  axiosInstance
    .post(`api/game/alias/participate/${id}`)
    .then(async response => {
      await dispatch(setPlayersInGame(response?.data.data))
      dispatch(setAliasGameId(response?.data?.data?._id))
      console.log(initialState.playersInGame)
    })
    .catch(err => {
      console.log('err sending alias game id :', err)
    })
}
export const setPlayers = teamInfo => dispatch => {
  axiosInstance
    .post(`api/game/alias/confirm/team`, teamInfo)
    .then(async response => {
      console.log('response :', response)
    })
    .catch(err => {
      console.log('err setting players :', err)
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
} = AliasSlice.actions
export default AliasSlice.reducer
