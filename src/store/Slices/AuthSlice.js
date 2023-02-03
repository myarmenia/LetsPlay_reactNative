import { createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../Api'

const initialState = {
  user: {
    name: '',
    surname: '',
    email: '',
  },
  authPending: true,
  token: '',
  expired_token: '',
  signUpSuccess: false,
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (store, action) => {
      return {
        ...store,
        token: action.payload,
      }
    },
    setExpiredToken: (store, action) => {
      return {
        ...store,
        expired_token: action.payload,
      }
    },

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
    setSignUpError: (store, action) => {
      return {
        ...store,
        signUpError: action.payload,
      }
    },
    setSignUpSuccess: (store, action) => {
      return {
        ...store,
        signUpSuccess: action.payload,
      }
    },
  },
})

export const signIn = (data) => (dispatch) => {
  axiosInstance
    .post('api/auth/sign_in', data)
    .then((response) => {
      console.log(response.data)
      dispatch(setToken(response.data.access_token))
    })
    .catch((err) => {
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
export const signUpFirst = (data) => (dispatch) => {
  axiosInstance
    .post('api/auth/signup/first_step', data)
    .then((response) => {
      if (response.data?.statusCode == 201) {
        dispatch(setExpiredToken(response.data?.expired_token))
      }
    })
    .catch((err) => {
      console.log('err request response', err.request._response)
      dispatch(
        setSignUpError(
          typeof err.request._response == 'string'
            ? JSON.parse(err.request._response).message[0]
            : err.request._response.message[0],
        ),
      )
    })
}
export const signUpSecond = (data) => (dispatch) => {
  console.log(data)
  axiosInstance
    .post('api/auth/signup/second_step', data)
    .then((response) => {
      console.log(response.data)
      if (response.data?.statusCode == 202) {
        dispatch(setSignUpSuccess(true))
      }
    })
    .catch((err) => {
      console.log('err request response', err.request._response)
      dispatch(
        setSignUpError(
          typeof err.request._response == 'string'
            ? JSON.parse(err.request._response).message[0]
            : err.request._response.message[0],
        ),
      )
    })
}

export const {
  setToken,
  setExpiredToken,
  setPending,
  setName,
  setSurName,
  setEmail,
  setSignInError,
  setSignUpError,
  setSignUpSuccess,
} = AuthSlice.actions
export default AuthSlice.reducer
