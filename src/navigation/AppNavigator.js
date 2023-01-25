import { ICON } from '@/theme/colors'
import Play from '@/screens/Game/Play'
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
import TeamNavigator from '@/navigation/TeamNavigator'
import MafiaGame from '@/navigation/MafiaNavigation'
import GamesList from '@/screens/Game/gamesList/gamesList'
import GameItem from '@/screens/Game/gamesList/gameItem'
import Tournament from './TournamentNavigator'
import ProfileNavigator from '@/navigation/ProfileNavigator'
import GameAdd from '@/screens/Participate/GameAdd'
import TournamentList from '@/screens/Participate/TournamentList'
import TournamentTicket from '@/screens/Participate/TournamentTicket'
import Calendar from '@/screens/Calendar'
import GamesListCarousel from '@/screens/GameListCarousel'
import CalendarNavigator from '@/navigation/CalendarNavigator'
import TourParticipantNavigator from '@/navigation/TourParticipantNavigator'
import NavigationSearchTeams from '@/navigation/NavigationSearchTeams'
import CrocodileNavigator from '@/navigation/CrocodileNavigator'

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
        <Tab.Screen name={'GameListCarousel'} component={GamesListCarousel} />
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
        <Stack.Screen name={'Elias'} component={Elias} />
        <Stack.Screen name={'Team'} component={TeamNavigator} />
        <Stack.Screen name={'GameCreating'} component={GameCreating} />
        <Stack.Screen name={'GameTicket'} component={GameTicket} />
        <Stack.Screen name={'PrivateChat'} component={PrivateChat} />
        <Stack.Screen name={'Crocodile'} component={CrocodileNavigator} />
        <Stack.Screen name={'Mafia'} component={MafiaGame} />
        <Stack.Screen name={'ProfileNavigator'} component={ProfileNavigator} />
        <Stack.Screen name={'Calendar'} component={Calendar} />
        <Stack.Screen name={'Tournament'} component={Tournament} />
        <Stack.Screen name={'CalendarNavigator'} component={CalendarNavigator} />
        <Stack.Screen name={'TourParticipantNavigator'} component={TourParticipantNavigator} />
        <Stack.Screen name={'NavigationSearchTeams'} component={NavigationSearchTeams} />
      </Stack.Navigator>
    </>
  )
}

export default AppNavigator
