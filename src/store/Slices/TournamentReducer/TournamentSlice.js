import { createSlice } from '@reduxjs/toolkit'
import {
  searchTourney,
  createTourney,
  joinPlayer,
  joinTeam,
  getTourneyChats,
  confirmJoin,
  rejectJoin
}
  from './TournamentApies'
import { tournirData } from './info'


const initialState = {
  singleTournir: tournirData,
  needToEdit: false,
  chats: [],
  choosenTournir: {},
  tournamentList: [],
  selectedTeam: {},
  joinStatus: null,
  joinedTeamInfo: {},
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
    addTournamentInfo: (state, action) => {
      state.singleTournir = { ...state.singleTournir, ...action.payload }
    },
    addTournamentGameInfo: (state, action) => {
      state.singleTournir.game = action.payload._id
      state.singleTournir.imagePath = action.payload.img
      state.singleTournir.tournamentGameType = action.payload.name
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
    },
    addSelectedTeam: (state, action) => {
      state.selectedTeam = action.payload
    },
    setJoinedTeamInfo: (state, action) => {
      state.joinedTeamInfo = action.payload
    }

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

    builder.addCase(getTourneyChats.rejected, (state, action) => {
      state.loading = false
      state.rejected = false
    })
    builder.addCase(getTourneyChats.pending, (state) => {
      state.loading = true
      state.rejected = false

    })
    builder.addCase(getTourneyChats.fulfilled, (state, action) => {
      state.loading = false
      state.rejected = false
      state.chats = action.payload.datas
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
  setJoinedTeamInfo
} = TournamentSlice.actions
export default TournamentSlice.reducer
