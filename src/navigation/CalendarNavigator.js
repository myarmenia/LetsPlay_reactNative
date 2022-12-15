import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NAV_HEADER_OPTION } from '@/constants'
import CalendarScreen from '@/screens/Calendar/CalendarScreen'
import TournamentScreen from '@/screens/Calendar/TournamentScreen'
import SettingsScreen from '@/screens/Calendar/SettingsScreen'


const Stack = createNativeStackNavigator()

function Index(props) {
  return (
    <Stack.Navigator screenOptions={NAV_HEADER_OPTION}>
      <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
      <Stack.Screen name="TournamentScreen" component={TournamentScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  )
}

export default Index
