import { IS_IOS } from '@/constants'
import { createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../Api'
const initialState = {
  teamChatsList: [],
  findedTeam: [],
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
  },
})
export const getTeams = () => async (dispatch) => {
  axiosInstance
    .get('api/team/')
    .then((response) => {
      dispatch(setTeamChats(response.data.datas))
    })
    .catch((err) => {
      console.log('error getting team chats', err)
    })
}
export const searchTeam = (teamId) => async (dispatch) => {
  axiosInstance
    .get(`api/team/${teamId}`)
    .then((response) => {
      if (response.data?.data) dispatch(setFindedTeam([response.data?.data]))
    })
    .catch((err) => {
      dispatch(setFindedTeam([]))
      console.log('error searching team', err)
    })
}

export const createTeam = (data, token) => {
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
    .then((response) => {
      // console.log(response)
    })
    .catch((err) => {
      console.log('err creating team', err)
    })
}
export const { setTeamChats, setFindedTeam } = TeamSlice.actions
export default TeamSlice.reducer
