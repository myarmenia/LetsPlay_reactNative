import { getAsyncStorage } from '@/helpers/asyncStore'
import { useNavigation } from '@react-navigation/native'
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import axiosInstance from '../Api'

const initialState = {
  user: {
    name: '',
    surname: '',
    email: '',
  },
  authPending: true,
  token: '',
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setPending: (store, action) => {
      return {
        ...store,
        authPending: action.payload,
      }
    },
    setName: (store, action) => {
      return {
        ...store,
        user: {
          ...store.user,
          name: action.payload,
        },
      }
    },
    setSurName: (store, action) => {
      return {
        ...store,
        user: {
          ...store.user,
          surname: action.payload,
        },
      }
    },
    setEmail: (store, action) => {
      return {
        ...store,
        user: {
          ...store.user,
          email: action.payload,
        },
      }
    },
    setSignInError: (store, action) => {
      return {
        ...store,
        signInError: action.payload,
      }
    },
    setToken: (store, action) => {
      return {
        ...store,
        token: action.payload,
      }
    },
  },
})

export const signIn = user => dispatch => {
  axiosInstance
    .post('api/auth/sign_in', user)
    .then(response => {
      console.log(response.data)
      dispatch(setToken(response.data.access_token))
    })
    .catch(err => {
      console.log('err request', err.request._response)
      dispatch(
        setSignInError(
          typeof err.request._response == 'string'
            ? JSON.parse(err.request._response).message
            : err.request._response.message,
        ),
      )
    })
}

export const {
  setPending,
  setName,
  setSurName,
  setEmail,
  setSignInError,
  setToken,
} = AuthSlice.actions
export default AuthSlice.reducer
