import AsyncStorage from '@react-native-async-storage/async-storage'
import messaging from '@react-native-firebase/messaging'
import PushNotification from 'react-native-push-notification'

const requestUserPermission = async (openModalFunc) => {
  const authStatus = await messaging().requestPermission()
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL
  if (enabled) {
    getFcmToken(openModalFunc)
  }
}
const notificationListener = async (openModalFunc, callBack) => {
  messaging().onNotificationOpenedApp((remoteMessage) => {
  })
  messaging().setBackgroundMessageHandler(async (remoteMessage) => {

    PushNotification.setApplicationIconBadgeNumber(
      PushNotification.getApplicationIconBadgeNumber() + 1,
    )
  })

  messaging().onMessage(async (remoteMessage) => {
    callBack()
    if (Platform.OS == 'android') {
      openModalFunc(
        remoteMessage.notification.title + '\n' + remoteMessage.notification.body,
        'message',
      )
    }
  })
  messaging().getInitialNotification()
    
}
const getFcmToken = async (openModalFunc) => {
  try {
    const token = await AsyncStorage.getItem('fcmToken')
    // await messaging().registerDeviceForRemoteMessages()
    if (!token) {
      let fcmToken = await messaging().getToken()
      if (fcmToken) {
        await AsyncStorage.setItem('fcmToken', fcmToken)
      }
    }
  } catch (error) {
    // alert('Error in notification service')
    openModalFunc('Error in notification service', 'error')
  }
}

export { requestUserPermission, notificationListener, getFcmToken }
