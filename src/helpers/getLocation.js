import Geolocation from 'react-native-geolocation-service'
import { Alert, Linking, PermissionsAndroid, Platform, ToastAndroid } from 'react-native'
import { useCallback } from 'react'
import VIForegroundService from '@voximplant/react-native-foreground-service'
const appConfig = {
  name: 'GeoLoc',
  displayName: 'GeoLoc',
}
export const GetLocationClojure = (
  watchId,
  setObserving,
  setLocation,
  forceLocation,
  useLocationManager,
  locationDialog,
  significantChanges,
  highAccuracy,
  foregroundService,
) => {
  const hasPermissionIOS = async () => {
    const openSetting = () => {
      Linking.openSettings().catch(() => {
        Alert.alert('Unable to open settings')
      })
    }
    const status = await Geolocation.requestAuthorization('whenInUse')

    if (status === 'granted') {
      return true
    }

    if (status === 'denied') {
      Alert.alert('Location permission denied')
    }

    if (status === 'disabled') {
      Alert.alert(
        `Turn on Location Services to allow "${appConfig.displayName}" to determine your location.`,
        '',
        [
          { text: 'Go to MapsSettings', onPress: openSetting },
          { text: "Don't Use Location", onPress: () => {} },
        ],
      )
    }

    return false
  }
  const hasLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      const hasPermission = await hasPermissionIOS()
      return hasPermission
    }

    if (Platform.OS === 'android' && Platform.Version < 23) {
      return true
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    )

    if (hasPermission) {
      return true
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    )

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG)
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show('Location permission revoked by user.', ToastAndroid.LONG)
    }

    return false
  }
  const getLocation = async () => {
    const hasPermission = await hasLocationPermission()

    if (!hasPermission) {
      return
    }

    Geolocation.getCurrentPosition(
      (position) => {
        setLocation(position)
      },
      (error) => {
        Alert.alert(`Code ${error.code}`, error.message)
        setLocation(null)
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        enableHighAccuracy: highAccuracy,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
        forceRequestLocation: forceLocation,
        forceLocationManager: useLocationManager,
        showLocationDialog: locationDialog,
      },
    )
  }

  const stopForegroundService = useCallback(() => {
    VIForegroundService.stopService().catch((err) => err)
  }, [])

  const startForegroundService = async () => {
    if (Platform.Version >= 26) {
      await VIForegroundService.createNotificationChannel({
        id: 'locationChannel',
        name: 'Location Tracking Channel',
        description: 'Tracks location of user',
        enableVibration: false,
      })
    }

    return VIForegroundService.startService({
      channelId: 'locationChannel',
      id: 420,
      title: appConfig.displayName,
      text: 'Tracking location updates',
      icon: 'ic_launcher',
    })
  }
  const removeLocationUpdates = useCallback(() => {
    if (watchId.current !== null) {
      stopForegroundService()
      Geolocation.clearWatch(watchId.current)
      watchId.current = null
      setObserving(false)
    }
  }, [stopForegroundService])
  const getLocationUpdates = async () => {
    const hasPermission = await hasLocationPermission()

    if (!hasPermission) {
      return
    }

    if (Platform.OS === 'android' && foregroundService) {
      await startForegroundService()
    }

    setObserving(true)

    watchId.current = Geolocation.watchPosition(
      (position) => {
        setLocation(position)
      },
      (error) => {
        setLocation(null)
        console.log(error)
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        enableHighAccuracy: highAccuracy,
        distanceFilter: 0,
        interval: 5000,
        fastestInterval: 2000,
        forceRequestLocation: forceLocation,
        forceLocationManager: useLocationManager,
        showLocationDialog: locationDialog,
        useSignificantChanges: significantChanges,
      },
    )
  }
  return { getLocation, removeLocationUpdates, getLocationUpdates }
}
