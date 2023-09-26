import { createSlice } from '@reduxjs/toolkit'
import { searchTourney, createTournament } from './TournamentApies'

const initialState = {
  // տուրնիրի տիպ
  tournamentGameType: null,

  imagePath: null,

  // տուրնիրի անուն  
  name: null,

  // տուրնիրի նկարագրություն
  description: null,

  // տուրնիրի ֆորմատ
  team_tourney: null,



  // === menak svoya igrai jamanakan
  // game_description: '',
  // ====
  // start_date: new Date().toLocaleDateString(),
  // end_search_date: new Date().toLocaleDateString(),
  // prize_fund: true,
  // organizer_status: true,
  ticket_price: 0,
  findedTourney: [],

  // number_of_teams_from: 0,
  // number_of_teams_to: 0,
  // address_name: '',
  // latitude: 0,
  // longitude: 0,
  // game_name: 'string',
  // petqa menak ind i vaxt
  // number_of_participants_from: 0,
  // number_of_participants_to: 0,
  // age_restrictions_from: 0,
  // age_restrictions_to: 0,
  // players_gender: 'm',
  loading: false,
  error: false
}
const TournamentSlice = createSlice({
  name: 'tournament',
  initialState,
  reducers: {
    setTourneyInfo: (store, action) => {
      store.name = action.payload.name
      store.description = action.payload.description
      store.team_tourney = action.payload.team_tourney
    },


    // setGameName: (store, action) => {
    //   return {
    //     ...store,
    //     game_name: action.payload,
    //   }
    // },
    setTournamentImagePath: (store, action) => {
      store.imagePath = action.payload
    },
    setTournamentGameType: (store, action) => {
      return {
        ...store,
        tournamentGameType: action.payload,
      }
    },
    // setTourStartDate: (store, action) => {
    //   return {
    //     ...store,
    //     start_date: action.payload,
    //   }
    // },
    // setTourEndDate: (store, action) => {
    //   return {
    //     ...store,
    //     end_search_date: action.payload,
    //   }
    // },
    // setTournamentFund: (store, action) => {
    //   return {
    //     ...store,
    //     prize_fund: action.payload,
    //   }
    // },
    // setOrganizerStatus: (store, action) => {
    //   return {
    //     ...store,
    //     organizer_status: action.payload,
    //   }
    // },
    // setTicketPrice: (store, action) => {
    //   return {
    //     ...store,
    //     ticket_price: action.payload,
    //   }
    // },
    // setNumberOfParticipantsFrom: (store, action) => {
    //   return {
    //     ...store,
    //     number_of_participants_from: action.payload,
    //   }
    // },
    // setNumberOfParticipantsTo: (store, action) => {
    //   return {
    //     ...store,
    //     number_of_participants_to: action.payload,
    //   }
    // },
    // setAgeRestrictionsFrom: (store, action) => {
    //   return {
    //     ...store,
    //     age_restrictions_from: action.payload,
    //   }
    // },
    // setAgeRestrictionsTo: (store, action) => {
    //   return {
    //     ...store,
    //     age_restrictions_to: action.payload,
    //   }
    // },
    // setPlayersGender: (store, action) => {
    //   return {
    //     ...store,
    //     players_gender: action.payload,
    //   }
    // },
    // setNumberOfTeamsFrom: (store, action) => {
    //   return {
    //     ...store,
    //     number_of_teams_from: action.payload,
    //   }
    // },
    // setFindedTouney: (store, action) => {
    //   return {
    //     ...store,
    //     findedTourney: action.payload,
    //   }
    // },
    // setNumberOfTeamsTo: (store, action) => {
    //   return {
    //     ...store,
    //     number_of_teams_to: action.payload,
    //   }
    // },
    // setAddressNameTour: (store, action) => {
    //   return {
    //     ...store,
    //     address_name: action.payload,
    //   }
    // },
    // setLatitude: (store, action) => {
    //   return {
    //     ...store,
    //     latitude: action.payload,
    //   }
    // },
    // setLongitude: (store, action) => {
    //   return {
    //     ...store,
    //     longitude: action.payload,
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(createTournament.pending, (state, action) => {
      state.loading = true
      state.error = false
    })
    builder.addCase(createTournament.rejected, (state, action) => {
      state.loading = false
      state.rejected = true
    })
    builder.addCase(createTournament.fulfilled, (state, action) => {
      state.loading = false
      state.rejected = false
      state.data = action.payload
    })
  }
})




export const clearTournamentData = () => (dispatch) => {
  dispatch(setTeamTourney(false))
  dispatch(setTourStartDate(new Date().toLocaleDateString()))
  dispatch(setTourEndDate(new Date().toLocaleDateString()))
  dispatch(setTournamentFund(false))
  dispatch(setOrganizerStatus(true))
  dispatch(setAddressNameTour(''))
  dispatch(setLongitude(''))
  dispatch(setLatitude(''))
  dispatch(setNumberOfParticipantsFrom(null))
  dispatch(setNumberOfParticipantsTo(null))
}

export const {
  setTourneyInfo,
  // setGameName,
  // setLatitude,
  // setLongitude,
  // setClearData,
  // setTeamTourney,
  // setTourEndDate,
  // setTicketPrice,
  // setFindedTouney,
  // setPlayersGender,
  // setTourStartDate,
  // setTournamentFund,
  // setGameDescription,
  // setOrganizerStatus,
  // setNumberOfTeamsTo,
  // setAddressNameTour,
  // setNumberOfTeamsFrom,
  // setAgeRestrictionsTo,
  setTournamentGameType,
  setTournamentImagePath,
  // setAgeRestrictionsFrom,
  // setNumberOfParticipantsTo,
  // setNumberOfParticipantsFrom,
} = TournamentSlice.actions
export default TournamentSlice.reducer
