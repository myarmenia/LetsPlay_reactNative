import React, { useCallback, useEffect } from 'react'
import { StatusBar } from 'react-native'
import AppNavigator from '@/navigation/AppNavigator'
import { DARK_BLUE } from '@/theme/colors'
import AuthNavigator from './navigation/AuthNavigator'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileInfo } from './store/Slices/AuthSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setToken } from '@/store/Slices/AuthSlice'
import { io } from 'socket.io-client'

const MyApp = () => {
  const userId = useSelector(({ auth }) => auth?.user?._id)

  const token = useSelector(({ auth }) => auth.token)

  const dispatch = useDispatch()

  const myFunc = useCallback(async () => {
    let tokenWithAsync = await AsyncStorage.getItem('token')
    dispatch(setToken(tokenWithAsync))
  }, [])

  useEffect(() => {
    if (!token) myFunc()
  }, [token, myFunc])

  useEffect(() => {
    if (token && !userId) {
      // console.log('getProfileInfo')
      dispatch(getProfileInfo())
    }
  }, [token, userId])

  console.log('Token - ', token)

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={DARK_BLUE} />
      {token ? <AppNavigator /> : <AuthNavigator />}
    </>
  )
}

export default MyApp
