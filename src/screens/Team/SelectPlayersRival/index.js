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
import PlayerList from "@/components/playerList";

function Index({route, navigation}) {

    const [modalStart, setModalStart] = useState(true);
    const [modalEnd, setModalEnd]=useState(false)
    const [user, setUser] = useState([]);
    const [activeUser, setActiveUser]=useState([])
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

    return (
        <ScreenMask>
            <View>
                <Text style={styles.title}>ФК “Динамо”</Text>
            </View>

            <PlayerList players={Players} isSelected={true} setActivePlayers={setActiveUser} activePlayers={activeUser}  />
            <View style={styles.btn}>
                <Button
                    onPress={()=>navigation.navigate('Home')}
                        size={{width: 281, height: 48}}
                        label={'Подтвердить'}/>
            </View>
            {/*<Modal modalClose={setModal} modalVisible={modal} setIsVisible={setModal} item={<ModalItem/>}/>*/}
            <Modal setIsVisible={setModalStart} modalVisible={modalStart} modalClose={false} item={<ModalStartItem/>}/>
        </ScreenMask>
    );
}

export default Index;
