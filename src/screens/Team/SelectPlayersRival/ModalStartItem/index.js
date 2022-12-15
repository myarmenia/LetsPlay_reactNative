import React from 'react';
import {Text, View} from "react-native";
import {styles} from "./style";


function Index() {

    return (
        <View style={styles.bg}>
            <Text style={styles.text}>Необходимо утвердить состав игроков команды на игру!</Text>
        </View>
    );
}

export default Index;
