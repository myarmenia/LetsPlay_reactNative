import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NAV_HEADER_OPTION } from '@/constants'
import CreateActiveGame from '@/screens/Tournament/CreateActiveGame'
import OrganizeScreen from '@/screens/Tournament/OrganizeScreen'
import TournamentScreen from '@/screens/Tournament/TournamentScreen'
import DataGame from '@/screens/Tournament/DataGame'
import TournamentCreating from "@/screens/Tournament/tournamentCreating";
import TournamentCreatingTeam from "@/screens/Tournament/tournamentCreatingTeam";
import MyTeamForTur from "@/screens/Tournament/MyTeamForTur";
import SelectPlayersTournament from "@/screens/Tournament/SelectPlayersTournament";
import DataGameTeam from "@/screens/Tournament/DataGameTeam";


const Stack = createNativeStackNavigator()

function Index(props) {
  return (
      <Stack.Navigator  initialRouteName="TournamentScreen" screenOptions={NAV_HEADER_OPTION}>
      <Stack.Screen name="CreateActiveGame" component={CreateActiveGame} />
      <Stack.Screen name="OrganizeScreen" component={OrganizeScreen} />
      <Stack.Screen name="TournamentScreen" component={TournamentScreen} />
      <Stack.Screen name="DataGame" component={DataGame} />
      <Stack.Screen name="DataGameTeam" component={DataGameTeam} />
      <Stack.Screen name="TournamentCreating" component={TournamentCreating} />
      <Stack.Screen name="TournamentCreatingTeam" component={TournamentCreatingTeam} />
      <Stack.Screen name="MyTeamForTur" component={MyTeamForTur} />
      <Stack.Screen name="SelectPlayersTournament" component={SelectPlayersTournament} />
    </Stack.Navigator>
  )
}

export default Index
