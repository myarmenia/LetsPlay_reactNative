import { getAsyncStorage } from '@/helpers/asyncStore'
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import axiosInstance from '../Api'

const initialState = {
  user: {
    name: 'Arsen',
    surname: 'Rustamyan',
    email: 'arsenrustamyan@mail.ru',
  },
  authPending: true,
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
  },
})

export const signUpFirstStep = (user) => (dispatch) => {
  var data = JSON.stringify({
    email: 'test12120121fsrgrte0@gmail.com',
    name: 'test',
    surname: 'test',
  })

  var config = {
    method: 'post',
    url: 'http://to-play.ru/api/auth/signup/first_step',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  }
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data))
    })
    .catch(function (error) {
      console.log(error)
    })

  //   dispatch(setPending(true))
  //   axiosInstance.post('api/auth/signup/first_step')
  //     .then((response) => {
  //       console.log(response)
  //       addAsyncStorage('token', response.token)
  //       //   if (response.data.success) {
  //       //     dispatch(setEmail(data.username))
  //       //   } else {
  //       //     dispatch(setAuthSuccess(false))
  //       //     dispatch(setLoginMessage(response.data.message))
  //       //   }
  //       dispatch(setPending(false))
  //     })
  //     .catch((err) => {
  //       dispatch(setPending(false))
  //       alert(err)
  //       console.log('err', err)
  //     })
}
export const signUpSecondStep = (user) => (dispatch) => {
  console.log(user)
  dispatch(setPending(true))
  axiosInstance
    .post('api/auth/signup/first_step', user)
    .then((response) => {
      console.log(response)
      getAsyncStorage('token')
      //   if (response.data.success) {

      //   } else {
      //     dispatch(setAuthSuccess(false))
      //     dispatch(setLoginMessage(response.data.message))
      //   }
      dispatch(setPending(false))
    })
    .catch((err) => {
      dispatch(setPending(false))
      alert(err)
      console.log('err', err)
    })
}

export const { setPending, setName, setSurName, setEmail } = AuthSlice.actions
export default AuthSlice.reducer
