import React, {useEffect, useState} from 'react';
import {View} from "react-native";
import ScreenMask from "@/components/wrappers/screen";
import {styles} from "@/screens/Game/Play/style";
import Button from "@/assets/imgs/Button";
import GestureRecognizer from 'react-native-swipe-gestures';
const CREATE_GAME = 'CREATE_GAME';
const PARTICIPATION_GAME = 'PARTICIPATION_GAME';
import {font} from '@/theme/utils'

function Index({navigation}) {
    const [chooseType, setChooseType] = useState(false);


    if (!chooseType) {
        return (
            <ScreenMask>
                <GestureRecognizer
                    onSwipeLeft={(state) => navigation.goBack()}
                    style={{
                        flex: 1,
                    }}
                >
                    <View style={styles.btnBlock}>
                        <View style={styles.btnActiveGames}>
                            <Button onPress={() => setChooseType(CREATE_GAME)} label={'Создать игру'}
                                     size={{width: 281, height: 50}}/>
                        </View>
                        <View>
                            <Button onPress={() => setChooseType(PARTICIPATION_GAME)} label={'Принять участие в игре'}
                                    size={{width: 281, height: 50}}/>
                        </View>
                    </View>
                </GestureRecognizer>
            </ScreenMask>
        )
    }

    if (chooseType === CREATE_GAME) {

        return (
            <ScreenMask>
                <GestureRecognizer
                    onSwipeLeft={(state) => setChooseType(false)}
                    style={{
                        flex: 1,
                    }}
                >
                    <View style={styles.btnBlock}>
                        <View style={styles.btnActiveGames}>
                            <Button onPress={() => {
                                setChooseType(false);
                                navigation.navigate('ActiveGames');
                            }}
                                    label={'Активные игры'}
                                    size={{width: 281, height: 50}}
                            />
                        </View>
                        <View>
                            <Button onPress={() => {
                                setChooseType(false);
                                navigation.navigate('BoardGames');
                            }}
                                    label={'Настольные игры'}
                                    size={{width: 281, height: 50}}
                            />
                        </View>
                    </View>
                </GestureRecognizer>
            </ScreenMask>
        )
    }

}

export default Index;

