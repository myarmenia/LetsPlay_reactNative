import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NAV_HEADER_OPTION } from '@/constants'

import QrCode from '@/screens/Mafia/QrCode'
import Settings from '@/screens/Mafia/Settings'
import PlayNow from '@/screens/Mafia/PlayNow/playNow'
import AboutGame from '@/screens/Mafia/AboutGame/AboutGame'
import PlaceMan from '@/screens/Mafia/placeMan/placeMan'

const MafiaNavigation = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator screenOptions={NAV_HEADER_OPTION}>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="QrCode" component={QrCode} />
      <Stack.Screen name="PlayNow" component={PlayNow} />
      <Stack.Screen name="AboutGame" component={AboutGame} />
      <Stack.Screen name="PlaceMan" component={PlaceMan} />
      {/* <Stack.Screen name="Vote" component={Vote} />
      <Stack.Screen name="PlayerOut" component={PlayerOut} />
      <Stack.Screen name="Ratings" component={Ratings} />
      <Stack.Screen name="RatingPlayer" component={RatingPlayer} /> */}
    </Stack.Navigator>
  )
}

export default MafiaNavigation
