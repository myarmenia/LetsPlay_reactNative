import { ICON } from '@/theme/colors'
import Play from '@/screens/Game/Play'
import ActiveGames from '@/screens/Game/Play/ActiveGames'
import BoardGames from '@/screens/Game/Play/BoardGames'
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
import Elias from './EliasNavigator'
import GameCreating from '@/screens/GameCreating'
import GameTicket from '@/screens/GameCreating/GameTicket'
import NotificationScreen from '@/screens/Notification'
import PrivateChat from '@/screens/Chat/PrivateChat'
import MyDetails from '@/screens/Profile/MyDetails'
import GamesList from '@/screens/Game/gamesList/gamesList'
import GameItem from '@/screens/Game/gamesList/gameItem'
import CalendarScreen from '@/screens/Calendar/screens/Calendar/CalendarScreen'
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  const [isHome, setIsHome] = React.useState(true)

  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={props => <TabBarButton {...props} setIsHome={setIsHome} />}
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
        <Stack.Screen name={'Game'} component={GameSelectScreen} />
        <Stack.Screen name={'GameList'} component={GamesList} />
        <Stack.Screen name={'GameItem'} component={GameItem} />
        <Stack.Screen name={'Play'} component={Play} />
        <Stack.Screen name={'ActiveGames'} component={ActiveGames} />
        <Stack.Screen name={'BoardGames'} component={BoardGames} />
        <Tab.Screen name={'Calendar'} component={CalendarScreen} />
        <Stack.Screen name={'Elias'} component={Elias} />
        <Stack.Screen name={'GameCreating'} component={GameCreating} />
        <Stack.Screen name={'GameTicket'} component={GameTicket} />
        <Stack.Screen name={'PrivateChat'} component={PrivateChat} />
        <Stack.Screen name={'MyDetails'} component={MyDetails} />
      </Stack.Navigator>
    </>
  )
}

export default AppNavigator
