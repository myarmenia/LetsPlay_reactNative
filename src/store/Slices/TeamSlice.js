import { IS_IOS } from '@/constants'
import { createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../Api'
const initialState = {
  teamChatsList: [],
  findedTeam: [],
  members: [],
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
    setMembersInTeam: (store, action) => {
      return {
        ...store,
        members: action.payload,
      }
    },
  },
})
export const getTeams = setModalVisible => async dispatch => {
  axiosInstance
    .get('api/team/')
    .then(response => {
      if (response?.data?.datas?.length) {
        dispatch(setTeamChats(response?.data?.datas))
        setModalVisible(false)
      } else {
        setModalVisible(true)
      }
    })
    .catch(err => {
      setModalVisible(true)
      console.log('error getting team chats', err)
    })
}
export const searchTeam = (teamId, isEmpty, nav) => async dispatch => {
  axiosInstance
    .get(`api/team/${teamId}`)
    .then(response => {
      if (response.data?.data) {
        isEmpty(false)
        dispatch(setFindedTeam([response.data?.data]))
        nav.navigate('TeamSearchRes')
      }
    })
    .catch(err => {
      dispatch(setFindedTeam([]))
      isEmpty(true)
      console.log('error searching team', err)
    })
}
export const getMembersList = teamId => async dispatch => {
  axiosInstance
    .get(`api/team/players/${teamId}`)
    .then(response => {
      // dispatch(setMembersInTeam(response.data))
    })
    .catch(err => {
      console.log('error searching players in this team :', err)
    })
}

export const createTeam = (data, token, setModalVisible) => {
  let myHeaders = new Headers()
  myHeaders.append('Content-Type', 'multipart/form-data')
  myHeaders.append('Authorization', `Bearer ${token}`)
  myHeaders.append('Accept', 'application/json')

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: data,
  }
  fetch(`${IS_IOS ? 'https' : 'http'}://to-play.ru/api/team`, requestOptions)
    .then(response => {
      setModalVisible(true)
      console.log(response)
    })
    .catch(err => {
      console.log('err creating team', err)
    })
}
export const { setTeamChats, setFindedTeam, setMembersInTeam } = TeamSlice.actions
export default TeamSlice.reducer
