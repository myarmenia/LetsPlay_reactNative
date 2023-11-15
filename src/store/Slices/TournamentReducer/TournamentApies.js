import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '@/store/Api'

export const createTourney = createAsyncThunk('tournament/create', async (obj, { }) => {
  try {
    const data = await axiosInstance.post('api/tourney/', obj)
    return data
  } catch (error) {
    console.log(error, 'error');
  }
})

export const searchTourney = createAsyncThunk('tournament/search', async (obj, { }) => {
  try {
    const data = await axiosInstance.get('api/tourney', {
      params: obj,
    })
    return data
  } catch (error) { }
})


export const getSingleTournament = createAsyncThunk('tournament/getSingleTournire',
  async (id) => {
    try {
      const data = await axiosInstance.get(`api/tourney/${id}`)
      return data.data
    } catch (error) {
      console.log(error, 'error');

    }
  }
)

export const joinPlayer = createAsyncThunk(
  'tournament/individualJoin',
  async (id, { rejectWithValue }) => {
    try {
      const data = await axiosInstance.post(`api/tourney/players/participate/${id}`)
      return data
    } catch (error) {
      if ((error.response.status = 400)) {
        return rejectWithValue(error.response.data.message[0])
      }
    }
  },
)

export const confirmJoin = createAsyncThunk('tournir/confirmJoinFromTeam', async (tourney_id) => {
  try {
    const data = await axiosInstance.post(`api/tourney/teams/player/confirm/${tourney_id}`)
    return data
  } catch (error) { }
})

export const rejectJoin = createAsyncThunk('tournir/rejectJoinFromTeam', async (tourney_id) => {
  try {
    const data = await axiosInstance.post(`api/tourney/teams/player/reject/${tourney_id}`)
    return data
  } catch (error) { }
})

export const joinTeam = createAsyncThunk('tournament/teamJoin', async (obj) => {
  try {
    const data = await axiosInstance.post('api/tourney/teams', obj)
    return data
  } catch (error) {
    if ((error.response.status = 400)) {
      return rejectWithValue(error.response.data.message[0])
    }
  }
})



export const getAllChats = createAsyncThunk('tournament/getAllChats', async () => {
  try {
    const chats = await axiosInstance.get('api/create/game/to_play/allChats')
    return chats.data.datas
  } catch (error) {
    console.log(error, 'error')
  }
})


export const getTourneyChat = createAsyncThunk('tournament/getTourneyChat',
  async (id) => {
    try {
      const chat = await axiosInstance.get(`api/tourney/chat/${id}`)
      return chat.data

    } catch (error) {
      console.log(error, 'error');
    }
  })


export const sendTourneyMessage = createAsyncThunk('tournament/sendMessage',
  async (obj) => {
    try {
      const data = await axiosInstance.post('api/tourney/chat', obj)
      return data.data
    } catch (error) {
    }
  })


export const confirmQR = createAsyncThunk(
  'tournament/confirmQR',
  async (id) => {
    try {
      const data = await axiosInstance.put(`api/tourney/qr/confirm/${id}`)
      console.log(data, 'turniri qr@ exav');
      return data.data

    } catch (error) {
      console.log(error, 'error');
    }
  }
)


export const finishTournament = createAsyncThunk(
  'tournament/finishTournament',
  async (touney_id) => {
    try {
      const data = await axiosInstance.post(`api/tourney/player/end/${touney_id}`)
      return data.data

    } catch (error) {
      console.log(error, 'error');
    }
  }
)


export const getPlayers = createAsyncThunk(
  'tournament/getPlayers',
  async (id) => {
    try {
      const data = await axiosInstance.get(`api/tourney/myPlayers/${id}`)
      return data.data
    } catch (error) {
    }

  }
)

export const addTournamentRating = createAsyncThunk(
  'tournament/addTournamentRating',
  async (obj) => {
    try {
      const data = await axiosInstance.post('api/tourney/tourney_game/rating', obj)
      console.log(data, 'data');

    } catch (error) {

    }
  }
)


export const confirmImage = createAsyncThunk(
  'tournament/confirmImage',
  async (obj) => {
    try {
      const data = await axiosInstance.patch('api/tourney/impression-images/confirm', obj)
      console.log(data, 'data');
      return data

    } catch (error) {

    }
  }
)

export const rejectImage = createAsyncThunk(
  'tournament/rejectImage',
  async (obj) => {
    try {
      const data = await axiosInstance.put('api/tourney/impression-images/delete/tourney_file', obj)
      return data

    } catch (error) {

    }
  }
)

export const addToTeam = createAsyncThunk(
  'tournament/addToTeam',
  async (obj) => {
    try {
      const data = await axiosInstance.patch('api/team/invite', obj)
      return data.data

    } catch (error) {

    }
  }
)


export const rateOrganizerAfterTourney = createAsyncThunk(
  'tournament/rateOrganizerAfterTourney',
  async (obj) => {
    try {
      const data = await axiosInstance.post('api/tourney/tourney_game/organizer_rating', obj)
      return data.data
    } catch (error) {

    }

  }

)



























// /api/tourney/tourney_game/organizer_rating






