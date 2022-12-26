import styles from '@/components/buttons/styles'
import React from 'react'
import { View, Text } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import { RW } from '@/theme/utils'
import Toggle from '@/components/toggleSwitch/Toggle'
import GestureRecognizer from 'react-native-swipe-gestures'
// import {LinearGradient} from "react-native-svg";
import LinearGradient from 'react-native-linear-gradient';

const SettingsScreen = ({navigation}) => {
    return (
        <ScreenMask>
            <GestureRecognizer
                onSwipeRight={state => navigation.goBack()}
                style={{
                    flex: 1,
                }}
            >
                <Text
                    style={{
                        color: '#FFFFFF',
                        textAlign: 'center',
                        fontSize: RW(24),
                        fontWeight: 'bold',
                        marginTop: RW(20),
                    }}
                >
                    Настройки
                </Text>

                <Text style={{ color: '#B3B7C2', fontSize: 16, marginTop: 30 }}>Отображение</Text>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 20,
                    }}
                >
                    <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Индивидуальные игры</Text>
                    <Toggle />
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 20,
                    }}
                >
                    <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Командные игры</Text>
                    <Toggle />
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 20,
                    }}
                >
                    <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Турниры</Text>
                    <Toggle />
                </View>

                {/* <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#7DCE8A', '#4D7CFE']}
              >

            <Toggle />
              </LinearGradient> */}
            </GestureRecognizer>
        </ScreenMask>
    )
}

export default SettingsScreen
