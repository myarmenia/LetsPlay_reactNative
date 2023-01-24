import React, {useEffect, useMemo, useState} from 'react'
import {Button, Pressable, Text, View} from 'react-native'
import Modal from 'react-native-modal'
import {useNavigation} from "@react-navigation/native";

function Index({modalVisible, item, setIsVisible, modalClose, navigationText}) {
    const [isModalVisible, setModalVisible] = useState(true)
    const navigation = useNavigation()
    useMemo(() => {
        setModalVisible(modalVisible)
    }, [modalVisible])

    const toggleModal = () => {
        setModalVisible(!isModalVisible)
    }

    return (
        <View style={{flex: 1}}>
            <Modal
                onBackdropPress={() => {
                    if (modalClose) {
                        setModalVisible(true)
                        setIsVisible(true)
                        navigationText ? navigation.navigate(navigationText) : null
                    } else {
                        setModalVisible(false)
                        setIsVisible(false)
                        navigationText ? navigation.navigate(navigationText) : null
                    }
                }}
                isVisible={isModalVisible}
            >
                {item}
            </Modal>
        </View>
    )
}

export default Index
