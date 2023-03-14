import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import LeftArrow from '../../../../../assets/svgs/leftArrow'
import InfoSvg from '@/assets/svgs/infoSvg'
import Row from '@/components/wrappers/row'
import CircleSvg from '@/assets/svgs/CircleSvg'
import { RW } from '@/theme/utils'
import { useNavigation } from '@react-navigation/native'

const PrivateChatHeader = ({ setModalVisible }) => {
  const navigation = useNavigation()

  return (
    <Row wrapper={{ justifyContent: 'space-between', alignItems: 'center' }}>
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
    </Row>
  )
}

export default PrivateChatHeader

const styles = StyleSheet.create({})
