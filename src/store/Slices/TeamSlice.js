import { createSlice } from '@reduxjs/toolkit'
import { Platform } from 'react-native'
import axiosInstance from '../Api'
const initialState = {
  teamChatsList: [],
  findedTeam: [],
  members: [],
  findedGames: [],
  findedPlayers: [],
  savedTeam: null,
}
export const TeamSlice = createSlice({
  name: 'teamSlice',
  initialState,
  reducers: {
    setTeamChats: (store, action) => {
      return {
        ...store,
        teamChatsList: action.payload,
      }
    },
    setFindedTeam: (store, action) => {
      return {
        ...store,
        findedTeam: action.payload,
      }
    },
    setFindedGames: (store, action) => {
      return {
        ...store,
        findedGames: action.payload,
      }
    },
    setMembersInTeam: (store, action) => {
      return {
        ...store,
        members: action.payload,
      }
    },
    saveTeamDataForCreating: (store, action) => {
      return {
        ...store,
        savedTeam: action.payload,
      }
    },
    setFindedPlayers: (store, action) => {
      return {
        ...store,
        findedPlayers: action.payload,
      }
    },
  },
})
export const getTeams = (setModalVisible = () => {}) => dispatch => {
  axiosInstance
    .get('api/team/')
    .then(response => {
      if (response?.data?.datas?.length) {
        dispatch(setTeamChats(response?.data?.datas))
        setModalVisible && setModalVisible(false)
      } else {
        setModalVisible && setModalVisible(true)
      }
    })
    .catch(err => {
      setModalVisible && setModalVisible(true)
      console.log('Error getting team chats', err)
    })
}
export const searchPlayer = url => dispatch => {
  axiosInstance
    .get(`/api/team/find/user/${url}`)
    .then(response => {
      dispatch(setFindedPlayers(response.data))
    })

    .catch(err => {
      console.log('Error finding player', err)
    })
}
export const searchTeam = (teamId, isEmpty = () => {}, nav) => async dispatch => {
  console.log(teamId)
  axiosInstance
    .get(`api/team/${teamId}`)
    .then(async response => {
      if (response.data?.data) {
        isEmpty(false)
        await dispatch(setFindedTeam([response.data?.data]))

        nav?.navigate('TeamSearchRes')
      }
    })
    .catch(err => {
      dispatch(setFindedTeam([]))
      isEmpty(true)
      console.log('Error searching team', err)
    })
}
export const getMembersList = teamId => async dispatch => {
  axiosInstance
    .get(`api/team/players/${teamId}`)
    .then(response => {
      dispatch(setMembersInTeam(response.data.datas))
    })
    .catch(err => {
      console.log('Error searching players in this team :', err)
    })
}
export const joinGame = (gameId, nav, setError, setModalVisible) => async dispatch => {
  axiosInstance
    .post(`api/participate/${gameId}`)
    .then(response => {
      if (response.data.message !== 'Success') {
        setError(response.data.message)
        setModalVisible(true)
      } else {
        setModalVisible(false), nav.navigate('Home')
      }
    })
    .catch(err => {
      console.log('Error joining to game :', err)
    })
}
export const joinInTeam = (teamId, setModalVisible, nav) => async dispatch => {
  console.log(teamId)
  axiosInstance
    .post(`api/team/players/${teamId}`)
    .then(response => {
      console.log('response :', response)
      setModalVisible(true)
      nav.navigate('Home')
    })
    .catch(err => {
      console.log('Error joining to team :', err)
    })
}
export const searchGame = (data, nav, setError) => async dispatch => {
  let price = data.getAll('price')
  let game_of_your_choice = data.getAll('game_of_your_choice')
  let longitude = data.getAll('longitude')
  let latitude = data.getAll('latitude')
  let dateFrom = data.getAll('dateFrom')
  let dateTo = data.getAll('dateTo')
  let place = latitude[0] && longitude[0] ? `&longitude=${longitude}&latatude=${latitude}` : ''
  let dates = dateFrom && dateTo ? `date_from=${dateFrom}&date_to=${dateTo}` : ''
  let gameIds = data.getAll('ids')
  let gameIdsForLink = gameIds[0].map(elm => `games[]=${elm}&`).join('')
  let link = `api/create/game/?${dates}&price=${price}&game_of_your_choice=${game_of_your_choice}${place}/${gameIdsForLink}`
  console.log(link.slice(0, link.length - 1))
  axiosInstance
    .get(link.slice(0, link.length - 1))
    .then(response => {
      console.log(JSON.stringify(response?.data?.datas, null, 5))
      dispatch(setFindedGames(response?.data?.datas))
      if (response?.data?.datas.length) {
        nav.navigate('GameList')
      } else {
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 2500)
      }
    })
    .catch(err => {
      console.log('Error searching players in this team :', err?.message)
    })
}

export const createTeam = (data, token, setModalVisible = () => {}) => {
  // console.log(data, token)
  let myHeaders = new Headers()
  myHeaders.append('Content-Type', 'multipart/form-data')
  myHeaders.append('Authorization', `Bearer ${token}`)
  myHeaders.append('Accept', 'application/json')

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: data,
  }
  fetch(`${Platform.OS == 'ios' ? 'https' : 'http'}://to-play.ru/api/team`, requestOptions)
    .then(response => {
      setModalVisible(true)
      // console.log(response)
    })
    .catch(err => {
      console.log('Error creating team :', err)
    })
}
export const {
  setTeamChats,
  saveTeamDataForCreating,
  setFindedTeam,
  setMembersInTeam,
  setFindedGames,
  setFindedPlayers,
} = TeamSlice.actions
export default TeamSlice.reducer
