import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NAV_HEADER_OPTION } from '@/constants'

import React from 'react'
import CreateOrJoin from '@/screens/Tournament/CreateTournament/CreateOrJoin'
import SelectMembers from '@/screens/Tournament/JoinTournament/SelectMembers'
import SearchTournament from '@/screens/Tournament/JoinTournament/SearchTournamet'
import JoinTournament from '@/screens/Tournament/JoinTournament/JoinTournamet'
import TournamentList from '@/screens/Tournament/JoinTournament/TournamentsList'
import GameTypeSelect from '@/screens/Tournament/GameTypeSelect.js/GameTypeSelect'
import TournamentName from '@/screens/Tournament/CreateTournament/TournamentNameScreen'
import TournamentInfo from '@/screens/Tournament/CreateTournament/TournamentInfoScreen'
import CreateTournament from '@/screens/Tournament/CreateTournament/CreateTournamentScreen'
import AddTournamentPhoto from '@/screens/Tournament/FinishTournament/AddPhoto/AddTournamentPhoto'
import RateTourneyPlayers from '@/screens/Tournament/FinishTournament/RatePlayers'
import TeamSchema from '@/screens/Tournament/SchemaScreen/TeamSchema'
import MyCreatedTeams from '@/screens/Tournament/MyCreatedTeams/MyTeams'

const Stack = createNativeStackNavigator()

function TournamentNavigator() {
  return (
    <Stack.Navigator screenOptions={NAV_HEADER_OPTION}>
      <Stack.Screen name="CreateOrJoin" component={CreateOrJoin} />
      <Stack.Screen name="TournamentName" component={TournamentName} />
      <Stack.Screen name="TournamentInfo" component={TournamentInfo} />
      <Stack.Screen name="GameTypeSelect" component={GameTypeSelect} />
      <Stack.Screen name="SearchTournament" component={SearchTournament} />
      <Stack.Screen name="TournamentList" component={TournamentList} />
      <Stack.Screen name="JoinTournament" component={JoinTournament} />
      <Stack.Screen name="CreateTournament" component={CreateTournament} />
      <Stack.Screen name="SelectMembers" component={SelectMembers} />
      <Stack.Screen name="AddTournamentPhoto" component={AddTournamentPhoto} />
      <Stack.Screen name="RateTourneyPlayers" component={RateTourneyPlayers} />
      <Stack.Screen name="TeamSchema" component={TeamSchema} />
      <Stack.Screen name="MyCreatedTeams" component={MyCreatedTeams} />
    </Stack.Navigator>
  )
}

export default TournamentNavigator
