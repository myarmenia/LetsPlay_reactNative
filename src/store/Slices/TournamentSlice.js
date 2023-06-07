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
    setTournamentImagePath: (store, action) => {
      return {
        ...store,
        imagePath: action.payload,
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
    setTournamentGameType: (store, action) => {
      return {
        ...store,
        tournamentGameType: action.payload,
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
    setFindedTouney: (store, action) => {
      return {
        ...store,
        findedTourney: action.payload,
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
    .then((response) => {})
    .catch((err) => console.log('Error creating tournament', err.request))
}

export const searchTourney = (data, nav, setError, tourney) => async (dispatch) => {
  let price = data.getAll('price')
  let game_of_your_choice = data.getAll('game_of_your_choice')
  let longitude = data.getAll('longitude')
  let latitude = data.getAll('latitude')
  let dateFrom = data.getAll('date_from')
  let dateTo = data.getAll('date_to')
  let teamTourney = data.getAll('teamTourney')

  let place =
    latitude[0] && longitude[0] ? `&longitude=${longitude[0]}&latatude=${latitude[0]}` : ''
  let dates = dateFrom && dateTo ? `date_from=${dateFrom}&date_to=${dateTo}` : ''
  let gameIds = data.getAll('ids')
  let gameIdsForLink = gameIds[0].map((elm) => `games[]=${elm}&`).join('')
  let link = `api/tourney?price=${price[0]}&game_of_your_choice=${game_of_your_choice}&team_tourney=${teamTourney[0]}${place}${gameIdsForLink}`
  // price=false&game_of_your_choice=false&team_tourney=false&longitude=43.9722&latitude=44.237623

  axiosInstance
    .get(link.slice(0, link.length - 1))

    .then((response) => {
      dispatch(setFindedTouney(response?.data?.datas))
      if (response?.data?.datas.length) {
        nav.navigate('AllTournaments')
      } else {
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 2500)
      }
    })
    .catch((err) => {
      console.log('Error searching players in this team :', err.request._response)
    })
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
  setFindedTouney,
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
  setTournamentGameType,
  setTournamentImagePath,
  setAgeRestrictionsFrom,
  setNumberOfParticipantsTo,
  setNumberOfParticipantsFrom,
} = TournamentSlice.actions
export default TournamentSlice.reducer
