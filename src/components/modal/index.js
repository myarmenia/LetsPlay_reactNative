import React, { useMemo, useState } from 'react'
import { View } from 'react-native'
import Modal from 'react-native-modal'
import { styles } from './style'
import BtnCloseModal from '@/assets/imgs/btnCloseModal'

function Index({ modalVisible, item, btnClose, setIsVisible, backgroundColor }) {
  console.log(modalVisible)
  const [isModalVisible, setModalVisible] = useState(true)

  useMemo(() => {
    setModalVisible(modalVisible)
  }, [modalVisible])

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  return (
    <View style={{ flex: 1 }}>
      <Modal
        onBackdropPress={() => {
          setModalVisible(false)
          setIsVisible(false)
        }}
        isVisible={isModalVisible}
      >
        <View style={[styles.body, backgroundColor]}>
          {btnClose ? (
            <View style={styles.close} onPress={toggleModal}>
              <BtnCloseModal />
            </View>
          ) : null}
          {item}
        </View>
      </Modal>
    </View>
  )
}

export default Index
