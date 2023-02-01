import React from 'react'
import { StatusBar } from 'react-native'
import AppNavigator from '@/navigation/AppNavigator'
import { DARK_BLUE } from '@/theme/colors'
import AuthNavigator from './navigation/AuthNavigator'

const MyApp = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={DARK_BLUE} />
      {/* <AppNavigator /> */}
      {false ? <AppNavigator /> : <AuthNavigator />}
    </>
  )
  {
  }
}

export default MyApp
