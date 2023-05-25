import { createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../Api'
import { setPending } from './AuthSlice'
import { useSelector } from 'react-redux'
const initialState = {
  rules: '',
  step: 0,
  explainYou: false,
  loader: false,
  start: false,
  countWords: null,
  complexity: null,
  staticTime: null,
  aliasGameId: null,
  youGuesser: null,
  explainerTeam: null,
  participateSuccess: null,
  playersInGame: [],
  reservedUsers: [],
  qrGameImg: false,
  stoping: true,
  time: 0,
  allTeams: [
    { command: 1, value: 'Команда 1', members: [], points: 0 },
    { command: 2, value: 'Команда 2', members: [], points: 0 },
  ],
  explainedWords: {
    truthy: [],
    falsy: [],
  },
}

export const AliasSlice = createSlice({
  name: 'alias',
  initialState,
  reducers: {
    setRules: (store, action) => {
      return { ...store, rules: action.payload }
    },
    setAliasGameId: (store, action) => {
      return { ...store, aliasGameId: action.payload }
    },
    setStoping: (store, action) => {
      return { ...store, stoping: action.payload }
    },
    setComplexity: (store, action) => {
      return { ...store, complexity: action.payload }
    },

    setTime: (store, action) => {
      return {
        ...store,
        time: action.payload,
      }
    },
    setExplainerUser: (store, action) => {
      return { ...store, explainerUser: action.payload }
    },
    setEndRound: (store, action) => {
      return { ...store, endRound: action.payload }
    },
    setPlayersInGame: (store, action) => {
      return { ...store, playersInGame: action.payload }
    },
    setStaticRoundTime: (store, action) => {
      return { ...store, staticTime: action.payload }
    },
    setQrImg: (store, action) => {
      return { ...store, qrGameImg: action.payload }
    },
    setWords: (store, action) => {
      return { ...store, words: action.payload }
    },

    setUserIsOrganizer: (store, action) => {
      return {
        ...store,
        userIsOrganizer: action.payload,
      }
    },
    setReservedUsers: (store, action) => {
      return {
        ...store,
        reservedUsers: action.payload,
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
    setTeams: (store, action) => {
      return {
        ...store,
        allTeams: [...action.payload],
      }
    },
    setStart: (store, action) => {
      return {
        ...store,
        start: action.payload,
      }
    },

    setCountWords: (store, action) => {
      return {
        ...store,
        countWords: action.payload,
      }
    },
    setExplainYou: (store, action) => {
      return {
        ...store,
        explainYou: action.payload,
      }
    },
    setYouGuesser: (store, action) => {
      return {
        ...store,
        youGuesser: action.payload,
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
    setExplainedWords: (store, action) => {
      return {
        ...store,
        explainedWords: action.payload,
      }
    },
    setLoader: (store, action) => {
      return {
        ...store,
        loader: action.payload,
      }
    },
  },
})
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
export const sendAliasSettings = (data, allTeams) => (dispatch) => {
  axiosInstance
    .post('api/game/alias', data)
    .then((response) => {
      if (response.data?.data) {
        dispatch(setQrImg(response.data?.data?.qr_link))
        dispatch(setAliasGameId(response.data?.data?._id))
        dispatch(
          setTeams(allTeams.map((elm, i) => ({ ...elm, id: response.data.data.teams[i]._id }))),
        )
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
      console.log('sendAliasGameId', id)
      dispatch(setAliasGameId(id))
      dispatch(setParticipateSuccess(true))
    })
    .catch((err) => {
      dispatch(setParticipateSuccess(false))
      console.log('err sending alias game id :', err)
    })
}
export const startAliasGame = (gameId) => (dispatch) => {
  axiosInstance
    .post(`api/game/alias/start/${gameId}`)
    .then((response) => {
      console.log('response ------', response)

      // dispatch(setExplainYou(true))
    })
    .catch((err) => {
      console.log('err startAliasGame esponse', err)
    })
}
export const sendUserPoints = (data) => (dispatch) => {
  console.log('data for send', data)
  axiosInstance
    .post('api/alias/user_points', data)
    .then((response) => {
      console.log('sendUserPoints pesponse', response.data)
    })
    .catch((err) => {
      console.log('err sending user points', err)
    })
}
export const cleanDataAndPlayAgain = (data) => (dispatch) => {
  dispatch(setWords([]))
  dispatch(setYouGuesser(null))
  dispatch(setExplainYou(null))
  dispatch(setPlayersInGame([]))
  dispatch(setReservedUsers([]))
  dispatch(setExplainerTeam(null))
  dispatch(setExplainerUser(null))
  dispatch(setParticipateSuccess(null))
}
export const {
  setTime,
  setStep,
  setQrImg,
  setTeams,
  setWords,
  setExplainYou,
  setEndRound,
  setStart,
  setYouGuesser,
  setComplexity,
  setLoader,
  setExplainerUser,
  setCountWords,
  setStoping,
  setRules,
  setAliasGameId,
  setUserIsOrganizer,
  setReservedUsers,
  setExplainerTeam,
  setPlayersInGame,
  setStaticRoundTime,
  setParticipateSuccess,
  setExplainedWords,
} = AliasSlice.actions
export default AliasSlice.reducer
