import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CircleButton from '@/components/buttons/circle'
import TabBarButton from '@/components/buttons/tabs'
import { NAV_HEADER_OPTION } from '@/constants'
import ProfileScreen from '@/screens/Profile'
import GameSelectScreen from '@/screens/Game'
import ChatScreen from '@/screens/Chat'
import HomeScreen from '@/screens/Home'
import { ICON } from '@/theme/colors'
import MafiaGame from '@/screens/Game/Mafia'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  const [isHome, setIsHome] = React.useState(true)

  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={(props) => <TabBarButton {...props} setIsHome={setIsHome} />}
        screenOptions={{
          headerShown: false,
          tabBarVisible: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: ICON,
          tabBarInactiveTintColor: ICON,
        }}
      >
        <Tab.Screen name={'Chat'} component={ChatScreen} />
        <Tab.Screen name={'Home'} component={HomeScreen} />
        <Tab.Screen name={'Profile'} component={ProfileScreen} />
      </Tab.Navigator>
      <CircleButton isHome={isHome} setIsHome={setIsHome} />
    </>
  )
}

const AppNavigator = () => {
  return (
    <>
      <Stack.Navigator screenOptions={NAV_HEADER_OPTION} initialRouteName={'MafiaGames'}>
        {/*<Stack.Screen name={'TabNavigator'} component={TabNavigator} />*/}
        {/*<Stack.Screen name={'Game'} component={GameSelectScreen} />*/}
        <Stack.Screen name={'MafiaGame'} component={MafiaGame} />
      </Stack.Navigator>
    </>
  )
}

export default AppNavigator
