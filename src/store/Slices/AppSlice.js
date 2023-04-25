import { createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../Api'

const initialState = {
  notifications: [],
  calendarGames: [],
}

export const AppSlice = createSlice({
  name: 'app',
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

export const notificationSettings = e => dispatch => {
  if (e.checked) {
    axiosInstance
      .post('api/profile/notification', JSON.stringify({ name: e?.label }))
      .then(response => {})
      .catch(err => {
        console.log('err request notification', err)
      })
  } else {
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

export const getNotifications = () => dispatch => {
  axiosInstance
    .get('api/notification')
    .then(response => {
      dispatch(setNotifications(response.data?.datas))
    })
    .catch(err => {
      console.log('err request notification', err)
    })
}
export const deleteNotification = id => dispatch => {
  axiosInstance
    .delete(`api/notification/${id}`)
    .then(response => {})
    .catch(err => {
      console.log('err request notification', err)
    })
}
export const deleteAllNotifications = () => dispatch => {
  axiosInstance
    .delete('api/notification')
    .then(response => {
      dispatch(setNotifications([]))
    })
    .catch(err => {
      console.log('err request notification', err)
    })
}

export const getCalendarGames = data => dispatch => {
  axiosInstance
    .get(`api/create/game/by_date?date_from=${data.date_from}&date_to=${data.date_to}`)
    .then(response => {
      dispatch(setCalendarGames(response.data.datas))
    })
    .catch(err => {
      console.log('err request notification', err)
    })
}

export const { setNotifications, setCalendarGames } = AppSlice.actions
export default AppSlice.reducer
