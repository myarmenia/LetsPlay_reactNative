import React, { useRef } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native'
import style from '@/screens/Chat/style'
import SmilesSvg from '@/assets/svgs/SmilesSvg'
import { ICON, WHITE } from '@/theme/colors'
import VoiceSvg from '@/assets/svgs/voiceSvg'
import { RH, RW } from '@/theme/utils'
import LeftArrow from '@/assets/svgs/leftArrow'
import InfoSvg from '@/assets/svgs/infoSvg'
import Modal from '@/components/modal'
import Ticket from '@/screens/GameCreating/GameTicket/ticket'

function Index(props) {
  const { navigation } = props
  const inputRef = useRef()

  return (
    <ScreenMask>
      <TouchableNativeFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          {...(Platform.OS === 'ios'
            ? {
                behavior: 'padding',
                keyboardVerticalOffset: RH(10),
                enabled: true,
              }
            : {})}
        >
          <View style={{ flex: 1 }}>
            <View style={style.chatHeadBlock}>
              <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                <LeftArrow />
              </TouchableOpacity>
              <View style={style.countBlock}>
                <Text style={style.countText}>12</Text>
              </View>
              <TouchableOpacity style={style.infoSvgButton}>
                <InfoSvg />
              </TouchableOpacity>
            </View>
            <View style={{ height: '80%', marginTop: 'auto' }}>
              <View style={style.chatBlock}>
                <View style={style.userItemBlock}>
                  <View style={style.userItem}></View>
                  <Text style={style.timeText}>1:01</Text>
                </View>
                <View style={style.myItemBlock}>
                  <Text style={style.timeText}>1:01</Text>
                  <View style={style.myItem}></View>
                </View>
                <View style={style.userItemBlock}>
                  <View style={style.userItem}></View>
                  <Text style={style.timeText}>1:01</Text>
                </View>
                <View style={style.myItemBlock}>
                  <Text style={style.timeText}>1:01</Text>
                  <View style={style.myItem}></View>
                </View>
                <View style={style.userItemBlock}>
                  <View style={style.userItem}></View>
                  <Text style={style.timeText}>1:01</Text>
                </View>
                <View style={{ ...style.myItemBlock, marginBottom: 0 }}>
                  <Text style={style.timeText}>1:01</Text>
                  <View style={style.myItem}></View>
                </View>
              </View>
            </View>
            <View style={style.chatInput}>
              <Pressable
                onPress={() => {
                  console.log(inputRef.current)
                  inputRef.current.focus()
                }}
              >
                <SmilesSvg />
              </Pressable>
              <TextInput
                ref={inputRef}
                style={{ width: RW(276), color: ICON }}
                placeholder={'Сообщение...'}
                placeholderTextColor={ICON}
              />
              <Pressable>
                <VoiceSvg />
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableNativeFeedback>
    </ScreenMask>
  )
}

export default Index
