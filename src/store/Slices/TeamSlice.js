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
  betweenPlayers: false,
  choosedTeamGame: null,
  searchPending: false,
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
    setBetweenPlayers: (store, action) => {
      return {
        ...store,
        betweenPlayers: action.payload,
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
    setChoosedTeamGame: (store, action) => {
      return {
        ...store,
        choosedTeamGame: action.payload,
      }
    },
    setSearchPending: (store, action) => {
      return {
        ...store,
        searchPending: action.payload,
      }
    },
  },
})
export const getTeams = (setModalVisible) => (dispatch) => {
  axiosInstance
    .get('api/team/')
    .then((response) => {
      if (response?.data?.datas?.length) {
        dispatch(setTeamChats(response?.data?.datas))
        setModalVisible && setModalVisible(false)
      } else {
        setModalVisible && setModalVisible(true)
      }
    })
    .catch((err) => {
      setModalVisible && setModalVisible(true)
      console.log('Error getting team chats', err)
    })
}
export const searchPlayer = (data) => (dispatch) => {
  dispatch(setSearchPending(true))
  axiosInstance
    .get(`/api/team/find/user/`, { params: data })
    .then((response) => {
      dispatch(setFindedPlayers(response.data.users))
      dispatch(setSearchPending(false))
    })

    .catch((err) => {
      console.log('Error finding player :', err)
      dispatch(setSearchPending(false))
    })
}
export const inviteUserToTeam = (data) => (dispatch) => {
  axiosInstance
    .patch('/api/team/invite', data)
    .then((e) => {
      console.log('inviteUserToTeam', e)
    })

    .catch((err) => {
      console.log('Error inviting player :', err)
    })
}
export const setPlayerAdmin = (data) => (dispatch) => {
  axiosInstance.patch('/api/team/become_admin', data).catch((err) => {
    console.log('Error set user admin :', err)
  })
}
export const deletePlayerFromTeam = (data) => (dispatch) => {
  console.log('data :', data)
  axiosInstance
    .delete('/api/team/players', data)
    .then((response) => {})
    .catch((err) => {
      console.log('Error delete user from team :', err)
    })
}
export const searchTeam =
  (teamId, isEmpty = () => {}, nav, navText, sendingData) =>
  async (dispatch) => {
    axiosInstance
      .get(`api/team?id_or_name=${teamId}`)
      .then(async (response) => {
        if (response?.data?.datas?.length) {
          await dispatch(setFindedTeam(response.data?.datas))
          nav.navigate(navText, sendingData ? sendingData : null)
          isEmpty(false)
        } else {
          isEmpty(true)
        }
      })
      .catch((err) => {
        dispatch(setFindedTeam([]))
        isEmpty(true)
        console.log('Error searching team', err)
      })
  }
export const getMembersList = (teamId) => async (dispatch) => {
  axiosInstance.get(`api/team/players/${teamId}`).catch((err) => {
    console.log('Error searching players in this team :', err)
  })
}
export const joinGame = (gameId, nav, setError, setModalVisible) => async (dispatch) => {
  axiosInstance
    .post(`api/participate/${gameId}`)
    .then((response) => {
      if (response.data.message !== 'Success') {
        setError(response.data.message)
        setModalVisible(true)
      } else {
        setModalVisible(false), nav.navigate('Home')
      }
    })
    .catch((err) => {
      console.log('Error joining to game :', err)
    })
}
export const joinInTeam = (teamId, setModalVisible) => async (dispatch) => {
  axiosInstance
    .put(`api/team/join_player`, { team_id: teamId })
    .then((response) => {
      setModalVisible(response.data.message)
    })
    .catch((err) => {
      console.log('Error joining to team :', err)
    })
}
export const searchGame = (data, nav, setError) => async (dispatch) => {
  let price = data.getAll('price')
  let game_of_your_choice = data.getAll('game_of_your_choice')
  let longitude = data.getAll('longitude')
  let latitude = data.getAll('latitude')
  let dateFrom = data.getAll('date_from')
  let dateTo = data.getAll('date_to')
  let place =
    latitude[0] && longitude[0] ? `&longitude=${longitude[0]}&latatude=${latitude[0]}` : ''
  let dates = dateFrom && dateTo ? `date_from=${dateFrom}&date_to=${dateTo}` : ''
  let gameIds = data.getAll('ids')
  let gameIdsForLink = gameIds[0].map((elm) => `games[]=${elm}&`).join('')
  let link = `api/create/game/?${dates}${price.length ? '&price=' + price[0] : ''}${
    game_of_your_choice.length ? '&game_of_your_choice=' + game_of_your_choice[0] : ''
  }${place}/${gameIdsForLink}`

  axiosInstance
    .get(link.slice(0, link.length - 1))

    .then((response) => {
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
    .catch((err) => {
      console.log('Error searching players in this team :', err?.message)
    })
}

export const createTeam = (data, token, setModalVisible = () => {}) => {
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
    .then((response) => {
      setModalVisible(true)
    })
    .catch((err) => {
      console.log('Error creating team :', err)
    })
}
export const createTeamGame = (data, setModalVisible) => (dispatch) => {
  axiosInstance
    .post('api/team/create/game', data)
    .then((response) => {
      setModalVisible([true, 'ok'])
    })
    .catch((err) => {
      setModalVisible([true, 'error'])
      console.log('Error creating game with team :', err.request)
    })
}
export const getMyTeams = (setModalVisible) => (dispatch) => {
  axiosInstance.get('/api/team/my_teams').then((response) => {
    if (response?.data?.datas?.length) {
      dispatch(setTeamChats(response?.data?.datas))
      setModalVisible && setModalVisible(false)
    } else {
      setModalVisible && setModalVisible(true)
    }
  })
}

export const {
  setTeamChats,
  saveTeamDataForCreating,
  setFindedTeam,
  setMembersInTeam,
  setFindedGames,
  setFindedPlayers,
  setBetweenPlayers,
  setChoosedTeamGame,
  setSearchPending,
} = TeamSlice.actions
export default TeamSlice.reducer
