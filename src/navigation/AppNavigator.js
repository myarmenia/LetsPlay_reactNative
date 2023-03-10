import { ICON } from '@/theme/colors'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CircleButton from '@/components/buttons/circle'
import TabBarButton from '@/components/buttons/tabs'
import { NAV_HEADER_OPTION } from '@/constants'

// TAB SCREENS
import ProfileScreen from '@/screens/Profile'
import ChatScreen from '@/screens/ChatScreens/Chats'
import HomeScreen from '@/screens/Home'
import NotificationScreen from '@/screens/Notification'
import GameSelectScreen from '@/screens/Game'
//TAB SCREENS END
// SCREENS
import Play from '@/screens/Game/Play'
import CreateGameNavigator from './CreateGameNavigator'
import MafiaNavigation from './MafiaNavigation'
import JoinGame from '@/screens/Game/JoinGame/JoinGame'
import TeamNavigator from '@/navigation/TeamNavigator'
import PrivateChat from '@/screens/ChatScreens/PrivateChat'
import ProfileNavigator from '@/navigation/ProfileNavigator'
import GameList from '@/screens/Game/GameList'
import Map from '@/screens/Map/Map'
// SCREENS END

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
        <Tab.Screen name={'Home'} component={HomeScreen} />
        <Tab.Screen name={'Chat'} component={ChatScreen} />
        <Tab.Screen name={'Profile'} component={ProfileScreen} />
        <Tab.Screen name={'Notification'} component={NotificationScreen} />
      </Tab.Navigator>
      <CircleButton isHome={isHome} setIsHome={setIsHome} />
    </>
  )
}

const AppNavigator = () => {
  return (
    <>
      <Stack.Navigator screenOptions={NAV_HEADER_OPTION}>
        <Stack.Screen name={'TabNavigator'} component={TabNavigator} />
        <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
        <Tab.Screen name={'Game'} component={GameSelectScreen} />
        <Stack.Screen name={'Play'} component={Play} />
        <Stack.Screen name={'JoinGame'} component={JoinGame} />
        <Stack.Screen name={'CreateGameNavigator'} component={CreateGameNavigator} />
        <Stack.Screen name={'MafiaNavigation'} component={MafiaNavigation} />
        <Stack.Screen name={'TeamNavigator'} component={TeamNavigator} />
        <Stack.Screen name={'ProfileNavigator'} component={ProfileNavigator} />
        <Stack.Screen name={'PrivateChat'} component={PrivateChat} />
        <Stack.Screen name={'GameList'} component={GameList} />
        <Stack.Screen name={'Map'} component={Map} />
      </Stack.Navigator>
    </>
  )
}

export default AppNavigator
