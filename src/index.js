import React from 'react'
import { StatusBar } from 'react-native'
import AppNavigator from '@/navigation/AppNavigator'
import { DARK_BLUE } from '@/theme/colors'
import AuthNavigator from './navigation/AuthNavigator'
import { useSelector } from 'react-redux'
const MyApp = () => {
  const { token } = useSelector(({ auth }) => auth)
  return (
    <>
      {/*<StatusBar barStyle={'light-content'} backgroundColor={DARK_BLUE} />*/}
      {/*{token ? <AppNavigator /> : <AuthNavigator />}*/}
      <AppNavigator/>
    </>
  )
  {
  }
}

export default MyApp
