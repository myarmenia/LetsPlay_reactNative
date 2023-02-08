import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import QrCode from '@/screens/Elias/QrCode'
import Players from '@/screens/Elias/Players'
import AllocatePlayers from '@/screens/Elias/AllocatePlayers'
import { NAV_HEADER_OPTION } from '@/constants'
import Settings from '@/screens/Elias/Settings'
import DifficultyLevel from '@/screens/Elias/DifficultyLevel'
import Start from '@/screens/Elias/Start'
import ResTeam from '@/screens/Elias/ResTeam'
import ResTeams from '@/screens/Elias/ResTeams'

const Stack = createNativeStackNavigator()

function Index(props) {
  return (
    <Stack.Navigator screenOptions={NAV_HEADER_OPTION}>
      <Stack.Screen name="Qr" component={QrCode} />
      <Stack.Screen name="EliasPlayers" component={Players} />
      <Stack.Screen name="EliasAllocatePlayers" component={AllocatePlayers} />
      <Stack.Screen name="SettingsElias" component={Settings} />
      <Stack.Screen name="DifficultyLevel" component={DifficultyLevel} />
      <Stack.Screen name="EliasStart" component={Start} />
      <Stack.Screen name="ResTeamElias" component={ResTeam} />
      <Stack.Screen name="ResTeamsElias" component={ResTeams} />
    </Stack.Navigator>
  )
}

export default Index
