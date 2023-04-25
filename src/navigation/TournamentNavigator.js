import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NAV_HEADER_OPTION } from '@/constants'

import React from 'react'
import CreateOrJoin from '@/screens/Tournament/CreateOrJoin/CreateOrJoin'
import SelectMembers from '@/screens/Tournament/JoinTournament/SelectMembers'
import EachTournament from '@/screens/Tournament/AllTournaments/EachTournament'
import JoinTournament from '@/screens/Tournament/JoinTournament/JoinTournament'
import AllTournaments from '@/screens/Tournament/AllTournaments/AllTournaments'
import GameTypeSelect from '@/screens/Tournament/GameTypeSelect.js/GameTypeSelect'
import CreateTournament from '@/screens/Tournament/CreateTournament/CreateTournament'
import CreateTournamentInfo from '@/screens/Tournament/CreateTournamentInfo/CreateTournamentInfo'

const Stack = createNativeStackNavigator()

function TournamentNavigator(props) {
  return (
    <Stack.Navigator initialRouteName="CreateOrJoin" screenOptions={NAV_HEADER_OPTION}>
      <Stack.Screen name="CreateTournament" component={CreateTournament} />
      <Stack.Screen name="CreateTournamentInfo" component={CreateTournamentInfo} />
      <Stack.Screen name="GameTypeSelect" component={GameTypeSelect} />
      <Stack.Screen name="JoinTournament" component={JoinTournament} />
      <Stack.Screen name="AllTournaments" component={AllTournaments} />
      <Stack.Screen name="EachTournament" component={EachTournament} />
      <Stack.Screen name="SelectMembers" component={SelectMembers} />
      <Stack.Screen name="CreateOrJoin" component={CreateOrJoin} />
    </Stack.Navigator>
  )
}

export default TournamentNavigator
