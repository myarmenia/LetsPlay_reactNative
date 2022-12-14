import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import AuthNavigator from '@/navigation/AuthNavigator'
import AppNavigator from '@/navigation/AppNavigator'
import { DARK_BLUE } from '@/theme/colors'
import { AppProvider } from '@/context'
import { useAuth } from '@/hooks'
import MyTeam from '@/screens/Team/MyTeam'

const MyApp = () => {
  const { authenticated } = useAuth()

  return (
    <AppProvider>
      <StatusBar barStyle={'light-content'} backgroundColor={DARK_BLUE} />

      <AppNavigator />
      {/*{authenticated ? <AppNavigator /> : <AuthNavigator />}*/}
    </AppProvider>
  )
}

export default MyApp
