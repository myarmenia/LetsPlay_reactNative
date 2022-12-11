import React, {useState} from 'react';
import {Image, Text, View } from "react-native";
import ScreenMask from "@/components/wrappers/screen";
import Button from "@/assets/imgs/Button";
import styles from '@/screens/Elias/Settings/styles';


import Slider from '@react-native-community/slider';

function Index({ navigation}) {

    const [data, setData]=useState(0)



    return (

        <ScreenMask>
            <Text style={styles.title}>Настройки</Text>

            {/*<View style={styles.container}>*/}

            {/*        value={data}*/}
            {/*        onValueChange={value => setData(value)}*/}
            {/*    />*/}
            {/*    <Text>Value: {data}</Text>*/}
            {/*</View>*/}
            <View style={{marginLef:'auto',  alignItems:'center'}}>
                    <Button onPress={() => navigation.navigate('DifficultyLevel')} size={styles.btn} label={'Продолжить'}/>
            </View>
        </ScreenMask>
    );
}

export default Index;

