import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NAV_HEADER_OPTION } from '@/constants'
import ChooseGameType from '@/screens/GameCreating/ChooseGameType'
import GameListCarousel from '@/screens/GameCreating/GameListCarousel'
import GameCreating from '@/screens/GameCreating/GameCreating'
import GameTicket from '@/screens/GameCreating/GameTicket'

const Stack = createNativeStackNavigator()

const CreateGameNavigator = () => {
  return (
    <Stack.Navigator screenOptions={NAV_HEADER_OPTION}>
      <Stack.Screen name={'ChooseGameType'} component={ChooseGameType} />
      <Stack.Screen name={'GameListCarousel'} component={GameListCarousel} />
      <Stack.Screen name={'GameCreating'} component={GameCreating} />
      <Stack.Screen name={'GameTicket'} component={GameTicket} />
    </Stack.Navigator>
  )
}

export default CreateGameNavigator
