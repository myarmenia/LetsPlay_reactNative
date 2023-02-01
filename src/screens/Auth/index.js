import React from 'react'
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import ScreenMask from '@/components/wrappers/screen'
import LightButton from '@/assets/imgs/Button'
import Row from '@/components/wrappers/row'
import { font, RH } from '@/theme/utils'
import { WHITE } from '@/theme/colors'
import VKIcon from '@/assets/imgs/vk'

const AuthHome = () => {
  const navigation = useNavigation()

  return (
    <ScreenMask>
      <View style={styles.bottom}>
        <Row justifyContent={'space-between'}>
          <LightButton
            label={'Вход'}
            onPress={() => {
              navigation.push('SignInStack')
            }}
          />
          <LightButton
            label={'Регистрация'}
            onPress={() => {
              navigation.push('SignUp')
            }}
          />
        </Row>
        <View style={styles.vk}>
          <Text style={styles.title}>Вход через</Text>
          <Pressable
            onPress={() => {
              Linking.openURL('https://to-play.ru/vk/auth.html')
            }}
          >
            <VKIcon />
          </Pressable>
        </View>
      </View>
    </ScreenMask>
  )
}

export default AuthHome

const styles = StyleSheet.create({
  bottom: {
    left: 0,
    right: 0,
    bottom: RH(30),
    position: 'absolute',
  },
  vk: {
    alignItems: 'center',
  },
  title: {
    marginVertical: RH(12),
    ...font('regular', 18, WHITE, 24),
  },
  message: {
    marginBottom: RH(65),
  },
})
