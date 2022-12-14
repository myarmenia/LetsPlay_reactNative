import React, {useEffect, useMemo, useState} from 'react';
import {Button, Pressable, Text, View} from "react-native";
import Modal from "react-native-modal";
import {useNavigation} from "@react-navigation/native";

function Index({modalVisible, item, setIsVisible, backgroundColor,navigation}) {
    const [isModalVisible, setModalVisible] = useState(true);
    const navigate = useNavigation()

    useMemo(() => {
        setModalVisible(modalVisible)
    }, [modalVisible])

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <View style={[{flex: 1, backgroundColor: backgroundColor},]}>
            <Modal onBackdropPress={() => {
                setModalVisible(false)
                setIsVisible(false)
                navigate.navigate(navigation)
            }} isVisible={isModalVisible}>
                {item}
            </Modal>
        </View>
    );
}

export default Index;
