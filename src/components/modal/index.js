import React, {useEffect, useMemo, useState} from 'react';
import {Button, Pressable, Text, View} from "react-native";
import Modal from "react-native-modal";

function Index({modalVisible, item, setIsVisible , modalClose }) {
    const [isModalVisible, setModalVisible] = useState(true);

    useMemo(()=>{
        setModalVisible(modalVisible)
    },[modalVisible])

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={{ flex: 1 }}>
            <Modal onBackdropPress={() => {
                if (modalClose){
                    setModalVisible(true)
                    setIsVisible(true)
                }else {
                    setModalVisible(false)
                    setIsVisible(false)
                }
            }}  isVisible={isModalVisible}>
                {item}
            </Modal>
        </View>
    );
}

export default Index;
