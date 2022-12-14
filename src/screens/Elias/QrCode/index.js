import React, { useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import Modal from '@/components/modal'
import ScreenMask from '@/components/wrappers/screen'
import Rules from './ModalRules'
import QrTest from '@/assets/imgs/qrTest.jpg'
import Button from '@/assets/imgs/Button'
import styles from '@/screens/Elias/QrCode/styles'

function Index({ navigation }) {
  const [modalRules, setModalRules] = useState(true)

  return (
    <ScreenMask>
      <View>
        <View style={styles.body}>
          <Modal
            modalVisible={modalRules}
            setIsVisible={setModalRules}
            item={<Rules setModalRules={setModalRules} />}
          />
          <Text style={styles.title}>Пригласить игроков</Text>
          <View style={styles.qrBlock}>
            <Image style={styles.qr} source={QrTest} />
          </View>
          <Button
            onPress={() => navigation.navigate('EliasPlayers')}
            size={styles.btn}
            label={'Продолжить'}
          />
        </View>
      </View>
    </ScreenMask>
  )
}

export default Index
