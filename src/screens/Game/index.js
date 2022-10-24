import React from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';

import { BACKGROUND } from '@/theme/colors';
import Type from '@/assets/imgs/type';

const TYPES = [
    {
        title: 'Играть'
    },
    {
        title: 'Команда',
    },
    {
        title: 'Турнир'
    }
];

const GameSelectScreen = () => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: BACKGROUND, }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
                {TYPES.map(type => {
                    return (
                        <TouchableOpacity key={type.title} activeOpacity={0.8}>
                            <Type title={type.title} />
                        </TouchableOpacity>
                    )
                })}
            </View>
        </SafeAreaView>
    )
};

export default GameSelectScreen;