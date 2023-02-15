import React, { useEffect, useRef, useState } from 'react'
import SearchSvg from '@/assets/svgs/searchSvg'
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { RH, RW } from '@/theme/utils'
import { BACKGROUND, DARK_BLUE, ICON, WHITE } from '@/theme/colors'
import MapSvg from '@/assets/svgs/mapSvg'
import { useNavigation } from '@react-navigation/native'
import { fetchAddress } from './fetchAddress'
import { useSelector } from 'react-redux'

const GOOGLE_API_KEY = 'AIzaSyBEfoq_jSo1AZwtYmNikfuqLBrgVclc8Qc'
const SearchAddresses = ({ game }) => {
  const inp = useRef()
  const [state, setState] = useState('')
  const [addresses, setAddresses] = useState(null)
  const navigation = useNavigation()
  const initialState = useSelector((state) => state.game)
  // const makeURL = async () => {
  //   try {
  //     const res = await fetch(
  //       `https://maps.googleapis.com/maps/api/geocode/json?${true ? 'latlng' : 'address'}=${
  //         true ? 40.1772 + ',' + 44.50349 : 'Armenia'
  //       }&key=${'AIzaSyBPDe31Cr9QeeZjeUW_pvS50vq3vQHvgjw'}&language=${'en'}&region=.${'en'}`,
  //     )
  //     return console.log(res)
  //   } catch (err) {
  //     return console.log(err)
  //   }
  // }

  const makeURL = async (state) => {
    try {
      const res = fetchAddress(false, null, null, state).then(async (e) => {
        await fetch(e.url)
          .then((r) => {
            return r?.json()
          })
          .then((s) => {
            if (s.results?.length) {
              let response = s.results[0]?.formatted_address
              setAddresses(response)
            }
          })
      })
      return res
    } catch (err) {
      return console.log('err', err)
    }
  }
  const chooseAddress = () => {
    setState(addresses)
    if (state.length >= 35) {
      setState(state.split().reverse().join().substring(0, 32) + '...')
    }
    setAddresses(null)
  }
  // useEffect(() => {
  //   console.log(addresses)
  //   if (state.length >= 4) {
  //     makeURL()
  //   }
  // }, [state.length])
  return (
    <View>
      <View
        style={[
          styles.container,
          addresses ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 } : null,
        ]}
      >
        <TextInput
          style={styles.input}
          ref={inp}
          placeholder={'Адрес проведения игры'}
          placeholderTextColor={ICON}
          value={
            state
              ? state
              : initialState.placeName.length
              ? initialState.placeName.split().reverse().join().substring(0, 36) + '...'
              : state
          }
          onChangeText={(e) => {
            setState(e)
            if (state.length >= 4) {
              makeURL(state)
            }
          }}
        ></TextInput>
        <TouchableOpacity
          onPress={() => navigation.navigate('Map', { game: game })}
          style={styles.mapIcon}
        >
          <MapSvg />
        </TouchableOpacity>
      </View>
      {addresses && (
        <Pressable style={styles.responseAddress} onPress={chooseAddress}>
          <Text style={styles.searchedAddress}>{addresses}</Text>
        </Pressable>
      )}
    </View>
    // <GooglePlacesAutocomplete
    //   suppressDefaultStyles={true}
    //   enablePoweredByContainer={false}
    //   nearbyPlacesAPI="GooglePlacesSearch"
    //   placeholder="Поиск"
    //   currentLocation={false}
    //   textInputProps={{
    //     placeholderTextColor: WHITE,
    //   }}
    //   styles={{
    //     textInputContainer: styles.container,
    //     textInput: styles.input,
    //     predefinedPlacesDescription: {
    //       color: '#1faadb',
    //     },
    //   }}
    //   renderRightButton={() => {
    //     return (
    //       <View style={styles.searchIcon}>
    //         <SearchSvg />
    //       </View>
    //     )
    //   }}
    //   autoFillOnNotFound={true}
    //   enableHighAccuracyLocation={true}
    //   fetchDetails={true}
    //   onFail={err => {
    //     console.log(err)
    //   }}
    //   onPress={(data, details = null) => {
    //     console.log(data, details)
    //   }}
    //   query={{
    //     key: 'AIzaSyBEfoq_jSo1AZwtYmNikfuqLBrgVclc8Qc',
    //     language: 'en',
    //   }}
    // />
  )
}

export default SearchAddresses

const styles = StyleSheet.create({
  searchIcon: {
    width: '15%',
    alignItems: 'center',
  },
  container: {
    backgroundColor: BACKGROUND,
    width: RW(380),
    height: RH(50),
    alignSelf: 'center',
    flexDirection: 'row',
    // top: RH(32),
    zIndex: 89,
    borderRadius: RW(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  responseAddress: {
    backgroundColor: BACKGROUND,
    width: RW(380),
    height: RH(55),
    alignSelf: 'center',
    zIndex: 888,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: RW(10),
    borderBottomRightRadius: RW(10),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  input: {
    color: ICON,
    width: '80%',
    marginLeft: RW(20),
    fontSize: RW(16),
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
