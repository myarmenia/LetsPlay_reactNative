import React, {useState} from 'react';
import ScreenMask from "@/components/wrappers/screen";
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import style from "./style";
import image from "@/assets/imgs/userImage.png";
import TickSvg from "@/assets/svgs/tickSvg";
import InputBlock from "@/screens/Profile/MyDetails/inputBlock";
import RadioBlock from "@/screens/Profile/MyDetails/radioBlock";
import DateBlock from "@/screens/Profile/MyDetails/DateBlock";
import Modal from "@/components/modal";
import Button from "@/assets/imgs/Button";
import DarkButton from "@/assets/imgs/DarkButton";
import {RW} from "@/theme/utils";


function Index(props) {
    const  {navigation}= props
    const [isVisible, setIsVisible] = useState(false);
    return (
        <ScreenMask>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={style.container}>
                <Text style={style.title}>Мои данные</Text>
                <View style={style.imgBlock}>
                    <Image style={style.image} source={image}/>
                    <TickSvg style={style.tickSvg}/>
                </View>
                <View style={style.formBlock}>
                    <InputBlock text={'Имя:'} placeholder={'Имя'}/>
                    <InputBlock text={'Фамилия:'} placeholder={'Фамилия'}/>
                    <RadioBlock list={[[1, 'М', true], [2, 'Ж', false],]} title={'Пол:'}/>
                    <DateBlock/>
                    <InputBlock text={'Контактный тел.:'} placeholder={'тел.'}/>
                    <InputBlock text={'E-mail:'} placeholder={'E-mail'}/>
                    <InputBlock text={'Vk:'} placeholder={'Profile link'}/>
                    <TouchableOpacity onPress={() => setIsVisible(true)} style={style.logOut}><Text style={style.logOutText}>Выход из аккаунта</Text></TouchableOpacity>
                    <Modal modalVisible={isVisible} setIsVisible={setIsVisible}
                           item={
                                <View style={style.myDetailsModal}>
                                   <Text style={{...style.inputTitle , textAlign: 'center' , lineHeight: RW(25)}}>Вы точно хотите выйти из аккаунта?</Text>
                                    <View style={style.modalButtonsBlock}>
                                        <Button onPress={() => navigation.navigate('Home')} light={true}  size={{width: 100, height: 36}} label={'Да'}/>
                                        <DarkButton onPress={() => setIsVisible(false)} light={false}  size={{width: 100, height: 36}} label={'Нет'}/>
                                    </View>
                               </View>
                              }
                    />
                </View>
            </ScrollView>
        </ScreenMask>
    );
}

export default Index;
