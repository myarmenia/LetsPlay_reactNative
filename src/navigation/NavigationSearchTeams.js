import React, {useState} from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NAV_HEADER_OPTION} from "@/constants";
import GoBack from "@/helpers/goBack";
import SearchInput from "@/screens/SearchTeams/SearchInput";
import SearchRes from "@/screens/SearchTeams/SearchRes";
import TeamInfo from "@/screens/SearchTeams/TeamInfo";

const Stack = createNativeStackNavigator();

function Index(props) {

    const [route]=useState({
        SearchInputComponent:props => (<GoBack item={<SearchInput   {...props} />}/>),
        SearchResComponent:props => (<GoBack item={<SearchRes   {...props} />}/>),
        TeamInfoComponent:props => (<GoBack item={<TeamInfo   {...props} />}/>),
    })

    return (
        <Stack.Navigator screenOptions={NAV_HEADER_OPTION}>
            <Stack.Screen name="TeamSearchInput" component={route.SearchInputComponent}/>
            <Stack.Screen name="TeamSearchRes" component={route.SearchResComponent}/>
            <Stack.Screen name="TeamSearchInfo" component={route.TeamInfoComponent}/>
        </Stack.Navigator>
    );
}

export default Index;
