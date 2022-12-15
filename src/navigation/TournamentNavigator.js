import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NAV_HEADER_OPTION } from '@/constants'
import CreateActiveGame from '@/screens/Tournament/CreateActiveGame'
import OrganizeScreen from '@/screens/Tournament/OrganizeScreen'
import TournamentScreen from '@/screens/Tournament/TournamentScreen'


const Stack = createNativeStackNavigator()

function Index(props) {
  return (
       
        <Stack.Navigator  initialRouteName="TournamentScreen" screenOptions={NAV_HEADER_OPTION}>
      <Stack.Screen name="CreateActiveGame" component={CreateActiveGame} />
      <Stack.Screen name="OrganizeScreen" component={OrganizeScreen} />
      <Stack.Screen name="TournamentScreen" component={TournamentScreen} />
    </Stack.Navigator>
  )
}

export default Index
