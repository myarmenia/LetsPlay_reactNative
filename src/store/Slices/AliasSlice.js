import { createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../Api'

const initialState = {
  rules: '',
  qrGameImg: false,
  commands: null,
  complexity: null,
  aliasGameId: null,
  countOfWords: null,
  minutesInGame: 0,
  users: [
    { id: 0, f: '' },
    { id: 1, f: '' },
    { id: 2, f: '' },
    { id: 3, f: '' },
    { id: 4, f: '' },
    { id: 5, f: '' },
    { id: 6, f: '' },
    { id: 7, f: '' },
    { id: 8, f: '' },
    { id: 9, f: '' },
    { id: 10, f: '' },
    { id: 11, f: '' },
    { id: 12, f: '' },
  ],
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
    setComplexity: (store, action) => {
      return { ...store, complexity: action.payload }
    },
    setCountWords: (store, action) => {
      return { ...store, countOfWords: action.payload }
    },
    setQrImg: (store, action) => {
      return { ...store, qrGameImg: action.payload }
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
        // console.log('qr Link :', JSON.stringify(response.data.data.qr_link, null, 5))
      }
    })
    .catch(err => {
      console.log('err sending alias settings :', err)
    })
}
export const sendGameId = id => dispatch => {
  axiosInstance
    .post(`api/game/alias/participate/${id}`)
    .then(response => {
      console.log(response.data)
    })
    .catch(err => {
      console.log('err sending alias game id :', err)
    })
}

export const {
  setQrImg,
  setMinutes,
  setCommands,
  setCountWords,
  setComplexity,
  setTrueAnswers,
  setAliasGameId,
  setFalseAnswers,
  setReservedUsers,
} = AliasSlice.actions
export default AliasSlice.reducer
