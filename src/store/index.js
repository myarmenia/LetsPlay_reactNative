import { configureStore } from '@reduxjs/toolkit'
import AliasSlice from './Slices/AliasSlice'
import AuthSlice from './Slices/AuthSlice'
import ChatsSlice from './Slices/ChatsSlice'
import GameCreatingSlice from './Slices/GameCreatingSlice'
import GamesSlice from './Slices/GamesSlice'
import MafiaSlice from './Slices/MafiaSlice'
import TeamSlice from './Slices/TeamSlice'
import AppSlice from './Slices/AppSlice'

const store = configureStore({
  reducer: {
    app: AppSlice,
    auth: AuthSlice,
    game: GameCreatingSlice,
    games: GamesSlice,
    chats: ChatsSlice,
    teams: TeamSlice,
    mafia: MafiaSlice,
    alias: AliasSlice,
  },
})

export default store
