import { createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../Api'
import PushNotification from 'react-native-push-notification'

const initialState = {
  notifications: [],
  calendarGames: [],
  modalOptions: {
    type: null,
    body: null,
    visible: false,
  },
  userGalleries: [],
  notificationCount: null,
  messagesCount: null,
  otherUserGalleries: [],
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
    clearCalendarGames: (store) => {
      return {
        ...store,
        calendarGames: [],
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
    setNotificationCount: (store, action) => {
      return {
        ...store,
        notificationCount: action.payload,
      }
    },
    setMessagesCount: (store, action) => {
      return {
        ...store,
        messagesCount: action.payload,
      }
    },
    setOtherUserGalleries: (store, action) => {
      return {
        ...store,
        otherUserGalleries: action.payload,
      }
    },
    changeSingleNotification: (store, action) => {
      const index = store.notifications.findIndex((i) => i._id === action.payload._id)
      store.notifications[index] = action.payload
    },
  },
})

export const notificationSettings = (data) => (dispatch) => {
  axiosInstance
    .post('api/profile/notification', data)
    .then((response) => {
    })
    .catch((err) => {
      console.error('Error: request notification', err.request?._response)
    })
}
export const calendarSettings = (data) => (dispatch) => {
  axiosInstance
    .post('api/profile/chat/settings', data)
    .then((response) => { })
    .catch((err) => {
      console.error('Error: request notification', err.request?._response)
    })
}
export const notificationButtonClciked = (notification_id) => (dispatch) => {
  axiosInstance
    .put(`/api/notification/click/${notification_id}`)
    .then((res) => {
      dispatch(changeSingleNotification(res.data.data))
    })
    .catch((err) => {
      console.error('Error: request notification', err.request?._response)
    })
}

export const getNotifications = () => (dispatch) => {
  axiosInstance
    .get('api/notification')
    .then((response) => {
      dispatch(setNotifications(response.data?.datas))
    })
    .catch((err) => {
    })
}
export const deleteNotification = (id) => (dispatch) => {
  axiosInstance.delete(`api/notification/${id}`).catch((err) => {
    console.error('Error: request notification', err.request?._response)
  })
}
export const deleteAllNotifications = () => (dispatch) => {
  axiosInstance
    .delete('api/notification')
    .then(() => {
      PushNotification.setApplicationIconBadgeNumber(0)
      dispatch(setNotifications([]))
    })
    .catch((err) => {
      console.error('Error: request notification', err.request?._response)
    })
}

export const getCalendarGames = (data) => (dispatch) => {
  axiosInstance
    .get('api/create/game/by/date', {
      params: data,
    })
    .then((response) => {
      dispatch(
        setCalendarGames([
          ...response.data.datas.games,
          ...response.data.datas.teamGames,
          ...response.data.datas.tourneys,
        ]),
      )
    })
    .catch((err) => {
      console.error('Error: request notification', err)
    })
}
export const getGalleries = () => (dispatch) => {
  axiosInstance
    .get('api/user/user_game_files')
    .then((response) => {
      dispatch(setUserGalleries(response.data.data))
    })
    .catch((err) => {
      console.error('Error: request notification', err.request?._response)
    })
}
export const getOtherUserGalleries = (user_id) => (dispatch) => {
  axiosInstance
    .get(`api/user/other_user_game_files/${user_id}`)
    .then((response) => {
      dispatch(setOtherUserGalleries(response.data.data))
    })
    .catch((err) => {
      console.error('Error: getOtherUserGalleries', err.request?._response)
    })
}

export const deleteGalleryFile = (data) => (dispatch) => {
  axiosInstance
    .put('api/create/game/delete/create_game_file', data)
    .then((res) => {
      console.log(res, 'res');
      dispatch(setDeleteGalleryFile(data.file_id))
    })
    .catch((err) => {

      console.error(err, 'Error',)
    })
}

export const deleteGaleryTeamCreateGameFile = (data) => (dispatch) => {
  axiosInstance
    .put('api/team/create/game/delete/team_create_game_file', data)
    .then((res) => {
      dispatch(setDeleteGalleryFile(data.file_id))
    })
    .catch((err) => {
      console.error(err, 'Error',)
    })
}
export const getNotificationCount = (data) => (dispatch) => {
  axiosInstance
    .get('api/notification/unread', data)
    .then((response) => {
      PushNotification.setApplicationIconBadgeNumber(response.data.count)
      dispatch(setNotificationCount(response.data.count))
    })
    .catch((err) => {
      console.error('Error: request notification', err.request?._response)
    })
}
export const getMessagesCount = () => (dispatch) => {
  axiosInstance
    .get('api/create/game/chat/messages/un_read_count')
    .then((response) => {
      dispatch(setMessagesCount(response.data.count))
    })
    .catch((err) => {
      console.error('Error: getMessagesCount', err.request?._response)
    })
}

export const {
  setNotifications,
  setCalendarGames,
  setModalOptions,
  setModalVisible,
  setUserGalleries,
  setDeleteGalleryFile,
  setNotificationCount,
  setMessagesCount,
  setOtherUserGalleries,
  clearCalendarGames,
  changeSingleNotification,
} = AppSlice.actions
export default AppSlice.reducer
