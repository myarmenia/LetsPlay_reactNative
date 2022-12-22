import React from 'react';
import ScreenMask from "@/components/wrappers/screen";
import {Text, TextInput, View} from "react-native";
import styles from  '../style'
import style from  './style'
import {RH, RW} from "@/theme/utils";
import {ICON} from "@/theme/colors";
import Button from "@/assets/imgs/Button";
import {useState} from "react";
import Modal from "@/components/modal";

function Index(props) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <ScreenMask>
            <View style={styles.container}>
                <Text style={{...styles.title , marginTop: RH(53) , marginBottom: RH(83)}}>Обратная связь</Text>
                <TextInput placeholderTextColor={ICON} placeholder={'Тема'} style={style.input}/>
                <TextInput placeholderTextColor={ICON} multiline={true}  numberOfLines={20} textAlignVertical={"top"} placeholder={'Сообщение'} style={{...style.input , height: RH(405)}}/>
                <View style={style.buttonBlock}><Button onPress={() => setIsVisible(true)} size={{width: 356 , height: 48}} label={'Отправить'}/></View>
                <Modal modalVisible={isVisible} setIsVisible={setIsVisible}
                       item={
                           <View style={style.feedbackModal}>
                               <Text style={style.modalText}>Спасибо за ваше сообщение. В ближайшее время с вами свяжется менеджер  приложение «Играем?».</Text>
                           </View>
                       }
                />
            </View>
        </ScreenMask>
    );
}

export default Index;
