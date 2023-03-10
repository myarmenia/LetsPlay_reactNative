import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NAV_HEADER_OPTION } from '@/constants'
import MyTeam from '@/screens/Team/MyTeam'
import MyTeamInfo from '@/screens/Team/MyTeamInfo'
import TeamSelectCategoryComponent from '@/screens/Team/GameCategory/Cadegory'
import SelectTeam from '@/screens/Team/SelectTeam'
import SelectPlayers from '@/screens/Team/SelectPlayers'
import CreatingTeams from '@/screens/Team/CreatingTeams'
import CreateTeamTitle from '@/screens/Team/CreateTeamTitle'
import SearchRes from '@/screens/Team/SearchRes'
import SearchTeamRes from '@/screens/Team/SearchTeamRes'
import SelectPlayersRival from '@/screens/Team/SelectPlayersRival'
import TeamModalSearch from '@/screens/Team/GameCategory/ModalItem'
import Scheme from '@/screens/Team/Scheme'
import EditTeamInfo from '@/screens/Team/EditTeam/EditTeamInfo'
import TeamMembers from '@/screens/Team/TeamMembers/TeamMembers'
import SearchInput from '@/screens/Team/SearchInput'
import TeamInfo from '@/screens/Team/TeamInfo'
import Map from '@/screens/Map/Map'
const Stack = createNativeStackNavigator()

function Index() {
  return (
    <Stack.Navigator screenOptions={NAV_HEADER_OPTION}>
      <Stack.Screen name="teamStart" component={CreatingTeams} />
      <Stack.Screen name="MyTeam" component={MyTeam} />
      <Stack.Screen name="MyTeamInfo" component={MyTeamInfo} />
      <Stack.Screen name="EditTeamInfo" component={EditTeamInfo} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="TeamSelectGameCategory" component={TeamSelectCategoryComponent} />
      <Stack.Screen name="SelectTeam" component={SelectTeam} />
      <Stack.Screen name="SelectPlayers" component={SelectPlayers} />
      <Stack.Screen name="TeamsCreating" component={CreatingTeams} />
      <Stack.Screen name="CreateTeamTitle" component={CreateTeamTitle} />
      <Stack.Screen name="SearchTeamRes" component={SearchTeamRes} />
      <Stack.Screen name="SelectPlayersRival" component={SelectPlayersRival} />
      <Stack.Screen name="TeamModalSearch" component={TeamModalSearch} />
      <Stack.Screen name="Scheme" component={Scheme} />
      <Stack.Screen name="TeamMembers" component={TeamMembers} />
      <Stack.Screen name="SearchTeam" component={SearchInput} />
      <Stack.Screen name="TeamSearchRes" component={SearchRes} />
      <Stack.Screen name="TeamSearchInfo" component={TeamInfo} />
    </Stack.Navigator>
  )
}

export default Index
