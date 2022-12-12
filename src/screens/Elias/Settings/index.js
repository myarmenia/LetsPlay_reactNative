import React from 'react';
import {Image, Text, View} from "react-native";
import ScreenMask from "@/components/wrappers/screen";
import Button from "@/assets/imgs/Button";
import styles from '@/screens/Elias/Settings/styles'

function Index({ navigation}) {

    return (
        <ScreenMask>
            <Text style={styles.title}>Настройки</Text>
            <View style={{marginLef:'auto',  alignItems:'center'}}>
                    <Button onPress={() => navigation.navigate('DifficultyLevel')} size={styles.btn} label={'Продолжить'}/>
            </View>
        </ScreenMask>
    );
}

export default Index;
