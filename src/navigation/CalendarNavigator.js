import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NAV_HEADER_OPTION } from '@/constants'
import CalendarScreen from '@/screens/Calendar/CalendarScreen'
import CalendarSettings from '@/screens/Calendar/CalendarSettings'

const Stack = createNativeStackNavigator()

function CalendarNavigator() {
  return (
    <Stack.Navigator screenOptions={NAV_HEADER_OPTION}>
      <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
      <Stack.Screen name="CalendarSettings" component={CalendarSettings} />
    </Stack.Navigator>
  )
}

export default CalendarNavigator
