import { createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../Api'

const initialState = {
  // name: '',
  // description: '',
  // === menak svoya igrai jamanakan
  // game_description: '',
  // ====
  // team_tourney: true,
  // start_date: new Date().toLocaleDateString(),
  // end_search_date: new Date().toLocaleDateString(),
  // prize_fund: true,
  // organizer_status: true,
  // ticket_price: 0,
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
}
const TournamentSlice = createSlice({
  name: 'tournament',
  initialState,
  reducers: {
    setTournamentName: (store, action) => {
      return {
        ...store,
        name: action.payload,
      }
    },
    setDescription: (store, action) => {
      return {
        ...store,
        description: action.payload,
      }
    },
    setGameName: (store, action) => {
      return {
        ...store,
        game_name: action.payload,
      }
    },
    setGameDescription: (store, action) => {
      return {
        ...store,
        game_description: action.payload,
      }
    },
    setTeamTourney: (store, action) => {
      return {
        ...store,
        team_tourney: action.payload,
      }
    },
    setTourStartDate: (store, action) => {
      return {
        ...store,
        start_date: action.payload,
      }
    },
    setTourEndDate: (store, action) => {
      return {
        ...store,
        end_search_date: action.payload,
      }
    },
    setTournamentFund: (store, action) => {
      return {
        ...store,
        prize_fund: action.payload,
      }
    },
    setOrganizerStatus: (store, action) => {
      return {
        ...store,
        organizer_status: action.payload,
      }
    },
    setTicketPrice: (store, action) => {
      return {
        ...store,
        ticket_price: action.payload,
      }
    },
    setNumberOfParticipantsFrom: (store, action) => {
      return {
        ...store,
        number_of_participants_from: action.payload,
      }
    },
    setNumberOfParticipantsTo: (store, action) => {
      return {
        ...store,
        number_of_participants_to: action.payload,
      }
    },
    setAgeRestrictionsFrom: (store, action) => {
      return {
        ...store,
        age_restrictions_from: action.payload,
      }
    },
    setAgeRestrictionsTo: (store, action) => {
      return {
        ...store,
        age_restrictions_to: action.payload,
      }
    },
    setPlayersGender: (store, action) => {
      return {
        ...store,
        players_gender: action.payload,
      }
    },
    setNumberOfTeamsFrom: (store, action) => {
      return {
        ...store,
        number_of_teams_from: action.payload,
      }
    },
    setNumberOfTeamsTo: (store, action) => {
      return {
        ...store,
        number_of_teams_to: action.payload,
      }
    },
    setAddressNameTour: (store, action) => {
      return {
        ...store,
        address_name: action.payload,
      }
    },
    setLatitude: (store, action) => {
      return {
        ...store,
        latitude: action.payload,
      }
    },
    setLongitude: (store, action) => {
      return {
        ...store,
        longitude: action.payload,
      }
    },
  },
})
export const createTournament = (data) => (dispatch) => {
  axiosInstance
    .post('api/tourney/', data)
    .then((response) => {
      console.log('response -------', JSON.stringify(response))
    })
    .catch((err) => console.log('Error creating tournament', err.request))
}
export const clearTournamentData = () => (dispatch) => {
  dispatch(setTournamentName(''))
  dispatch(setTeamTourney(false))
  dispatch(setTourStartDate(new Date().toLocaleDateString()))
  dispatch(setTourEndDate(new Date().toLocaleDateString()))
  dispatch(setTournamentFund(false))
  dispatch(setOrganizerStatus(true))
  dispatch(setAddressNameTour(''))
  dispatch(setLongitude(''))
  dispatch(setLatitude(''))
}

export const {
  setGameName,
  setLatitude,
  setLongitude,
  setClearData,
  setTeamTourney,
  setTourEndDate,
  setDescription,
  setTicketPrice,
  setPlayersGender,
  setTourStartDate,
  setTournamentName,
  setTournamentFund,
  setGameDescription,
  setOrganizerStatus,
  setNumberOfTeamsTo,
  setAddressNameTour,
  setNumberOfTeamsFrom,
  setAgeRestrictionsTo,
  setAgeRestrictionsFrom,
  setNumberOfParticipantsTo,
  setNumberOfParticipantsFrom,
} = TournamentSlice.actions
export default TournamentSlice.reducer
