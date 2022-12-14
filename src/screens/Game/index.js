import React from 'react'
import {StyleSheet, View} from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import Type from '@/assets/imgs/type'
import GestureRecognizer from "react-native-swipe-gestures";

const TYPES = [
    {
        title: 'Играть',
        navigateTo: 'Play',
    },
    {
        title: 'Команда',
        navigateTo: 'Team',
    },
    {
        title: 'Турнир',
        navigateTo: 'Tournament',
    },
]


const GameSelectScreen = ({navigation}) =>
{

    return (
        <ScreenMask>
            <GestureRecognizer
                onSwipeLeft={(state) => navigation.goBack()}
                style={{
                    flex: 1,
                }}
            >
                <View style={styles.container}>
                    {TYPES.map((type) => {
                        return <Type title={type.title} key={type.title}
                                     onPress={() => navigation.navigate(type.navigateTo)}/>
                    })}
                </View>
            </GestureRecognizer>
        </ScreenMask>
    )
}

export default GameSelectScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
})

