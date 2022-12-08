import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Message from '@/screens/Auth/shared/container/message'
import ScreenMask from '@/components/wrappers/screen'
import LightButton from '@/assets/imgs/Button'
import { ICON, WHITE } from '@/theme/colors'
import Row from '@/components/wrappers/row'
import { font, RH } from '@/theme/utils'

const SignInHome = () => {
  const navigation = useNavigation()

  return (
    <ScreenMask>
      <View style={styles.bottom}>
        <Message
          containerStyle={styles.message}
          message={
            'Осуществите вход в приложение. Для входа в «Играем?» вы можете воспользоваться своей стр ВК, или вести данные логина и пароля в приложении.'
          }
        />
        <Row justifyContent={'space-between'}>
          <LightButton
            label={'Вход'}
            onPress={() => {
              navigation.push('SignIn')
            }}
          />
          <LightButton
            label={'Вход  из ВК'}
            onPress={() => {
              // TODO
            }}
          />
        </Row>
        <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
          Зарегистрироваться
        </Text>
      </View>
    </ScreenMask>
  )
}

export default SignInHome

const styles = StyleSheet.create({
  bottom: {
    left: 0,
    right: 0,
    bottom: RH(30),
    position: 'absolute',
  },
  title: {
    marginVertical: RH(12),
    ...font('regular', 18, WHITE, 24),
  },
  link: {
    marginTop: RH(20),
    alignSelf: 'center',
    textDecorationLine: 'underline',
    ...font('regular', 14, ICON, 24),
  },
  message: {
    marginBottom: RH(22),
  },
})
