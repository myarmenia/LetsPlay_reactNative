import React, {useEffect, useMemo, useState} from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NAV_HEADER_OPTION} from "@/constants";
import GoBack from "@/helpers/goBack";
import MyTeam from "@/screens/Team/MyTeam";
import MyTeamInfo from "@/screens/Team/MyTeamInfo";
import TeamSelectCategoryComponent from '@/screens/Team/GameCategory/Cadegory';
import SelectTeam from '@/screens/Team/SelectTeam';
import SearchTeam from "@/screens/Team/SearchTeam";
import SelectPlayers from "@/screens/Team/SelectPlayers";
import CreatingTeams from '@/screens/Team/CreatingTeams';
import CreateTeamTitle from "@/screens/Team/CreateTeamTitle";
import SearchRes from '@/screens/Team/SearchRes';
import SearchTeamRes from '@/screens/Team/SearchTeamRes';
import SelectPlayersRival from '@/screens/Team/SelectPlayersRival';
import TeamModalSearch from '@/screens/Team/GameCategory/ModalItem'

const Stack = createNativeStackNavigator();

function Index(props) {

    const [route]=useState({
        MyTeamComponent:props => (<GoBack item={<MyTeam   {...props} />}/>),
        MyTeamInfoComponent:props => (<GoBack item={<MyTeamInfo   {...props} />}/>),
        TeamSelectCategoryComponent:props => (<GoBack item={<TeamSelectCategoryComponent   {...props} />}/>),
        SelectTeamComponent:props => (<GoBack item={<SelectTeam   {...props} />}/>),
        SearchTeamComponent:props => (<GoBack item={<SearchTeam   {...props} />}/>),
        SelectPlayersComponent:props => (<GoBack item={<SelectPlayers   {...props} />}/>),
        CreatingTeamsComponent:props => (<GoBack item={<CreatingTeams   {...props} />}/>),
        CreateTeamTitleComponent:props => (<GoBack item={<CreateTeamTitle   {...props} />}/>),
        SearchResComponent:props => (<GoBack item={<SearchRes   {...props} />}/>),
        SearchTeamResComponent:props => (<GoBack item={<SearchTeamRes   {...props} />}/>),
        SelectPlayersRivalComponent:props => (<GoBack item={<SelectPlayersRival   {...props} />}/>),
        TeamModalSearchComponent:props => (<GoBack item={<TeamModalSearch   {...props} />}/>),
    })

    return (
        <Stack.Navigator screenOptions={NAV_HEADER_OPTION}>
            <Stack.Screen name="teamStart" component={route.CreatingTeamsComponent}/>
            <Stack.Screen name="MyTeam" component={route.MyTeamComponent}/>
            <Stack.Screen name="MyTeamInfo" component={route.MyTeamInfoComponent}/>
            <Stack.Screen name="TeamSelectGameCategory" component={route.TeamSelectCategoryComponent}/>
            <Stack.Screen name="SelectTeam" component={route.SelectTeamComponent}/>
            <Stack.Screen name="SearchTeam" component={route.SearchTeamComponent}/>
            <Stack.Screen name="SelectPlayers" component={route.SelectPlayersComponent}/>
            <Stack.Screen name="TeamsCreating" component={route.CreatingTeamsComponent}/>
            <Stack.Screen name="CreateTeamTitle" component={route.CreateTeamTitleComponent}/>
            <Stack.Screen name="SearchRes" component={route.SearchResComponent}/>
            <Stack.Screen name="SearchTeamRes" component={route.SearchTeamResComponent}/>
            <Stack.Screen name="SelectPlayersRival" component={route.SelectPlayersRivalComponent}/>
            <Stack.Screen name="TeamModalSearch" component={route.TeamModalSearchComponent}/>
        </Stack.Navigator>
    );
}

export default Index;
