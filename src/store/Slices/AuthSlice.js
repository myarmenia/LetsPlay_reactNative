import { addAsyncStorage } from '@/helpers/asyncStore'
import { createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../Api'

const initialState = {
  user: {
    name: '',
    surname: '',
    email: '',
    avatar: null,
    preferences: [],
  },
  pending: false,
  token: '',
  expired_token: '',
  signUpSuccess: false,
  signInFirstStepSuccess: false,
  signInStep: 'EMAIL',
  signUpStep: 'NAME',
  documentRules: null,
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
        pending: action.payload,
      }
    },
    setUser: (store, action) => {
      return {
        ...store,
        user: action.payload,
      }
    },
    setImage: (store, action) => {
      return {
        ...store,
        user: {
          ...store.user,
          avatar: action.payload,
        },
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
    setUserPreferences: (store, action) => {
      return {
        ...store,
        user: {
          ...store.user,
          preferences: action.payload,
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
    setSignInStep: (store, action) => {
      return {
        ...store,
        signInStep: action.payload,
      }
    },
    setSignUpStep: (store, action) => {
      return {
        ...store,
        signUpStep: action.payload,
      }
    },
    setDocumentRules: (store, action) => {
      return {
        ...store,
        documentRules: action.payload,
      }
    },
  },
})

export const signIn = (data) => (dispatch) => {
  axiosInstance
    .post('api/auth/sign_in', data)

    .then((response) => {
      dispatch(setExpiredToken(response.data.expired_token))
      dispatch(setSignInStep('EMAIL_SUCCESS'))
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
export const signIn2 = (data) => (dispatch) => {
  axiosInstance
    .post('api/auth/sign_in/second_step', data)
    .then((response) => {
      dispatch(setUser(response.data.user))
      dispatch(setToken(response.data.token.access_token))
      addAsyncStorage('token', response.data.token.access_token)
    })
    .catch((err) => {
      console.log('err request', err.request?._response)
      dispatch(
        setSignInError(
          typeof err.request._response == 'string'
            ? JSON.parse(err.request._response).message
            : err.request._response.message,
        ),
      )
    })
}
export const forgitPassword = (data) => (dispatch) => {
  axiosInstance
    .post('api/auth/password_reset', data)
    .then((response) => {})
    .catch((err) => {
      console.log('err request forgitPassword', err.request?._response)
    })
}
export const forgitPassword2 = (data) => (dispatch) => {
  axiosInstance
    .post('api/auth/password_reset_second_step', data)
    .then((response) => {
      dispatch(setSignInStep('FORGOT_PASSWORD_SUCCESS'))
    })
    .catch((err) => {
      console.log('err request forgitPassword2', err.request?._response)
    })
}

export const forgitPassword3 = (data) => (dispatch) => {
  axiosInstance
    .post('api/auth/password_reset_third_step', data)
    .then((response) => {
      setTimeout(() => {
        dispatch(setToken(response.data?.expired_token?.access_token))
        addAsyncStorage('token', response.data?.expired_token?.access_token)
      }, 1500)
    })
    .catch((err) => {
      console.log('err request forgitPassword3', err.request?._response)
    })
}
export const signUp = (data) => (dispatch) => {
  axiosInstance
    .post('api/auth/signup/first_step', data)
    .then((response) => {
      dispatch(setExpiredToken(response.data?.expired_token))
      dispatch(setSignUpStep('EMAIL_CODE'))
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

export const signUp2 = (data) => (dispatch) => {
  axiosInstance
    .post('api/auth/signup/second_step', data)
    .then((response) => {
      dispatch(setExpiredToken(response.data?.expired_token))
      dispatch(setSignUpStep('EMAIL_CODE_SUCCESS'))
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
export const signUp3 = (data) => (dispatch) => {
  axiosInstance
    .post('api/auth/signup/third_step', data)

    .then(() => {
      dispatch(getDocumentRules())
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
export const signUp4 = (data) => (dispatch) => {
  axiosInstance
    .post('api/auth/signup/fourth_step', data)
    .then((response) => {
      setUser(response.data.user)
      dispatch(setSignUpStep('SIGN_UP_SUCCESSFULED'))
      dispatch(setExpiredToken(response.data.token.access_token))
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
export const changeUserPreferences = (data, token) => async (dispatch) => {
  const myHeaders = new Headers()
  myHeaders.append('Authorization', `Bearer ${token}`)
  myHeaders.append('Accept', 'application/json')
  const formdata = new FormData()
  data.forEach((elm) => {
    formdata.append('preferences[]', elm)
  })
  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow',
  }
  fetch(
    Platform.OS == 'ios'
      ? 'https://to-play.ru/api/user/preferences'
      : 'http://to-play.ru/api/user/preferences',
    requestOptions,
  )
    .then((response) => {
      dispatch(setUserPreferences(data))
      return response.json()
    })
    .then((res) => {
      // console.log(res)
    })
    .catch((err) => {
      console.log('error changing preferences : ', err)
    })
}
export const getDocumentRules = () => (dispatch) => {
  axiosInstance
    .get('api/document-rules')
    .then((response) => {
      dispatch(setDocumentRules(response.data?.datas))
    })
    .catch((err) => {
      console.log('err request response', err.request._response)
    })
}

export const vkAuth = (data) => (dispatch) => {
  axiosInstance
    .post('api/auth/vk', data)
    .then((response) => {
      console.log('response.data.user', response.data.user)
      dispatch(setUser(response.data?.user))
      dispatch(setToken(response.data?.token))
      addAsyncStorage('token', response.data?.token)
    })
    .catch((err) => {
      console.log('Vk auth err request response - ', err.request?._response)
    })
}
export const editProfile = (data) => (dispatch) => {
  axiosInstance
    .put('api/profile', data)
    .then((response) => {
      // console.log('editProfile response', response.data)
    })
    .catch((err) => {
      console.log('err request _response', err.request._response)
    })
}
export const getProfileInfo = (data) => (dispatch) => {
  axiosInstance
    .get('api/profile')
    .then((response) => {
      // console.log('getProfileInfo ', response.data)
      dispatch(setUser(response.data?.user))
    })
    .catch((err) => {
      console.log('err request _response', err.request._response)
    })
}
export const {
  setToken,
  setExpiredToken,
  setPending,
  setName,
  setSurName,
  setEmail,
  setUserPreferences,
  setUser,
  setImage,
  setSignInFirstStepSuccess,
  setSignInError,
  setSignUpError,
  setSignUpSuccess,
  setSignInStep,
  setSignUpStep,
  setDocumentRules,
} = AuthSlice.actions
export default AuthSlice.reducer
