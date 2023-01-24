// import React from 'react';
import {Text, TextInput, View} from "react-native";
import ScreenMask from "@/components/wrappers/screen";
import Button from "@/assets/imgs/Button";
import style from './styles';
import {font, RW} from "@/theme/utils";
import {BLACK, DARK_BLUE, ICON} from "@/theme/colors";
import {RH} from '@/theme/utils'

function Index({navigation}) {
    return (
        <ScreenMask style={{paddingHorizontal: RW(32)}}>
            <Text style={style.title}> Создать команду</Text>
            <Text style={{...font('regular', 16, ICON , 24),
                marginVertical:RH(20)
            }}
            >
                Поиск команды
            </Text>
            <TextInput style={style.input} placeholderTextColor={ICON} placeholder={'ID карточка/По названию команды'}></TextInput>
            <View style={{alignItems: 'center', paddingRight: RW(10), width: '100%'}}>
                <Button size={style.btn} label={'Поиск'} onPress={() => navigation.navigate('TeamSearchRes')}/>
            </View>
        </ScreenMask>
    );
}

export default Index;
