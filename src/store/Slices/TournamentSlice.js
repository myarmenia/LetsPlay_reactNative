import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: 'string',
  description: 'string',
  game_name: 'string',
  game_description: 'string',
  team_tourney: true,
  start_date: '2023-04-25T12:18:05.599Z',
  end_search_date: '2023-04-25T12:18:05.599Z',
  prize_fund: true,
  organizer_status: true,
  ticket_price: 0,
  number_of_participants_from: 0,
  number_of_participants_to: 0,
  age_restrictions_from: 0,
  age_restrictions_to: 0,
  players_gender: 'm',
  number_of_teams_from: 0,
  number_of_teams_to: 0,
  address_name: 'string',
  latitude: 0,
  longitude: 0,
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
    setStartDate: (store, action) => {
      return {
        ...store,
        start_date: action.payload,
      }
    },
    setEndDate: (store, action) => {
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
    setAddressName: (store, action) => {
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
export const {
  setEndDate,
  setGameName,
  setLatitude,
  setStartDate,
  setLongitude,
  setTeamTourney,
  setDescription,
  setTicketPrice,
  setAddressName,
  setPlayersGender,
  setTournamentName,
  setTournamentFund,
  setGameDescription,
  setOrganizerStatus,
  setNumberOfTeamsTo,
  setNumberOfTeamsFrom,
  setAgeRestrictionsTo,
  setAgeRestrictionsFrom,
  setNumberOfParticipantsTo,
  setNumberOfParticipantsFrom,
} = TournamentSlice.actions
export default TournamentSlice.reducer
