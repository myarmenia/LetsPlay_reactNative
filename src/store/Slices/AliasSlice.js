import { createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../Api'
import { useSelector } from 'react-redux'
import { setPending } from './AuthSlice'

const initialState = {
  rules: '',
  step: 0,

  explainYou: null,
  complexity: null,
  staticTime: null,
  aliasGameId: null,
  startedAlias: false,
  countOfWords: null,
  explainerTeam: null,
  commandsAndPlayers: null,
  participateSuccess: null,
  answersInGame: {
    true: 0,
    false: 0,
    trueWords: [],
    falseWords: [],
  },
  words: [],
  usersInGame: [],
  playersInGame: [],
  reservedUsers: [],
  endRound: false,
  qrGameImg: false,
  userIsOrganizer: false,
  stoping: true,
  time: 0,
  commandsInGame: [
    { command: 1, value: '', members: [], points: 0 },
    { command: 2, value: '', members: [], points: 0 },
  ],
}

export const AliasSlice = createSlice({
  name: 'alias',
  initialState,
  reducers: {
    // setMinutes: (store, action) => {
    //   return { ...store, minutesInGame: action.payload }
    // },
    setCommandsInGame: (store, action) => {
      return { ...store, commandsInGame: action.payload }
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
    setStoping: (store, action) => {
      return { ...store, stoping: action.payload }
    },
    setTime: (store, action) => {
      return {
        ...store,
        time: action.payload,
      }
    },
    setCountWords: (store, action) => {
      return { ...store, countOfWords: action.payload }
    },
    setEndRound: (store, action) => {
      return { ...store, endRound: action.payload }
    },
    setStaticRoundTime: (store, action) => {
      return { ...store, staticTime: action.payload }
    },
    setQrImg: (store, action) => {
      return { ...store, qrGameImg: action.payload }
    },
    setPlayersInGame: (store, action) => {
      return { ...store, playersInGame: action.payload }
    },
    setUsersInGame: (store, action) => {
      return { ...store, usersInGame: action.payload }
    },
    setCommandsAndPlayers: (store, action) => {
      return { ...store, commandsAndPlayers: action.payload }
    },
    setWords: (store, action) => {
      return { ...store, words: action.payload }
    },
    setStartedAlias: (store, action) => {
      return { ...store, startedAlias: action.payload }
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
    setStep: (store, action) => {
      return {
        ...store,
        step: action.payload,
      }
    },
    setAnswersInGame: (store, action) => {
      return {
        ...store,
        answersInGame: action.payload,
      }
    },
    setExplainingUser: (store, action) => {
      return {
        ...store,
        explainingUser: action.payload,
      }
    },
    setExplainerTeam: (store, action) => {
      return {
        ...store,
        explainerTeam: action.payload,
      }
    },
    setYouExplainer: (store, action) => {
      return {
        ...store,
        explainYou: action.payload,
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

export const clearAllAliasData = () => (dispatch) => {
  dispatch(setReservedUsers([]))
  dispatch(setAliasGameId(null))
  dispatch(setTeams([]))
  dispatch(setComplexity(null))
  dispatch(setCountWords(null))
  dispatch(setQrImg(null))
  dispatch(setPlayersInGame(null))
}

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
  axiosInstance
    .post(`api/game/alias/confirm/team`, teamInfo)
    .then((response) => {
      // console.log('setPlayers response', response.data)
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
  setTime,
  setStep,
  setQrImg,
  setWords,
  setTeams,
  setStoping,
  setEndRound,
  setStartedAlias,
  setCommandsInGame,
  setCountWords,
  setComplexity,
  setUsersInGame,
  setAliasGameId,
  setTrueAnswers,
  setYouExplainer,
  setFalseAnswers,
  setAnswersInGame,
  setReservedUsers,
  setExplainerTeam,
  setPlayersInGame,
  setExplainingUser,
  setStaticRoundTime,
  setUserIsOrganizer,
  setParticipateSuccess,
  setCommandsAndPlayers,
} = AliasSlice.actions
export default AliasSlice.reducer
