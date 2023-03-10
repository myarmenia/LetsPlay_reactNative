import React, {useEffect, useState} from 'react';
import {View} from "react-native";
import ScreenMask from "@/components/wrappers/screen";
import {styles} from "@/screens/Game/Play/style";
import Button from "@/assets/imgs/Button";
import {ActiveGames, BoardGames} from "@/assets/TestData";

const data = ActiveGames.map((item, i) => (
        {
            ...item,
            navigateTo: 'Team',
            screenTwo: 'TeamModalSearch'
        }
    )
);

function Index({navigation, route}) {
    const game = route.params;

    return (
        <ScreenMask>
            <View style={styles.btnBlock}>
                <View style={styles.btnActiveGames}>
                    <Button onPress={() => {
                        navigation.navigate('GameListCarousel', {list: data, game})
                    }}
                            label={'Активные игры'}
                            size={{width: 281, height: 50}}
                    />
                </View>
                <View>
                    <Button onPress={() => {
                        navigation.navigate('GameListCarousel', {list: BoardGames, game})
                    }}
                            label={'Настольные игры'}
                            size={{width: 281, height: 50}}
                    />
                </View>
            </View>
        </ScreenMask>
    )
}

export default Index;
