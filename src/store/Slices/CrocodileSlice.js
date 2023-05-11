import axiosInstance from '../Api'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  commands: null,
  complexity: null,
  countOfWords: null,
  crocodileGameId: null,
  qrGameImg: false,
  minutesInGame: 0,
  playersInGame: [],
  reservedUsers: [],
}

export const CrocodileSlice = createSlice({
  name: 'crocodile',
  initialState,
  reducers: {
    setCommands: (store, action) => {
      return { ...store, commands: action.payload }
    },
    setComplexity: (store, action) => {
      return { ...store, complexity: action.payload }
    },
    setQrImg: (store, action) => {
      return { ...store, qrGameImg: action.payload }
    },
    setCrocodileGameId: (store, action) => {
      return { ...store, crocodileGameId: action.payload }
    },
    setPlayersInGame: (store, action) => {
      return { ...store, playersInGame: action.payload }
    },
    setReservedUsers: (store, action) => {
      return { ...store, reservedUsers: action.payload }
    },
    setTeams: (store, action) => {
      return { ...store, teamDatas: action.payload }
    },
  },
})

export const sendCrocodileSettings = (data) => (dispatch) => {
  console.log(data)
  axiosInstance
    .post('api/crocodile', data)
    .then((response) => {
      console.log(response.data.data)
      dispatch(setQrImg(response.data?.data?.qr_link))
      dispatch(setCrocodileGameId(response.data?.data?._id))
      dispatch(setTeams(response.data.data.teams))
    })
    .catch((err) => {
      console.log('err sending crocodile settings :', err)
    })
}
export const sendCrocodileGameId = (id) => (dispatch) => {
  axiosInstance
    .post(`api/crocodile/participate/${id}`)
    .then((response) => {
      console.log('response =', response.data)
      if (response.data?.data?.players) {
        dispatch(setPlayersInGame(response.data.data))
      }
      dispatch(setCrocodileGameId(id))
    })
    .catch((err) => {
      console.log('err sending crocodile game id :', err)
    })
}

export const setPlayers = (teamInfo) => (dispatch) => {
  axiosInstance
    .post(`api/crocodile/confirm/team`, teamInfo)
    .then(async (response) => {})
    .catch((err) => {
      console.log('err setting players :', err)
    })
}

export const {
  setQrImg,
  setTeams,
  setCommands,
  setComplexity,
  setPlayersInGame,
  setReservedUsers,
  setCrocodileGameId,
} = CrocodileSlice.actions
export default CrocodileSlice.reducer
