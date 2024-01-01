import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NAV_HEADER_OPTION } from '@/constants'
import MyDetails from '@/screens/Profile/MyDetails'
import Gallery from '@/screens/Profile/Gallery'
import Feedback from '@/screens/Profile/Feedback'
import Preference from '@/screens/Profile/Preference'
import Rules from '@/screens/Profile/Rules/Rules'
import SingleRule from '@/screens/Profile/Rules/SingleRule'

const Stack = createNativeStackNavigator()

function Index(props) {
  return (
    <Stack.Navigator screenOptions={NAV_HEADER_OPTION}>
      <Stack.Screen name={'MyDetails'} component={MyDetails} />
      <Stack.Screen name={'Rules'} component={Rules} />
      <Stack.Screen name={'SingleRule'} component={SingleRule} />
      <Stack.Screen name={'Gallery'} component={Gallery} />
      <Stack.Screen name={'Feedback'} component={Feedback} />
      <Stack.Screen name={'Preference'} component={Preference} />
    </Stack.Navigator>
  )
}

export default Index
