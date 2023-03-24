import { Pressable, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import LeftArrow from '../../../../../assets/svgs/leftArrow'
import InfoSvg from '@/assets/svgs/infoSvg'
import Row from '@/components/wrappers/row'
import CircleSvg from '@/assets/svgs/CircleSvg'
import { RW } from '@/theme/utils'
import { useNavigation } from '@react-navigation/native'
import ModalItem from './Modal'

const PrivateChatHeader = ({ gameID }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const navigation = useNavigation()
  console.log(gameID)
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'space-around',
        justifyContent: 'space-between',
        // position: 'absolute',
        width: '100%',
        top: '3%',
        zIndex: 9999,
      }}
    >
      <Pressable onPress={() => navigation.goBack()}>
        <Row>
          <LeftArrow />
          <View style={{ marginLeft: RW(8) }}>
            <CircleSvg count={10} />
          </View>
        </Row>
      </Pressable>
      <Pressable onPress={() => setModalVisible(true)}>
        <InfoSvg />
      </Pressable>
      {modalVisible ? (
        <ModalItem modalVisible={modalVisible} setModalVisible={setModalVisible} gameID={gameID} />
      ) : null}
    </View>
  )
}

export default PrivateChatHeader

const styles = StyleSheet.create({})
