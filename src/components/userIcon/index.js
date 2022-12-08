import React from 'react';
import {Image, Text, View} from "react-native";
import style from './styles';
import UserDefault from "@/assets/imgs/user/userDefault";


function Index({user, isMax}) {

    return (
        <View style={style.bg}>
            <View style={isMax?style.imgMaxBlock:style.imgBlock}>
                {user.image?<Image style={style.image} source={{uri:user.image}}/>:<UserDefault isMax={isMax}/>}

            </View>
            <View style={style.nameBlock}>
                <Text style={isMax?style.nameMax:style.name}>{user.lName?user.lName:'Имя'}</Text>
                <Text style={isMax?style.nameMax:style.name}>{user.fName?user.fName:'Фамилия'}</Text>
            </View>
        </View>
    );
}

export default Index;
