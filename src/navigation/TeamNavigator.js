import React, {useEffect, useMemo, useState} from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NAV_HEADER_OPTION} from "@/constants";
import GoBack from "@/helpers/goBack";
import MyTeam from "@/screens/Team/MyTeam";
import MyTeamInfo from "@/screens/Team/MyTeamInfo";
import TeamSelectCategoryComponent from '@/screens/Team/GameCategory/Cadegory';
import TeamActiveGame from '@/screens/Team/GameCategory/ActiveGames';
import TeamBoardGame from '@/screens/Team/GameCategory/BoardGames';
import SelectTeam from '@/screens/Team/SelectTeam';
import SearchTeam from "@/screens/Team/SearchTeam";
import SelectPlayers from "@/screens/Team/SelectPlayers";

const Stack = createNativeStackNavigator();

function Index(props) {

    const [route, setRoute]=useState({
        MyTeamComponent:props => (<GoBack item={<MyTeam   {...props} />}/>),
        MyTeamInfoComponent:props => (<GoBack item={<MyTeamInfo   {...props} />}/>),
        TeamSelectCategoryComponent:props => (<GoBack item={<TeamSelectCategoryComponent   {...props} />}/>),
        SelectTeamComponent:props => (<GoBack item={<SelectTeam   {...props} />}/>),
        SearchTeamComponent:props => (<GoBack item={<SearchTeam   {...props} />}/>),
        SelectPlayersComponent:props => (<GoBack item={<SelectPlayers   {...props} />}/>),
    })

    return (
        <Stack.Navigator screenOptions={NAV_HEADER_OPTION} initialRouteName={'MyTeam'}  >
            <Stack.Screen name="MyTeam" component={route.MyTeamComponent}/>
            <Stack.Screen name="MyTeamInfo" component={route.MyTeamInfoComponent}/>
            <Stack.Screen name="TeamSelectGameCategory" component={route.TeamSelectCategoryComponent}/>
            <Stack.Screen name="TeamActiveGame" component={TeamActiveGame}/>
            <Stack.Screen name="TeamBoardGame" component={TeamBoardGame}/>
            <Stack.Screen name="SelectTeam" component={route.SelectTeamComponent}/>
            <Stack.Screen name="SearchTeam" component={route.SearchTeamComponent}/>
            <Stack.Screen name="SelectPlayers" component={route.SelectPlayersComponent}/>
        </Stack.Navigator>
    );
}

export default Index;
