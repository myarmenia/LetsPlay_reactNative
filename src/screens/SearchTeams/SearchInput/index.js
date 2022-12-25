// import React from 'react';
import {Text, TextInput, View} from "react-native";
import ScreenMask from "@/components/wrappers/screen";
import Button from "@/assets/imgs/Button";
import style from './styles';
import {font} from "@/theme/utils";
import {BLACK, DARK_BLUE} from "@/theme/colors";
import {RH} from '@/theme/utils'

function Index({navigation}) {
    return (
        <ScreenMask>
            <Text style={style.title}> Создать команду</Text>
            <Text style={{...font('bold', 16, DARK_BLUE),
                marginVertical:RH(20)
            }}
            >
                Поиск команды
            </Text>
            <TextInput style={style.input}
                       placeholderTextColor={DARK_BLUE}
                       placeholder={'ID карточка/По названию команды'}
            >

            </TextInput>
            <View style={{alignItems:'center'}}>
                <Button size={style.btn} label={'Поиск'}
                        onPress={navigation.navigate('TeamSearchRes')}
                        labelStyle={font('bold', 18, BLACK)}/>
            </View>
        </ScreenMask>
    );
}

export default Index;
