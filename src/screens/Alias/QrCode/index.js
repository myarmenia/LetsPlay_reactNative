import React, { useState } from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import Modal from '@/components/modal'
import ScreenMask from '@/components/wrappers/screen'
import Rules from './ModalRules'
import QrTest from '@/assets/imgs/qrTest.jpg'
import Button from '@/assets/imgs/Button'
import { RH, RW } from '@/theme/utils'
import { WHITE } from '@/theme/colors'
import { useNavigation } from '@react-navigation/native'

function Index({ route }) {
  const commandsCount = route?.params
  const navigation = useNavigation()
  return (
    <ScreenMask>
      <View>
        <View style={styles.body}>
          <Text style={styles.title}>Пригласить игроков</Text>
          <View style={styles.qrBlock}>
            <Image style={styles.qr} source={QrTest} />
          </View>
          <Button
            onPress={() => navigation.navigate('InviteTeamPlayers', commandsCount)}
            size={styles.btn}
            label={'Продолжить'}
          />
        </View>
      </View>
    </ScreenMask>
  )
}
const styles = StyleSheet.create({
  title: {
    color: WHITE,
    textAlign: 'center',
    fontSize: 24,
  },
  body: {
    marginTop: RW(125),
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
  },
  qrBlock: {
    width: RW(281),
    height: RH(280),
    marginTop: RH(127),
    marginBottom: RH(90),
  },
  qr: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  btn: {
    width: 281,
    height: 48,
  },
})

export default Index
