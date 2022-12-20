import React, {useState} from 'react';
import Modal from "@/components/modal";
import {Text, View} from "react-native";
import style from "@/screens/Team/GameCategory/ModalItem/style";
import Button from "@/assets/imgs/Button";
import {font, RH, RW} from "@/theme/utils";
import {BLACK, WHITE} from "@/theme/colors";
import DarkButton from "@/assets/imgs/DarkButton";
import ScreenMask from "@/components/wrappers/screen";

function Index(props) {
    const [modal, setModal]=useState(true)

    return (
        <ScreenMask>
            <Text>Searcxax</Text>
            {/*<Modal*/}
            {/*    setIsVisible={setModal}*/}
            {/*    modalVisible={true}*/}
            {/*    modalClose={true}*/}
            {/*    item={*/}
            {/*        <View style={style.bg}>*/}
            {/*            <View style={style.textBlock}>*/}
            {/*                <Text style={style.title}>Вы хотите организовать</Text>*/}
            {/*                <Text style={style.title}>игру между игроками</Text>*/}
            {/*                <Text style={style.title}>команды?</Text>*/}
            {/*            </View>*/}
            {/*            <View style={style.btnBlock}>*/}
            {/*                /!*<Button size={{width:RW(100), height:RH(36)}} onPress={()=>{navigation.navigate('SelectTeam', game), setModalVisible(false) }} label={'Да'} labelStyle={font('bold', 18, BLACK)}/>*!/*/}
            {/*                /!*<DarkButton size={{width:RW(100), height:RH(36)}} onPress={()=>{navigation.navigate('SearchTeam', game), setModalVisible(false)}} label={'Нет'} labelStyle={font('bold', 18, WHITE)}/>*!/*/}
            {/*            </View>*/}
            {/*        </View>*/}
            {/*    }*/}
            {/*/>*/}
        </ScreenMask>
    );
}

export default Index;
