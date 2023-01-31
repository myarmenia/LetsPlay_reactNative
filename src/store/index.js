import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './Slices/AuthSlice'
import signUpFirstStep from './Slices/SignUpSlice'

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    // app: app
  },
})

export default store
