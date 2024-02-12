import React, { useEffect, useRef, useState } from 'react'
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  PermissionsAndroid,
  Alert,
  Platform,
} from 'react-native'
import { RH, RW } from '@/theme/utils'
import { BACKGROUND, ICON } from '@/theme/colors'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { fetchAddress } from './fetchAddress'
import { useDispatch, useSelector } from 'react-redux'
import Geolocation from 'react-native-geolocation-service'
import MapSvg from '@/assets/svgs/mapSvg'
import { setModalOptions } from '@/store/Slices/AppSlice'
import { setAddress, resetAddress, changeAddressName } from '@/store/Slices/AddressSlice'

const SearchAddresses = ({ style }) => {
  const inp = useRef()
  const [addressList, setAddresssList] = useState(null)
  const [value, setValue] = useState('')
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { address } = useSelector(({ address }) => address)




  const checkPermissionAndNavigate = async function requestLocationPermission() {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          navigation.navigate('Map')
          setAddresssList(null)
        } else {
          dispatch(
            setModalOptions({
              type: 'error',
              visible: true,
              body: 'Доступ к местоположению запрещен',
            }),
          )
        }
      } catch (err) {
        console.warn(err)
      }
    } else {
      let geo = await Geolocation.requestAuthorization('always')
      if (geo === 'granted') {
        navigation.navigate('Map')
        setAddresssList(null)
      } else {
        dispatch(
          setModalOptions({
            type: 'error',
            visible: true,
            body: 'Доступ к местоположению запрещен',
          }),
        )
      }
    }
  }





  const makeURL = async (state) => {
    try {
      await fetchAddress(false, null, null, state)
        .then(async (e) => {
          fetch(e.url)
            .then((r) => {
              return r?.json()
            })
            .then((s) => {
              if (s.results?.length) {
                let response = s.results[0]
                setAddresssList({
                  address: response?.formatted_address,
                  longitude: response?.geometry?.location?.lat,
                  latitude: response?.geometry?.location?.lng,
                })
              } else {
                setAddresssList(null)
              }
            })
        })
    } catch (err) {
    }
  }


  const chooseAddress = () => {
    dispatch(setAddress(addressList))
    setAddresssList(null)
  }



  useEffect(() => {
    const state = address?.length >= 35
      ?
      address.split().reverse().join().substring(0, 32) + '...'
      :
      address
    setValue(state)

  }, [address])


  useFocusEffect(
    React.useCallback(() => {
      // Your code here

      return () => {
        dispatch(resetAddress())
        // Clean up code here
      };
    }, []))



  return (
    <View style={[styles.container, style]}>
      <View style={[styles.inputContainer, addressList && { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
      ]}
      >
        <TextInput
          style={styles.input}
          ref={inp}
          placeholder={'Адрес проведения игры'}
          placeholderTextColor={ICON}
          numberOfLines={1}
          value={value}
          onChangeText={(e) => {
            setValue(e)
            dispatch(changeAddressName(e))
            if (e.length >= 4) {
              makeURL(e)
            }
          }}
        />
        <TouchableOpacity onPress={checkPermissionAndNavigate} style={styles.mapIcon}>
          <MapSvg />
        </TouchableOpacity>
      </View>
      {addressList?.address && (
        <Pressable style={styles.responseAddress} onPress={chooseAddress}>
          <Text style={styles.searchedAddress}>{addressList?.address}</Text>
        </Pressable>
      )}
    </View>
  )
}

export default SearchAddresses

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    // marginVertical: RW(15)
  },

  inputContainer: {
    backgroundColor: BACKGROUND,
    width: '100%',
    height: RH(50),
    zIndex: 89,
    borderRadius: RW(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    color: ICON,
    width: '80%',
    marginLeft: RW(20),
    fontSize: RW(16),
  },
  searchIcon: {
    width: '15%',
    alignItems: 'center',
  },
  responseAddress: {
    backgroundColor: BACKGROUND,
    width: RW(380),
    height: RH(55),
    zIndex: 888,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: RW(10),
    borderBottomRightRadius: RW(10),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },

  searchedAddress: {
    color: ICON,
    fontSize: RW(16),
    marginLeft: RW(20),
  },
  mapIcon: {
    left: '25%',
  },
})
