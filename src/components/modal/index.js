import React, {useEffect, useMemo, useState} from 'react'
import {Button, Pressable, Text, View} from 'react-native'
import Modal from 'react-native-modal'

<<<<<<< HEAD
function Index({ modalVisible, item, setIsVisible, modalClose,navigation,navigationText }) {
    const [isModalVisible, setModalVisible] = useState(true)
    console.log(navigationText)
=======
function Index({modalVisible, item, setIsVisible, modalClose, navigation, navigationText}) {
    const [isModalVisible, setModalVisible] = useState(true)
>>>>>>> a6bf9b1f955cf66f812a859938c3c3fcf62b5f1b
    useMemo(() => {
        setModalVisible(modalVisible)
    }, [modalVisible])

    const toggleModal = () => {
        setModalVisible(!isModalVisible)
    }

    return (
<<<<<<< HEAD
        <View style={{ flex: 1 }}>
=======
        <View style={{flex: 1}}>
>>>>>>> a6bf9b1f955cf66f812a859938c3c3fcf62b5f1b
            <Modal
                onBackdropPress={() => {
                    if (modalClose) {
                        setModalVisible(true)
                        setIsVisible(true)
                        navigation ? navigation.navigate(navigationText) : null
                    } else {
                        setModalVisible(false)
                        setIsVisible(false)
                        navigation ? navigation.navigate(navigationText) : null
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
