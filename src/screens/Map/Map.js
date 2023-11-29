import { useLayoutEffect, useRef, useState } from 'react'
import { StyleSheet, Pressable, Platform } from 'react-native'
import { DARK_BLUE } from '@/theme/colors'
import { RH, RW } from '@/theme/utils'
import Geolocation from '@react-native-community/geolocation'
import GeolocationIcon from '@/assets/svgs/GeoloactionIcon'
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps'
import { useDispatch } from 'react-redux'
import { fetchAddress } from './fetchAddress'
import { useNavigation } from '@react-navigation/native'
import { setAddress } from '@/store/Slices/AddressSlice'

const Map = () => {
  const mapRef = useRef()
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [userPosition, setUserPosition] = useState({
    latitude: 55.751244,
    longitude: 37.618423,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  })
  const [markers, setMarkers] = useState([])

  
  const getPosition = () => {
    Geolocation.getCurrentPosition((position) => {
      const currentLatitude = position.coords.latitude
      const currentLongitude = position.coords.longitude
      setUserPosition({
        latitude: currentLatitude,
        longitude: currentLongitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      }),
        mapRef.current.animateToRegion(userPosition, 1000)
        ; (error) => alert(error.message),
        {
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 1000,
        }
    })
  }

  const onMapPress = async (e) => {
    await fetchAddress(
      true,
      e.nativeEvent.coordinate.latitude,
      e.nativeEvent.coordinate.longitude,
      null,
    ).then(async (e) => {
      await fetch(e.url)
        .then((r) => {
          return r.json()
        })
        .then((s) => {
          let response = s.results[0]
          dispatch(setAddress({
            address: response?.formatted_address,
            longitude: response?.geometry?.location?.lat,
            latitude: response?.geometry?.location?.lng,
          }))
          setMarkers([
            {
              latitude: response?.geometry?.location?.lat,
              longitude: response?.geometry?.location?.lng,
            },
          ])
          navigation.goBack()
        })
    })
  }





  useLayoutEffect(() => {
    getPosition()
    setMarkers([])
  }, [])

  return (
    <>
      <MapView
        ref={mapRef}
        style={styles.map}
        // liteMode={true}
        initialRegion={userPosition}
        showsBuildings={true}
        provider={Platform.OS == 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE}
        showsUserLocation={false}
        onPress={(e) => {
          onMapPress(e)
        }}
      >
        <Marker
          coordinate={{ latitude: userPosition.latitude, longitude: userPosition.longitude }}
          title={'Ваше место'}
          pinColor={'#00b7ff'}
          onPress={(e) => { onMapPress(e) }}
        />
        {markers?.map((marker) => {
          return (
            <Marker
              tooltip={true}
              pinColor="random"
              tracksViewChanges={false}
              key={Math.random().toString()}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              title={marker.latitude.toString()}
            ></Marker>
          )
        })}
      </MapView>
      <Pressable onPress={getPosition} style={styles.geoBtn}>
        <GeolocationIcon />
      </Pressable>
    </>
  )
}
export default Map

const styles = StyleSheet.create({
  map: {
    zIndex: 1,
    height: '100%',
    width: '100%',
    position: 'absolute',
  },

  geoBtn: {
    height: RH(64),
    width: RW(64),
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
    backgroundColor: DARK_BLUE,
    alignSelf: 'center',
    position: 'absolute',
    bottom: RH(40),
    right: RW(24),
    zIndex: 88,
  },
})
