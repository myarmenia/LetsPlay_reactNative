import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
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
import EditTeamInfo from '@/screens/Team/EditTeam/EditTeamInfo'
import TeamMembers from '@/screens/Team/TeamMembers/TeamMembers'
import SearchInput from '@/screens/Team/SearchInput'
import JoinTeam from '@/screens/Team/TeamInfo'
import Map from '@/screens/Map/Map'
import SearchUserResult from '@/screens/Team/SearchUserResult/SearchUserResult'
import MembersInTeam from '@/screens/Team/TeamMembers/MembersInTeam'
import EachMember from '@/screens/Team/TeamMembers/EachMember'
import SearchedUserInfo from '@/screens/Team/SearchUserResult/SearchedUserInfo'
import { NAV_HEADER_OPTION } from '@/constants'
import SearchedTeamSubmit from '@/screens/Team/SearchCommand/SearchedTeamSubmit'
import CommandLeadNotCreate from '@/screens/Team/CommandLeadNotCreate/CommandLeadNotCreate'
import SearchTeamInvite from '@/screens/Team/SearchCommand/SearchTeamInvite'
import TeamInfo from '@/screens/Team/CommandLeadNotCreate/TeamInfo'
import EditTeamPlayers from '@/screens/Team/CommandLeadNotCreate/EditTeamPlayers'
import CommandLeadCreate from '@/screens/Team/CommandLeadCreate/CreateGameInTeam'
import TeamSchemes from '@/screens/Team/TeamSchemes'
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
      <Stack.Screen name="SearchUserResult" component={SearchUserResult} />
      <Stack.Screen name="SearchedUserInfo" component={SearchedUserInfo} />
      <Stack.Screen name="SearchTeamInvite" component={SearchTeamInvite} />
      <Stack.Screen name="SearchedTeamSubmit" component={SearchedTeamSubmit} />
      <Stack.Screen name="CommandLeadNotCreate" component={CommandLeadNotCreate} />
      <Stack.Screen name="CommandLeadCreate" component={CommandLeadCreate} />
      <Stack.Screen name="JoinTeam" component={JoinTeam} />
      <Stack.Screen name="SelectPlayers" component={SelectPlayers} />
      <Stack.Screen name="TeamsCreating" component={CreatingTeams} />
      <Stack.Screen name="CreateTeamTitle" component={CreateTeamTitle} />
      <Stack.Screen name="SearchTeamRes" component={SearchTeamRes} />
      <Stack.Screen name="SelectPlayersRival" component={SelectPlayersRival} />
      <Stack.Screen name="TeamModalSearch" component={TeamModalSearch} />
      <Stack.Screen name="TeamMembers" component={TeamMembers} />
      <Stack.Screen name="EachMember" component={EachMember} />
      <Stack.Screen name="MembersInTeam" component={MembersInTeam} />
      <Stack.Screen name="SearchTeam" component={SearchInput} />
      <Stack.Screen name="TeamSearchRes" component={SearchRes} />
      <Stack.Screen name="TeamInfo" component={TeamInfo} />
      <Stack.Screen name="EditTeamPlayers" component={EditTeamPlayers} />
      <Stack.Screen name="TeamSchemes" component={TeamSchemes} />
    </Stack.Navigator>
  )
}

export default Index
