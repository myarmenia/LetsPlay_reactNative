import { createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../Api'

const initialState = {
  notifications: [],
  calendarGames: [],
}

export const AliasSlice = createSlice({
  name: 'alias',
  initialState,
  reducers: {
    setNotifications: (store, action) => {
      return {
        ...store,
        notifications: action.payload,
      }
    },
    setCalendarGames: (store, action) => {
      return {
        ...store,
        calendarGames: action.payload,
      }
    },
  },
})

export const notificationSettings = (e) => (dispatch) => {
  if (e.checked) {
    axiosInstance
      .post('api/profile/notification', JSON.stringify({ name: e?.label }))
      .then((response) => {
        console.log(response.data)
      })
      .catch((err) => {
        console.log('err request notification', err)
      })
  } else {
    console.log(JSON.stringify({ name: e?.label }))
    // axiosInstance
    //   .delete('api/profile/notification', JSON.stringify({ name: e?.label }))
    //   .then((response) => {
    //     console.log(response.data)
    //   })
    //   .catch((err) => {
    //     console.log('err request notification', err)
    //   })
  }
}

export const getNotifications = () => (dispatch) => {
  axiosInstance
    .get('api/notification')
    .then((response) => {
      dispatch(setNotifications(response.data?.datas))
    })
    .catch((err) => {
      console.log('err request notification', err)
    })
}
export const deleteNotification = (id) => (dispatch) => {
  axiosInstance
    .delete(`api/notification/${id}`)
    .then((response) => {
      console.log(response.data)
    })
    .catch((err) => {
      console.log('err request notification', err)
    })
}
export const deleteAllNotifications = () => (dispatch) => {
  axiosInstance
    .delete('api/notification')
    .then((response) => {
      dispatch(setNotifications([]))
      console.log(response.data)
    })
    .catch((err) => {
      console.log('err request notification', err)
    })
}

export const getCalendarGames = (data) => (dispatch) => {
  axiosInstance
    .get('api/create/game', data)
    .then((response) => {
      dispatch(setCalendarGames(response.data.datas))
    })
    .catch((err) => {
      console.log('err request notification', err)
    })
}

export const { setNotifications, setCalendarGames } = AliasSlice.actions
export default AliasSlice.reducer
