import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NAV_HEADER_OPTION} from "@/constants";
import GameAdd from "@/screens/Participate/GameAdd";
import TournamentList from "@/screens/Participate/TournamentList";
import TournamentTicket from "@/screens/Participate/TournamentTicket";
import TournamentTeam from "@/screens/Participate/TournamentTeam";
import SelectPlayersTour from "@/screens/Participate/SelectPlayersTour";




const Stack = createNativeStackNavigator();

function Index(props) {

    return (
        <Stack.Navigator screenOptions={NAV_HEADER_OPTION} initialRouteName={'GameAdd'}>
            <Stack.Screen name={'GameAdd'} component={GameAdd}/>
            <Stack.Screen name={'TournamentList'} component={TournamentList}/>
            <Stack.Screen name={'TournamentTicket'} component={TournamentTicket}/>
            <Stack.Screen name={'TournamentTeam'} component={TournamentTeam}/>
            <Stack.Screen name={'SelectPlayersTour'} component={SelectPlayersTour}/>
        </Stack.Navigator>
    );
}

export default Index;
