import React from 'react';
import {Text, View} from "react-native";
import style from "@/screens/Team/SelectTeam/ModalItem/style";

function Index(props) {
    return (
        <View style={style.bg}>
            <Text style={style.text}>Вы успешно создали</Text>
            <Text  style={style.text}>командную игру!</Text>
        </View>
    );
}

export default Index;
