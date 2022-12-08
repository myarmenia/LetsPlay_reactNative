import React from 'react';
import {Image, Text, View} from "react-native";
import Button from "@/assets/imgs/Button";
import styles from '@/screens/Elias/Start/ModalItem/styles'
import User from "@/assets/imgs/user/user";
import {Players} from "@/assets/TestData";
import {RH} from "@/theme/utils";

function Index({setModal}) {

    return (
        <View style={styles.body}>
            <Text style={styles.title}>Объясняет</Text>
            <User user={Players[3]} isMax={true}/>
            <View style={{marginTop: RH(50)}}>
                <Button onPress={() => (setModal(false))} size={styles.btn} label={'Начать'}/>
            </View>
        </View>
    );
}

export default Index;
