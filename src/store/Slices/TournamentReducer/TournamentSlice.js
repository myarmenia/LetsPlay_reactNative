import { createSlice } from '@reduxjs/toolkit'
import {
  searchTourney,
  getSingleTournament,
  createTourney,
  joinPlayer,
  joinTeam,
  getPlayers,
  getMyTeams
} from './TournamentApies'
import { tournirData } from './info'

const initialState = {
  singleTournir: tournirData,
  needToEdit: false,
  selectedTournament: {},
  choosenTournir: {},
  tournamentList: [],
  selectedTeam: {},
  joinStatus: null,
  joinedTeamInfo: {},
  mediaForTournament: false,
  tournamentFinishPhoto: null,
  playersForRating: null,
  myTeams: [],
  loading: false,
  error: false,
}

const TournamentSlice = createSlice({
  name: 'tournament',
  initialState,
  reducers: {
    setTourneyInfo: (state, action) => {
      state.singleTournir = { ...state.singleTournir, ...action.payload }
    },
    changeMediaForTournament: (state, action) => {
      state.mediaForTournament = action.payload
    },
    setFinishPhoto: (store, action) => {
      store.tournamentFinishPhoto = action.payload
    },
    addTournamentInfo: (state, action) => {
      state.singleTournir = { ...state.singleTournir, ...action.payload }
    },
    addTournamentGameInfo: (state, action) => {
      state.singleTournir.game = action.payload._id
      state.singleTournir.imagePath = action.payload.img
      state.singleTournir.tournamentGameType = action.payload.name
      state.singleTournir.gameInfo = action.payload
    },
    choosenTournir: (state, action) => {
      state.choosenTournir = action.payload
    },
    editTournametInfo: (state) => {
      state.needToEdit = true
    },
    resetSingleTournirData: (state) => {
      state.singleTournir = tournirData
      state.needToEdit = false
      state.joinedTeamInfo = {}
      state.choosenTournir = {}
      state.tournamentList = []
      state.selectedTeam = {}
      state.joinStatus = null
      state.joinedTeamInfo = {}
      state.mediaForTournament = false
      state.tournamentFinishPhoto = null
      state.playersForRating = null
    },
    addSelectedTeam: (state, action) => {
      state.selectedTeam = action.payload
    },
    addPlayerRating: (state, action) => {
      if (state.playersForRating.team_tourney) {
        const index = state.playersForRating?.teams[0]?.players.findIndex(item => item._id === action.payload.id)
        state.playersForRating.teams[0].players[index].rating = action.payload.rate
      } else {
        const index = state.playersForRating.players.findIndex(item => item._id === action.payload.id)
        state.playersForRating.players[index].rating = action.payload.rate
      }

    },
    setJoinedTeamInfo: (state, action) => {
      state.joinedTeamInfo = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createTourney.pending, (state, action) => {
      state.loading = true
      state.error = false
    })
    builder.addCase(createTourney.rejected, (state, action) => {
      state.loading = false
      state.rejected = true
    })
    builder.addCase(createTourney.fulfilled, (state, action) => {
      state.loading = false
      state.rejected = false
      state.singleTournir = action.payload.data.tourney
    })

    builder.addCase(searchTourney.pending, (state, action) => {
      state.loading = true
      state.error = false
    })
    builder.addCase(searchTourney.rejected, (state, action) => {
      state.loading = false
      state.rejected = true
    })
    builder.addCase(searchTourney.fulfilled, (state, action) => {
      state.loading = false
      state.rejected = false
      state.tournamentList = action.payload.data.datas
    })

    builder.addCase(joinPlayer.rejected, (state, action) => {
      state.loading = false
      state.rejected = false
      state.joinStatus = action.payload
    })
    builder.addCase(joinPlayer.pending, (state) => {
      state.loading = true
      state.rejected = false
    })
    builder.addCase(joinPlayer.fulfilled, (state, action) => {
      state.loading = false
      state.rejected = false
      state.joinStatus = action.payload.data.message
    })

    builder.addCase(joinTeam.rejected, (state, action) => {
      state.loading = false
      state.rejected = false
      state.joinStatus = action.payload
    })
    builder.addCase(joinTeam.pending, (state) => {
      state.loading = true
      state.rejected = false
    })
    builder.addCase(joinTeam.fulfilled, (state, action) => {
      state.loading = false
      state.rejected = false
      state.joinStatus = action.payload.data.message
    })
    builder.addCase(getSingleTournament.rejected, (state, action) => {
      state.loading = false
      state.rejected = true
    })
    builder.addCase(getSingleTournament.pending, (state, action) => {
      state.loading = true
      state.rejected = false
    })
    builder.addCase(getSingleTournament.fulfilled, (state, action) => {
      state.loading = false
      state.rejected = false
      state.selectedTournament = action.payload.data
    })
    builder.addCase(getPlayers.rejected, (state, action) => {
      state.loading = false
      state.rejected = true
    })
    builder.addCase(getPlayers.pending, (state, action) => {
      state.loading = true
      state.rejected = false
    })
    builder.addCase(getPlayers.fulfilled, (state, action) => {
      state.loading = false
      state.rejected = false
      state.playersForRating = action.payload.data
    })


    builder.addCase(getMyTeams.rejected, (state, action) => {
      state.loading = false
      state.rejected = true
    })
    builder.addCase(getMyTeams.pending, (state, action) => {
      state.loading = true
      state.rejected = false
    })
    builder.addCase(getMyTeams.fulfilled, (state, action) => {
      state.loading = false
      state.rejected = false
      state.myTeams = action.payload.datas
    })

  },
})

export const {
  setTourneyInfo,
  addTournamentGameInfo,
  addTournamentInfo,
  choosenTournir,
  editTournametInfo,
  resetSingleTournirData,
  addSelectedTeam,
  setJoinedTeamInfo,
  changeMediaForTournament,
  setFinishPhoto,
  addPlayerRating
} = TournamentSlice.actions
export default TournamentSlice.reducer
