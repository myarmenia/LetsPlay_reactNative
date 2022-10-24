import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NAV_HEADER_OPTION } from '@/constants';
import AuthScreen from '@/screens/Auth';

const Stack = createNativeStackNavigator()

const AuthNavigator = () => {

    return (
        <Stack.Navigator screenOptions={NAV_HEADER_OPTION}>
            <Stack.Screen name={'Home'} component={AuthScreen} />
            {/* <Stack.Screen name={'Home'} component={AuthScreen} /> */}
        </Stack.Navigator>
    )
};

export default AuthNavigator;