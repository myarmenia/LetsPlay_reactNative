import React from 'react';
import {Text, View} from "react-native";
import style from './style';
import Button from "@/assets/imgs/Button";
import DarkButton from "@/assets/imgs/DarkButton";
import {BLACK, WHITE} from "@/theme/colors";
import {font, RH, RW} from "@/theme/utils";
import {useNavigation} from "@react-navigation/native";
import ScreenMask from "@/components/wrappers/screen";


function Index({route}) {
    const navigation = useNavigation();
    const {game , data}=route.params;
    return (
        <ScreenMask>
            <View style={style.bg}>
                <View style={style.textBlock}>
                    <Text style={style.title}>Вы хотите организовать</Text>
                    <Text style={style.title}>игру между игроками</Text>
                    <Text style={style.title}>команды?</Text>
                </View>
                <View style={style.btnBlock}>
                    <Button size={{width: RW(100), height: RH(36)}} onPress={() => {
                        navigation.navigate('SelectTeam', {game, data})
                    }} label={'Да'} labelStyle={font('bold', 18, BLACK)}/>
                    <DarkButton size={{width: RW(100), height: RH(36)}} onPress={() => {
                        navigation.navigate('SearchTeam', {game, data})
                    }} label={'Нет'} labelStyle={font('bold', 18, WHITE)}/>
                </View>
            </View>
        </ScreenMask>
    );
}

export default Index;

