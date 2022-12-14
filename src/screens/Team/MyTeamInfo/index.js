import React from 'react';
import {Image, Text, View} from "react-native";
import ScreenMask from "@/components/wrappers/screen";
import style from './style';
import BgMyTem from "@/assets/bgMyTem";
import Button from "@/assets/imgs/Button";
import {BLACK} from "@/theme/colors";
import {font} from "@/theme/utils";

function Index({navigation, route}) {
    const team=route.params

    return (
        <ScreenMask>
            <Text style={style.team}>{team.name}</Text>
            <View style={style.imageBlock} >
                <Image style={style.image} source={{uri:team.image}}/>
            </View>
         <Text style={style.text}>Адрес нахождения команды</Text>
         <Text style={style.text}>{team.address}</Text>
            <View style={style.btns}>
                <View style={style.btn}>
                <Button size={{width:265, height:48}} label={'Состав'} labelStyle={font('bold', 18, BLACK)}/>
                </View>
                <Button onPress={()=>navigation.navigate('TeamSelectGameCategory', team)} size={{width:265, height:48}}  label={'Создать игру'} labelStyle={font('bold', 18, BLACK)}/>
            </View>

        </ScreenMask>
    );
}

export default Index;
