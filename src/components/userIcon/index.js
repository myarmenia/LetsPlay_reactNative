import React from 'react';
import {Image, Text, View} from "react-native";
import style from './styles';
import UserDefault from "@/assets/imgs/user/userDefault";
import UserLine from "@/assets/imgs/user/userLine";
import UserCircle from "@/assets/imgs/user/userCircle";
import {font, RH, RW} from "@/theme/utils";
import {WHITE} from "@/theme/colors";
import Vk from "@/assets/imgs/vk";


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
            <View style={isMax?style.statusBlockMax:style.statusBloc}>
                <UserCircle isMax={isMax} count={user.organizer} status={user.status}/>
                <UserLine isMax={isMax}  status={user.status}/>
                <UserCircle isMax={isMax} count={user.participant}   status={user.status}/>
            </View>
            <View style={{...style.titleBigBloc,marginTop:RW(isMax?10:3), width:RW(isMax?210:50)}}>
                <View style={style.titleBloc}>
                    <Text style={font('bold',isMax?RW(10):RW(2),WHITE)}>Создано игр</Text>
                    <Text style={font('bold',isMax?RW(16):RW(4),WHITE)}>{user.gamesCreated}</Text>
                </View>
                <View style={style.titleBloc}>
                    <Text  style={font('bold',isMax?RW(10):RW(2),WHITE)}>Принято игр</Text>
                    <Text style={font('bold',isMax?RW(16):RW(4),WHITE)}>{user.acceptedGames}</Text>
                </View>
                <View style={style.titleBloc}>
                    <Text  style={font('bold',isMax?RW(10):RW(2),WHITE)}>Отменено игр</Text>
                    <Text style={font('bold',isMax?RW(16):RW(4),WHITE)}>{user.canceledGames}</Text>
                </View>
                <View style={style.titleBloc}>
                    <Text  style={font('bold',isMax?RW(10):RW(2),WHITE)}>Отклонено игр</Text>
                    <Text style={font('bold',isMax?RW(16):RW(4),WHITE)}>{user.disabledGames}</Text>
                </View>
            </View>
            <View   style={{...style.soc, marginTop:isMax?RH(10):RH(3)}}>
                <Vk size={isMax?50:11}/>
            </View>

        </View>
    );
}

export default Index;
