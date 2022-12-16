import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import ScreenMask from "@/components/wrappers/screen";
import Modal from "@/components/modal";
import ModalItem from "@/screens/Team/SelectTeam/ModalItem";
import {styles} from "@/screens/Team/SelectPlayers/style";
import {Players} from "@/assets/TestData";
import User from "@/assets/imgs/user/user";
import Button from "@/assets/imgs/Button";
import ModalStartItem from "@/screens/Team/SelectPlayersRival/ModalStartItem";

function Index({route, navigation}) {

    const [modalStart, setModalStart] = useState(true);
    const [modalEnd, setModalEnd]=useState(false)
    const [user, setUser] = useState([]);
    const data = route.params;

    // useEffect(() => {
    //     if (data.statusOrganizer === 'Весь состав команды') {
    //         setModal(true)
    //     }
    // }, [data.statusOrganizer])
    //
    // useEffect(() => {
    //     if (modal) {
    //         setTimeout(() => {
    //             navigation.navigate('Home')
    //         }, 2000)
    //     }
    // }, [modal])

    const handlerActiveUser = (id) => {
        if (user.includes(id)) {
            const temp = user.filter((item, i) => item !== id);
            setUser(temp)
        } else {
            setUser([...user, id])
        }
    }


    return (
        <ScreenMask>
            <View>
                <Text style={styles.title}>ФК “Динамо”</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
                <View style={styles.container}>
                    {Players.map((item, i) =>
                        <TouchableOpacity onPress={() => handlerActiveUser(item.id)} key={i}
                                          style={user.includes(item.id) ? styles.activeItem : styles.item}>
                            <User user={item}/>
                        </TouchableOpacity>
                    )}
                </View>
            </ScrollView>

            <View style={styles.btn}>
                <Button
                        size={{width: 281, height: 48}}
                        label={'Подтвердить'}/>
            </View>
            {/*<Modal modalClose={setModal} modalVisible={modal} setIsVisible={setModal} item={<ModalItem/>}/>*/}
            <Modal setIsVisible={setModalStart} modalVisible={modalStart} modalClose={false} item={<ModalStartItem/>}/>
        </ScreenMask>
    );
}

export default Index;
