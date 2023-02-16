import { useLayoutEffect, useRef, useState } from 'react'
import { StyleSheet, View, Pressable, Image, Text, Platform } from 'react-native'
import { DARK_BLUE } from '@/theme/colors'
import { RH, RW } from '@/theme/utils'
import Geolocation from '@react-native-community/geolocation'
import GeolocationIcon from '@/assets/svgs/GeoloactionIcon'
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps'
import SearchAddresses from './SearchAddresses'
import { setLatitude, setLongitude, setPlaceName } from '@/store/Slices/GameCreatingSlice'
import { useDispatch } from 'react-redux'
import { fetchAddress } from './fetchAddress'
import { useNavigation } from '@react-navigation/native'

const Map = props => {
  const mapRef = useRef()
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const game = props.route.params.game
  const [userPosition, setUserPosition] = useState({
    latitude: 55.751244,
    longitude: 37.618423,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  })
  const [markers, setMarkers] = useState([])
  const getPosition = () => {
    Geolocation.getCurrentPosition(position => {
      const currentLatitude = position.coords.latitude
      const currentLongitude = position.coords.longitude
      setUserPosition({
        latitude: currentLatitude,
        longitude: currentLongitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      }),
        mapRef.current.animateToRegion(userPosition, 1000)
      error => alert(error.message),
        {
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 1000,
        }
    })
  }
  useLayoutEffect(() => {
    getPosition()
  }, [])

  return (
    <>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={userPosition}
        showsBuildings={true}
        customMapStyle={styles.mapTheme}
        // provider={PROVIDER_GOOGLE}
        provider={Platform.OS == 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE}
        showsUserLocation={false}
        onPress={e => {
          dispatch(setLatitude(e.nativeEvent.coordinate.latitude)),
            dispatch(setLongitude(e.nativeEvent.coordinate.longitude))
          setMarkers([
            {
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            },
          ])
          // dispatch(setLatitude(e.nativeEvent.coordinate.latitude))
          // dispatch(setLongitude(e.nativeEvent.coordinate.longitude))
          fetchAddress(
            true,
            e.nativeEvent.coordinate.latitude,
            e.nativeEvent.coordinate.longitude,
            null,
          ).then(async e => {
            await fetch(e.url)
              .then(r => {
                return r.json()
              })
              .then(s => {
                let response = s.results[0]?.formatted_address
                dispatch(setPlaceName(response))
                navigation.navigate('GameCreating', { params: { game: game, response: response } })
              })
          })
        }}
      >
        <Marker
          coordinate={{ latitude: userPosition.latitude, longitude: userPosition.longitude }}
          title={'Ваше место'}
          pinColor={'#00b7ff'}
          // description={'description'}
        />
        {markers?.map(marker => {
          return (
            <Marker
              tooltip={true}
              pinColor="random"
              // onPress={() => {
              //   setMarkers(markers.filter(mark => mark.latitude !== marker.latitude))
              // }}
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
      <View style={{ width: '100%', position: 'absolute' }}>{/* <SearchAddresses /> */}</View>
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
  mapTheme: [
    {
      elementType: 'geometry',
      stylers: [
        {
          color: '#242f3e',
        },
      ],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#746855',
        },
      ],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#242f3e',
        },
      ],
    },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#d59563',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#d59563',
        },
      ],
    },
    {
      featureType: 'poi.business',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        {
          color: '#263c3f',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#6b9a76',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          color: '#38414e',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#212a37',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9ca5b3',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          color: '#746855',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#1f2835',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#f3d19c',
        },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [
        {
          color: '#2f3948',
        },
      ],
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#d59563',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#17263c',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#515c6d',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#17263c',
        },
      ],
    },
  ],
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
