
import AsyncStorage from '@react-native-async-storage/async-storage'
import messaging from '@react-native-firebase/messaging'



const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission()
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL

  if (enabled) {
    // console.log('Authorization status:', authStatus)
    getFcmToken()
  }
}
const notificationListener= async (callBack) => {
  messaging().onNotificationOpenedApp((remoteMessage) => {
    console.log('Notification caused app to open from background state:', remoteMessage)
  })
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
       });
  
  messaging().onMessage(async (remoteMessage) => {
    console.log('Recived in foreground', remoteMessage)

    if(Platform.OS == "android") {
      console.log("callBack")
      callBack(remoteMessage.notification.title + "\n" + remoteMessage.notification.body)
    }
  })
  messaging()
    .getInitialNotification()
    .then((remoteMessage) => {
      if (remoteMessage) {
        console.log('Notification caused app to open from quit state:', remoteMessage.notification)
      }
    })
}
const getFcmToken = async () => {
  const fcmToken = await AsyncStorage.getItem('fcmToken')
  // console.log('The old generated fcmToken', fcmToken)
  if (!fcmToken) {
    try {
      let fcmToken = await messaging().getToken()
      if (fcmToken) {
        // console.log('The new generated fcmToken', fcmToken)
        await AsyncStorage.setItem('fcmToken', fcmToken)
      }
    } catch (error) {
      console.log('Error rasied in fcmToken', error)
      alert('Error in notification service')
    }
  }
}



export { requestUserPermission,notificationListener,  getFcmToken }
