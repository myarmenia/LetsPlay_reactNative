import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NAV_HEADER_OPTION } from '@/constants'
import SearchInput from '@/screens/SearchTeams/SearchInput'
import SearchRes from '@/screens/SearchTeams/SearchRes'
import TeamInfo from '@/screens/SearchTeams/TeamInfo'

const Stack = createNativeStackNavigator()

function Index() {
  return (
    <Stack.Navigator screenOptions={NAV_HEADER_OPTION}>
      <Stack.Screen name="TeamSearchInput" component={SearchInput} />
      <Stack.Screen name="TeamSearchRes" component={SearchRes} />
      <Stack.Screen name="TeamSearchInfo" component={TeamInfo} />
    </Stack.Navigator>
  )
}

export default Index
