import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './Slices/AuthSlice'
import ChatsSlice from './Slices/ChatsSlice'
import GameCreatingSlice from './Slices/GameCreatingSlice'
import GamesSlice from './Slices/GamesSlice'
import MafiaSlice from './Slices/MafiaSlice'
import TeamSlice from './Slices/TeamSlice'

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    game: GameCreatingSlice,
    games: GamesSlice,
    chats: ChatsSlice,
    teams: TeamSlice,
    mafia: MafiaSlice,
  },
})

export default store
