import React, {useEffect, useMemo, useState} from 'react'
import {Button, Pressable, Text, View} from 'react-native'
import Modal from 'react-native-modal'

function Index({modalVisible, item, setIsVisible, modalClose, navigation, navigationText}) {
    const [isModalVisible, setModalVisible] = useState(true)
    console.log(navigationText)
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
