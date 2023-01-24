import React from 'react';
import {Image, Text, View} from "react-native";
import ScreenMask from "@/components/wrappers/screen";
import style from './styles';
import BgMyTem from "@/assets/bgMyTem";
import Button from "@/assets/imgs/Button";
import {BLACK} from "@/theme/colors";
import {font, RH, RW} from "@/theme/utils";
import {Players} from "@/assets/TestData";
import User from "@/assets/imgs/user/user";

function Index({navigation, route}) {
    const team = route.params;

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
            <View style={style.imageBlock}>
                <Image style={style.image} source={{uri: team.image}}/>
            </View>
            <View style={{alignItems: 'center'}}>
                <Text style={style.text}>Адрес нахождения команды</Text>
                <Text style={style.text}>{team.address}</Text>
            </View>
            <View style={style.line}/>
            <View style={{flexDirection: 'row' , alignItems: 'center' , marginBottom: RH(15)}}>
                <Text style={{...style.text , marginLeft: RW(15)}}>Организатор команды:</Text>
                <View style={{marginLeft: RW(15)}}>
                <User size={40} user={Players[3]} onPressItem={{
                    item: <User user={Players[3]} size={390}/>,
                    modalClose:false,
                }}/>
                </View>
            </View>
            <View style={{flexDirection: 'row' , alignItems: 'center' , marginBottom: RH(15)}}>
                <Text style={{...style.text , marginLeft: RW(15)}}>Администратор команды:</Text>
                <View style={{marginLeft: RW(15)}}>
                <User size={40} user={Players[8]} onPressItem={{
                    item: <User user={Players[8]} size={390}/>,
                    modalClose:false,
                }}/>
                </View>
            </View>
                <View style={style.btn}>
                    <Button onPress={() => navigation.navigate('Home')} size={{width: 360, height: 48}}
                            label={'Присоединиться к команде'} labelStyle={font('bold', 18, BLACK)}/>
                </View>
        </ScreenMask>
    );
}

export default Index;
