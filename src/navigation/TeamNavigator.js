import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NAV_HEADER_OPTION } from '@/constants'
import MyTeam from '@/screens/Team/MyTeam'
import MyTeamInfo from '@/screens/Team/MyTeamInfo'
import TeamSelectCategoryComponent from '@/screens/Team/GameCategory/Cadegory'
import SelectTeam from '@/screens/Team/SelectTeam'
import SearchTeam from '@/screens/Team/SearchTeam'
import SelectPlayers from '@/screens/Team/SelectPlayers'
import CreatingTeams from '@/screens/Team/CreatingTeams'
import CreateTeamTitle from '@/screens/Team/CreateTeamTitle'
import SearchRes from '@/screens/Team/SearchRes'
import SearchTeamRes from '@/screens/Team/SearchTeamRes'
import SelectPlayersRival from '@/screens/Team/SelectPlayersRival'
import TeamModalSearch from '@/screens/Team/GameCategory/ModalItem'
import Scheme from '@/screens/Team/Scheme'

const Stack = createNativeStackNavigator()

function Index(props) {
  return (
    <Stack.Navigator screenOptions={NAV_HEADER_OPTION}>
      <Stack.Screen name="teamStart" component={CreatingTeams} />
      <Stack.Screen name="MyTeam" component={MyTeam} />
      <Stack.Screen name="MyTeamInfo" component={MyTeamInfo} />
      <Stack.Screen name="TeamSelectGameCategory" component={TeamSelectCategoryComponent} />
      <Stack.Screen name="SelectTeam" component={SelectTeam} />
      <Stack.Screen name="SearchTeam" component={SearchTeam} />
      <Stack.Screen name="SelectPlayers" component={SelectPlayers} />
      <Stack.Screen name="TeamsCreating" component={CreatingTeams} />
      <Stack.Screen name="CreateTeamTitle" component={CreateTeamTitle} />
      <Stack.Screen name="SearchRes" component={SearchRes} />
      <Stack.Screen name="SearchTeamRes" component={SearchTeamRes} />
      <Stack.Screen name="SelectPlayersRival" component={SelectPlayersRival} />
      <Stack.Screen name="TeamModalSearch" component={TeamModalSearch} />
      <Stack.Screen name="Scheme" component={Scheme} />
    </Stack.Navigator>
  )
}

export default Index
