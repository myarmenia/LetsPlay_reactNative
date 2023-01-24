import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NAV_HEADER_OPTION} from "@/constants";
import MyDetails from "@/screens/Profile/MyDetails";
import Gallery from "@/screens/Profile/Gallery";
import Wallet from "@/screens/Profile/Wallet";
import Feedback from "@/screens/Profile/Feedback";
import Preference from "@/screens/Profile/Preference";
import PaidServices from "@/screens/Profile/Wallet/PaidServices";
import Tariff from "@/screens/Profile/Wallet/Tariff";



const Stack = createNativeStackNavigator();

function Index(props) {

    return (
        <Stack.Navigator screenOptions={NAV_HEADER_OPTION}>
            <Stack.Screen name={'MyDetails'} component={MyDetails} />
            <Stack.Screen name={'Gallery'} component={Gallery} />
            <Stack.Screen name={'Wallet'} component={Wallet} />
            <Stack.Screen name={'Feedback'} component={Feedback} />
            <Stack.Screen name={'Preference'} component={Preference} />
            <Stack.Screen name={'PaidServices'} component={PaidServices} />
            <Stack.Screen name={'Tariff'} component={Tariff} />
        </Stack.Navigator>
    );
}

export default Index;
