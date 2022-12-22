import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NAV_HEADER_OPTION} from "@/constants";
import GameAdd from "@/screens/Participate/GameAdd";
import TournamentList from "@/screens/Participate/TournamentList";
import TournamentTicket from "@/screens/Participate/TournamentTicket";




const Stack = createNativeStackNavigator();

function Index(props) {

    return (
        <Stack.Navigator screenOptions={NAV_HEADER_OPTION} initialRouteName={'GameAdd'}>
            <Stack.Screen name={'GameAdd'} component={GameAdd}/>
            <Stack.Screen name={'TournamentList'} component={TournamentList}/>
            <Stack.Screen name={'TournamentTicket'} component={TournamentTicket}/>
        </Stack.Navigator>
    );
}

export default Index;
