import React from 'react'
import { StatusBar } from 'react-native'

import AuthNavigator from '@/navigation/AuthNavigator'
import AppNavigator from '@/navigation/AppNavigator'
import { DARK_BLUE } from '@/theme/colors'
import { AppProvider } from '@/context'
import { useAuth } from '@/hooks'

const MyApp = () => {
  const { authenticated } = useAuth()

  return (
    <AppProvider>
      <StatusBar barStyle={'light-content'} backgroundColor={DARK_BLUE} />
      {authenticated ? <AppNavigator /> : <AuthNavigator />}
    </AppProvider>
  )
}

export default MyApp
