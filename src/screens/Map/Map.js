import React, { useState, useEffect, useRef } from 'react'
import Geolocation from 'react-native-geolocation-service'
import MapView, {
  PROVIDER_GOOGLE,
  Circle,
  Marker,
  LocalTile,
  Polyline,
  Geojson,
  Animated,
  animateCamera,
  getCamera,
} from 'react-native-maps'
import {
  Platform,
  PermissionsAndroid,
  StyleSheet,
  TouchableOpacity,
  View,
  ToastAndroid,
  AlertIOS,
  Dimensions,
  Image,
  Linking,
} from 'react-native'
import MapViewDirections from 'react-native-maps-directions'
import { coordinatesData } from './coordinatesData'
import { useDispatch } from 'react-redux'
const Map = () => {
  const coordinatesData = [
    [40.183173, 44.505329],
    [40.185904, 44.510309],
    [40.184441, 44.520523],
    [40.1781, 44.519374],
    [40.181319, 44.498562],
    [40.174978, 44.501882],
  ]
  const [modalOpen, setModalOpen] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const dispatch = useDispatch()
  const [initCoords, setInitCoords] = useState({
    latitude: '40.177200',
    longitude: '44.503490',
  })
  const [geoAuth, setGeoAuth] = useState(false)
  const [canShow, setCanShow] = useState(false)

  const [directionsCoord, setDirectionsCoord] = useState([])
  const mapRef = useRef(null)
  useEffect(() => {
    requestPermissions()
  }, [])

  const requestPermissions = async () => {
    let auth
    if (Platform.OS === 'ios') {
      auth = await Geolocation.requestAuthorization('whenInUse')
    }
    if (Platform.OS === 'android') {
      auth = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
    }
    setGeoAuth(auth === 'granted')
    if (auth === 'granted') {
      getCurrentPosition()
    }
  }

  const getCurrentPosition = async () => {
    Geolocation.getCurrentPosition(
      position => {
        setCanShow(true)
        setInitCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
        mapRef.current.animateToRegion(
          {
            latitude: initCoords?.latitude,
            longitude: initCoords?.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          },
          1000,
        )
      },
      error => {
        setCanShow(true)
        if (Platform.OS === 'android') {
          ToastAndroid.show(
            'Не удалось получить ваше местоположение. Пожалуйста, проверьте службу определения местоположения вашего устройства!',
            ToastAndroid.SHORT,
          )
        } else {
          Alert(
            'Не удалось получить ваше местоположение. Пожалуйста, проверьте службу определения местоположения вашего устройства!',
          )
        }
      },
      {
        accuracy: {
          android: 'high',
        },
        enableHighAccuracy: true,
        timeout: 30000,
        maximumAge: 10000,
        distanceFilter: 0,
        forceRequestLocation: true,
        forceLocationManager: false,
        showLocationDialog: true,
      },
    )
  }
  return (
    <MapView.Animated
      ref={mapRef}
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      // showsMyLocationButton={false}
      showsUserLocation={true}
      // userInterfaceStyle={{
      //   backgroundColor: 'red',
      //   // addListener: () => {
      //   //   console.log('cjsndl');
      //   // },
      // }}
      userLocationUpdateInterval={100000}
      userLocationFastestInterval={100000}
      customMapStyle={styles}
      // onUserLocationChange={getCurrentPosition}
      mapType="standard"
      showsCompass={true}
      showsPointsOfInterest={false}
      // showsScale
      initialRegion={{
        latitude: initCoords?.latitude,
        longitude: initCoords?.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
      // camera={{zoom: 1}}
      // FitToOptions={{animted: true}}
      // animateCamera={{
      //   camera: {
      //     zoom: 10,
      //   },
      // }}
      followsUserLocation={true}
      rotateEnabled={false}

      // role="alert"
      // compassOffset={{x: 10000, y: -100000}}
      // camera={{
      //   zoom: 12.43,
      //   center: {
      //     latitude: initCoords?.latitude,
      //     longitude: initCoords?.longitude,
      //   },
      //   pitch: 50,
      // }}
    >
      {coordinatesData.map(coordinate => (
        <Marker
          // draggable
          key={Math.random()}
          coordinate={{ latitude: coordinate[0], longitude: coordinate[1] }}
          title={coordinate[0] + ',' + coordinate[1]}
          onPress={e => {
            setDirectionsCoord(coordinate)
          }}
        />
      ))}
      {directionsCoord.length ? (
        <MapViewDirections
          origin={{
            latitude: initCoords.latitude,
            longitude: initCoords.longitude,
          }}
          destination={{
            latitude: directionsCoord[0],
            longitude: directionsCoord[1],
          }}
          apikey={'AIzaSyBzRyxndsOvSUG-bTzNhEkIKTuhLNKCAno'}
          mode="DRIVING"
          optimizeWaypoints={true}
          region="AM"
          precision="high"
          strokeColor="green"
          strokeWidth={3}
        />
      ) : null}
    </MapView.Animated>
  )
}

export default Map

const styles = StyleSheet.create({})
