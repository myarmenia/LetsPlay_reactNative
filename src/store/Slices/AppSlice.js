import { createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../Api'

const initialState = {
  notifications: [],
  calendarGames: [],
  modalOptions: {
    type: null,
    body: null,
    visible: false,
  },
  userGalleries: [],
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
    setModalOptions: (store, action) => {
      return {
        ...store,
        modalOptions: action.payload,
      }
    },
    setModalVisible: (store, action) => {
      return {
        ...store,
        modalOptions: {
          ...store.modalOptions,
          visible: action.payload,
        },
      }
    },
    setUserGalleries: (store, action) => {
      return {
        ...store,
        userGalleries: action.payload,
      }
    },
    setDeleteGalleryFile: (store, action) => {
      const newUserGalleries = store.userGalleries.filter((item) => {
        return item?._id !== action.payload
      })
      return {
        ...store,
        userGalleries: newUserGalleries,
      }
    },
  },
})

export const notificationSettings = (e) => (dispatch) => {
  if (e.checked) {
    axiosInstance
      .post('api/profile/notification', JSON.stringify({ name: e?.label }))
      .then((response) => {})
      .catch((err) => {
        console.log('err request notification', err)
      })
  }
}
export const notificationButtonClciked = (notification_id) => (dispatch) => {
  axiosInstance.put(`/api/notification/click/${notification_id}`).catch((err) => {
    console.log('err request notification', err)
  })
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
    .then((response) => {})
    .catch((err) => {
      console.log('err request notification', err)
    })
}
export const deleteAllNotifications = () => (dispatch) => {
  axiosInstance
    .delete('api/notification')
    .then((response) => {
      dispatch(setNotifications([]))
    })
    .catch((err) => {
      console.log('err request notification', err)
    })
}

export const getCalendarGames = (data) => (dispatch) => {
  axiosInstance
    .get('api/create/game/by_date', {
      params: {
        date_from: data.date_from,
        date_to: data.date_to,
      },
    })
    .then((response) => {
      dispatch(setCalendarGames(response.data.datas))
    })
    .catch((err) => {
      console.log('err request notification', err)
    })
}
export const getGalleries = () => (dispatch) => {
  axiosInstance
    .get('api/user/user_game_files')
    .then((response) => {
      dispatch(setUserGalleries(response.data.data))
    })
    .catch((err) => {
      console.log('err request notification', err)
    })
}
export const deleteGalleryFile = (data) => (dispatch) => {
  axiosInstance
    .put('api/create/game/delete/create_game_file', data)
    .then((response) => {
      dispatch(setDeleteGalleryFile(data.file_id))
    })
    .catch((err) => {
      console.log('err request notification', err)
    })
}

export const {
  setNotifications,
  setCalendarGames,
  setModalOptions,
  setModalVisible,
  setUserGalleries,
  setDeleteGalleryFile,
} = AppSlice.actions
export default AppSlice.reducer
