import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NAV_HEADER_OPTION, TAB_BAR_HEIGHT } from '@/constants';
import CircleButton from '@/components/buttons/circle';
import { SHADOW, TRANSPARENT, WHITE } from '@/theme/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {

    return (
        <>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    // tabBarIcon: ({ focused }) => {
                    //     let TabIcon: React.FC<SvgProps> = HomeIconActive

                    //     if (route.name === 'DailyUsageStack') {
                    //         TabIcon = focused ? HomeIconActive : HomeIconInActive
                    //     } else if (route.name === 'StatisticsStack') {
                    //         TabIcon = focused ? StatisticsIconActive : StatisticsIconInActive
                    //     } else if (route.name === 'StockStack') {
                    //         TabIcon = focused ? StockIconActive : StockIconInActive
                    //     } else if (route.name === 'SettingsStack') {
                    //         TabIcon = focused ? SettingsIconActive : SettingsIconInActive
                    //     }

                    //     return (
                    //         <View style={styles.tab}>
                    //             <TabIcon height={RH(32)} width={RH(32)} />
                    //             <Text style={[styles.tabLabel, focused && styles.tabFocused]}>
                    //                 {t(`tab_${camelCase(route.name)}`)}
                    //             </Text>
                    //         </View>
                    //     )
                    // },
                    tabBarVisible: false,
                    headerShown: false,
                    tabBarActiveTintColor: '#657AC5',
                    tabBarInactiveTintColor: '#657AC5',
                    tabBarHideOnKeyboard: true,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        height: TAB_BAR_HEIGHT,
                        backgroundColor: WHITE,
                        borderTopColor: TRANSPARENT,
                        elevation: 5,
                        shadowColor: SHADOW,
                        shadowOffset: {
                            height: 1,
                            width: 0,
                        },
                        shadowOpacity: 0.5,
                        shadowRadius: 5,
                    },
                })}>
                <Tab.Screen name={'Chat'} component={() => null} />
                <Tab.Screen name={'Profile'} component={() => null} />
            </Tab.Navigator>
        </>
    )
};

const AppNavigator = () => {

    return (
        <>
            <Stack.Navigator screenOptions={NAV_HEADER_OPTION}>
                <Stack.Screen name={'TabNavigator'} component={TabNavigator} />
            </Stack.Navigator>
            <CircleButton />
        </>
    )
};

export default AppNavigator;