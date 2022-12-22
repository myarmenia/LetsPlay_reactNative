import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NAV_HEADER_OPTION} from "@/constants";
import Calendar from "@/screens/Calendar/CalendarScreen";
import SettingsScreen from "@/screens/Calendar/SettingsScreen";
import TournamentScreen from "@/screens/Calendar/TournamentScreen";



const Stack = createNativeStackNavigator();

function Index(props) {

    return (
        <Stack.Navigator screenOptions={NAV_HEADER_OPTION} initialRouteName={'Calendar'}>
            <Stack.Screen name={'Calendar'} component={Calendar}/>
            <Stack.Screen name={'SettingsScreen'} component={SettingsScreen}/>
            <Stack.Screen name={'TournamentScreen'} component={TournamentScreen}/>
        </Stack.Navigator>
    );
}

export default Index;
