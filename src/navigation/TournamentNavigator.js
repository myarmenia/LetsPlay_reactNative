import React from 'react'
import { NAV_HEADER_OPTION } from '@/constants'
import CreateOrJoin from '@/screens/Tournament/CreateOrJoin/CreateOrJoin'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GameTypeSelect from '@/screens/Tournament/GameTypeSelect.js/GameTypeSelect'
import CreateTournament from '@/screens/Tournament/CreateTournament/CreateTournament'

const Stack = createNativeStackNavigator()

function TournamentNavigator(props) {
  return (
    <Stack.Navigator initialRouteName="CreateOrJoin" screenOptions={NAV_HEADER_OPTION}>
      <Stack.Screen name="CreateOrJoin" component={CreateOrJoin} />
      <Stack.Screen name="CreateTournament" component={CreateTournament} />
      <Stack.Screen name="GameTypeSelect" component={GameTypeSelect} />
    </Stack.Navigator>
  )
}

export default TournamentNavigator
