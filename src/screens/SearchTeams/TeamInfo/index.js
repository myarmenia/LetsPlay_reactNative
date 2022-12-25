import React from 'react';
import {Image, Text, View} from "react-native";
import ScreenMask from "@/components/wrappers/screen";
import style from './styles';
import BgMyTem from "@/assets/bgMyTem";
import Button from "@/assets/imgs/Button";
import {BLACK} from "@/theme/colors";
import {font} from "@/theme/utils";

function Index({navigation, route}) {
    const team=route.params;

    // const team=    {
    //         id: '12345678',
    //         name: 'ФК Динамо',
    //         address: 'Пресненская наб. 25',
    //         image: 'https://kassir-ru.ru/d/screenshot_26.jpg',
    //         navigationTo: ""
    //     }

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
                    <Button onPress={()=>navigation.navigate('Home')} size={{width:360, height:48}} label={'Присоеденится к команде'} labelStyle={font('bold', 18, BLACK)}/>
                </View>
            </View>

        </ScreenMask>
    );
}

export default Index;
