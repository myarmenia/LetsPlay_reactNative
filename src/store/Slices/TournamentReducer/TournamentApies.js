import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '@/store/Api'

export const createTourney = createAsyncThunk('tournament/create', async (obj, { }) => {
  try {
    const data = await axiosInstance.post('api/tourney/', obj)
    return data
  } catch (error) {
  }
})

export const searchTourney = createAsyncThunk('tournament/search', async (obj, { }) => {
  try {
    const data = await axiosInstance.get('api/tourney', {
      params: obj,
    })
    return data
  } catch (error) {
  }
})

export const joinPlayer = createAsyncThunk(
  'tournament/individualJoin', async (id, { rejectWithValue }) => {
    try {
      const data = await axiosInstance.post(`api/tourney/players/participate/${id}`)
      return data
    } catch (error) {
      if (error.response.status = 400) {
        return rejectWithValue(error.response.data.message[0])
      }

    }
  }
)

export const confirmJoin = createAsyncThunk(
  'tournir/confirmJoinFromTeam',
  async (tourney_id) => {
    try {
      const data = await axiosInstance.post(`api/tourney/teams/player/confirm/${tourney_id}`)
      return data

    } catch (error) {

    }
  }
)

export const rejectJoin = createAsyncThunk(
  'tournir/rejectJoinFromTeam',
  async (tourney_id) => {
    try {
      const data = await axiosInstance.post(`api/tourney/teams/player/reject/${tourney_id}`)
      return data
    } catch (error) {
    }
  }
)



export const joinTeam = createAsyncThunk(
  'tournament/teamJoin',
  async (obj) => {
    try {
      const data = await axiosInstance.post('api/tourney/teams', obj)
      return data
    } catch (error) {
      if (error.response.status = 400) {
        return rejectWithValue(error.response.data.message[0])
      }
    }
  }
)















export const getTourneyChats = createAsyncThunk(
  'tournament/getChats',
  async () => {
    try {
      const data = await axiosInstance.get('api/tourney/all/touneys')
      return data.data
    } catch (error) {
      console.log(error, 'error');
    }
  }
)
