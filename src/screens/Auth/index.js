import React, { useDebugValue, useState } from 'react'
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import ScreenMask from '@/components/wrappers/screen'
import LightButton from '@/assets/imgs/Button'
import Row from '@/components/wrappers/row'
import { font, RH } from '@/theme/utils'
import { WHITE } from '@/theme/colors'
import VKIcon from '@/assets/imgs/vk'
import InAppBrowser from 'react-native-inappbrowser-reborn'
import { io } from 'socket.io-client'
import { useDispatch } from 'react-redux'
import { setToken } from '@/store/Slices/AuthSlice'
const socket = io.connect('https://to-play.ru/vk/authorize', {
  transports: ['websocket'],
})
const token = () => {
  return Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2)
}
let expiredToken
const AuthHome = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const openLink = async (url) => {
    try {
      socket.on('message', (data) => {
        console.log(data)
        if (data.vkAuthInfo && data.token == expiredToken) {
          InAppBrowser.close()
          console.log(data.vkAuthInfo)
          dispatch(setToken(expiredToken))
        }
      })
      const canOpenURL = await Linking.canOpenURL(url)
      if ((await InAppBrowser?.isAvailable()) && canOpenURL) {
        await InAppBrowser.open(url, {
          //iOS Properties
          animated: true,
          readerMode: true,
          modalEnabled: true,
          enableBarCollapsing: false,
          dismissButtonStyle: 'cancel',
          // preferredControlTintColor: 'white',
          modalPresentationStyle: 'formSheet',
          modalTransitionStyle: 'coverVertical',
          //Android Properties
          showTitle: true,
          enableUrlBarHiding: true,
          enableDefaultShare: true,
          navigationBarColor: 'black',
          showInRecents: true,
          forceCloseOnRedirection: false,
          navigationBarDividerColor: 'white',
          animations: {
            startEnter: 'slide_in_top',
            startExit: 'slide_out_left',
            endEnter: 'slide_in_bottom',
            endExit: 'slide_out_right',
          },
        }).then(() => {
          socket.off('message')
        })
      }
    } catch (err) {
      socket.off('message')
      console.log(err)
    }
  }

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
              expiredToken = token()
              console.log(expiredToken)
              openLink(`http://to-play.ru/vk/auth.html?${expiredToken}`)
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
