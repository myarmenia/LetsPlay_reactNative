import { createSlice } from '@reduxjs/toolkit'
import axiosInstance from '@/store/Api'

export const initialStateFirstStep = {
  load: false,
  error: false,
  token: null,
  endRegistration: false,
}

export const signUpFirstSlice = createSlice({
  name: 'signUpFirst',
  initialState: initialStateFirstStep,
  reducers: {
    pending: (state, action) => {
      state.load = true
      state.error = false
      state.token = null
    },
    firstStepFulfilled: (state, action) => {
      state.load = false
      state.error = false
      state.token = action.payload
    },
    firstStepRejected: (state, action) => {
      state.load = false
      state.error = action.payload
    },
    secondStepFulfilled: (state, action) => {
      state.load = false
      state.endRegistration = true
    },
    secondStepRejected: (state, action) => {
      state.load = false
      state.error = action.payload
    },
  },
})

export const signUpFirstStep = user => dispatch => {
  dispatch(pending())
  axiosInstance
    .post('api/auth/signup/first_step', JSON.stringify(user))
    .then(response => {
      dispatch(firstStepFulfilled(response.data.expired_token))
    })
    .catch(err => {
      return dispatch(
        firstStepRejected({
          id: new Date().getTime(),
          text: 'Такой e-mail уже зарегистрирован',
        }),
      )
    })
}

export const signUpSecondStep = data => dispatch => {
  dispatch(pending())
  axiosInstance
    .post('api/auth/signup/second_step', JSON.stringify(data))
    .then(response => {
      if (+response.data.statusCode >= 400) {
        dispatch(
          secondStepRejected({
            id: new Date().getTime(),
            text: 'Неверный код с почты повторите заново',
            setStep: 'EMAIL_PASSWORD',
          }),
        )
      } else if (+response.data.statusCode === 201) {
        dispatch(secondStepFulfilled())
      }
    })
    .catch(err => {
      return dispatch(
        secondStepRejected({
          id: new Date().getTime(),
          text: 'Неверный код с почты повторите заново',
        }),
      )
    })
}

export const {
  secondStepRejected,
  secondStepFulfilled,
  pending,
  firstStepFulfilled,
  firstStepRejected,
} = signUpFirstSlice.actions

export default signUpFirstSlice.reducer
