import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import Soccer from "@/assets/imgs/games/soccer.png";
import style from "../style";
import {useNavigation} from "@react-navigation/native";


function Index(props) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate('PrivateChat')} style={style.chatItemBlock}>
            <Image style={style.chatItemImg} source={Soccer}/>
            <Text style={style.itemData}>07.07.22 , 18:30, Пресненская наб. 25</Text>
            <Text style={style.time}>1:01</Text>
        </TouchableOpacity>
    );
}

export default Index;
