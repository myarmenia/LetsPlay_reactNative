import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NAV_HEADER_OPTION } from '@/constants'
import Commands from '@/screens/Alias/Commands'
import IniviteTeamPlayers from '@/screens/Alias/IniviteTeamPlayers'
import AboutGame from '@/screens/Alias/AboutGame/AboutGame'
import PlayNow from '@/screens/Alias/PlayNow/playNow'
import QrCode from '@/screens/Alias/QrCode'
import Settings from '@/screens/Alias/Settings'
import SelectComplexity from '@/screens/Alias/SelectComplexity'
import SearchTeamInvite from '@/screens/Alias/SearchCommand/SearchTeamInvite'
import GameStart from '@/screens/Alias/StartGame/GameStart'

const AliasNavigator = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator screenOptions={NAV_HEADER_OPTION}>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="SelectComplexity" component={SelectComplexity} />
      <Stack.Screen name="Commands" component={Commands} />
      <Stack.Screen name="QrCode" component={QrCode} />
      <Stack.Screen name="SearchTeamInvite" component={SearchTeamInvite} />
      <Stack.Screen name="InviteTeamPlayers" component={IniviteTeamPlayers} />
      <Stack.Screen name="PlayNow" component={PlayNow} />
      <Stack.Screen name="AboutGame" component={AboutGame} />
      <Stack.Screen name="GameStart" component={GameStart} />
    </Stack.Navigator>
  )
}
export default AliasNavigator
