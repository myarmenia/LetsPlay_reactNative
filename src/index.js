import React, { useEffect, useState } from 'react'
import { StatusBar, Text, TouchableOpacity, View } from 'react-native'
import AuthNavigator from '@/navigation/AuthNavigator'
import AppNavigator from '@/navigation/AppNavigator'
import { DARK_BLUE } from '@/theme/colors'
import { AppProvider } from '@/context'
import { useAuth } from '@/hooks'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'


const MyApp = () => {
  const { authenticated } = useAuth()


  useEffect(() => {
    axios
      .post('http://to-play.ru/api/auth/signup/first_step', {
        email: 'asd4asdnjd@gmail.com',
        name: 'sadfas',
        surname: 'sdfdsf',
      })
      .then((DA) => console.log(DA))
      .catch((e) => console.log(e))
  }, [])


  return (
    <AppProvider>
      <StatusBar barStyle={'light-content'} backgroundColor={DARK_BLUE} />
      <AppNavigator />
      {/* {authenticated ? <AppNavigator /> : <AuthNavigator />} */}
    </AppProvider>
  )
}

export default MyApp
