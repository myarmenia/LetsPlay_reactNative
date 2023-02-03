import { configureStore } from '@reduxjs/toolkit'
import GameCreatingSlice from './Slices/GameCreatingSlice'
import AuthSlice from './Slices/AuthSlice'
import signUpFirstStep from './Slices/SignUpSlice'

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    game: GameCreatingSlice,
    signUpFirstStep: signUpFirstStep,
  },
})

export default store
