import { createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../Api'
import { setPending } from './AuthSlice'
import { useSelector } from 'react-redux'
const initialState = {
  rules: '',
  step: 0,
  eachWord: null,
  explainYou: false,
  complexity: null,
  staticTime: null,
  aliasGameId: null,
  explainerTeam: null,
  participateSuccess: null,
  playersInGame: [],
  reservedUsers: [],
  qrGameImg: false,
  stoping: true,
  time: 0,
  allTeams: [
    { command: 1, value: '', members: [], points: 0 },
    { command: 2, value: '', members: [], points: 0 },
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

    setUsersInGame: (store, action) => {
      return { ...store, usersInGame: action.payload }
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
    setStaticTeamsData: (store, action) => {
      return {
        ...store,
        staticTeamsData: action.payload,
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
        // dispatch(setStaticTeamsData(allTeams))
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
      // dispatch(setExplainYou(true))
    })
    .catch((err) => {
      console.log('err startAliasGame esponse', err)
    })
}
export const {
  setTime,
  setStep,
  setQrImg,
  setTeams,
  setWords,
  setExplainYou,
  setComplexity,
  setStaticTeamsData,
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
