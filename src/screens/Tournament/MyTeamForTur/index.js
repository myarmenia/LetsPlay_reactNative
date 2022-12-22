import React , {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import ScreenMask from "@/components/wrappers/screen";
import style from './style';
import BgMyTem from "@/assets/bgMyTem";
import {RH, RW} from "@/theme/utils";
import Button from "@/assets/imgs/Button";
import Modal from "@/components/modal";
import modalStyle from '@/screens/GameCreating/style'


const myTeam = [
    {
        id: '12345678',
        name: 'ФК Динамо',
        address: 'Пресненская наб. 25',
        image: 'https://kassir-ru.ru/d/screenshot_26.jpg',
        navigationTo: ""
    },
    {
        id: '1284778',
        name: 'ФК ЦСКА',
        address: 'Пресненская наб. 25',
        image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/f/f4/FC_CSKA_Moscow_Logo.svg/1200px-FC_CSKA_Moscow_Logo.svg.png'
    }
]


function Index(props) {
    const {navigation, route } = props
    const { flag , isTeam } = route.params
    const [isVisible, setIsVisible] = useState(false)
    const [success, setSuccess] = useState(false)
    const [modalClose, setModalClose] = useState(true)
    useEffect(() => {
        if (flag) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }, [])
    const item = (arr) => arr.map((item, i) =>
                <TouchableOpacity key={i} onPress={()=> navigation.navigate('SelectPlayersTournament' , {item  , isTeam})}>
            <View  style={style.homeBlock}>
                <View style={{zIndex: 1, flexDirection: 'row', alignItems: 'center'}}>
                    <View style={style.imageBlock}>
                        <Image style={style.image} source={{uri: item.image}}/>
                    </View>
                    <View style={style.textBlock}>
                        <Text style={style.text}>{item.name}</Text>
                        <Text style={style.text}>{item.address}</Text>
                        <Text style={style.text}>({item.id})</Text>
                    </View>
                </View>
                <View style={{position: "absolute",}}>
                    <BgMyTem/>
                </View>
            </View>
        </TouchableOpacity>)

    return (
        <ScreenMask>
            <Text style={style.title}>Мои команды</Text>
            <View>
                {item(myTeam)}
            </View>
            <Modal
                modalClose={modalClose}
                modalVisible={isVisible}
                setIsVisible={setIsVisible}
                btnClose={false}
                item={
                    !success ? (
                        <View style={modalStyle.firstTicketModalBlock}>
                            <Text style={{ ...modalStyle.text, width: RW(209), marginBottom: 0 }}>
                                Для завершения необходимо оплатить стоимость комиссий за организацию платной игры.
                            </Text>
                            <Text style={{ ...modalStyle.text, marginTop: 0, marginBottom: RH(42) }}>
                                {' '}
                                Стоимость: 100 р
                            </Text>
                            <Button
                                onPress={() => {
                                    setSuccess(true)
                                    setModalClose(false)
                                }}
                                size={{ width: 144, height: 36 }}
                                label={'Оплатить'}
                            />
                        </View>
                    ) : (
                        <View style={modalStyle.secondTicketModalBlock}>
                            <Text style={modalStyle.text}>Оплата прошла успешна. Вы успешно создали игру!</Text>
                        </View>
                    )
                }
            />
        </ScreenMask>
    );
}

export default Index;
