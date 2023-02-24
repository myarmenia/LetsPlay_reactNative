import React, { useEffect, useRef, useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native'
import style from '@/screens/Chat/style'
import SmilesSvg from '@/assets/svgs/SmilesSvg'
import { ICON } from '@/theme/colors'
import VoiceSvg from '@/assets/svgs/voiceSvg'
import { RH, RW } from '@/theme/utils'
import LeftArrow from '@/assets/svgs/leftArrow'
import InfoSvg from '@/assets/svgs/infoSvg'
import Modal from '@/components/modal'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { getChats, setChats } from '@/store/Slices/ChatsSlice'
import SendSvg from '../assets/SendSvg'
import ModalItem from './ModalItem'
import { sendMessage } from '../../../store/Slices/ChatsSlice'

function Index(props) {
  const [isVisible, setIsVisible] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const chats = useSelector(({ chats }) => chats.chats)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const gameID = props.route.params.id
  const inputRef = useRef()

  const sendFunc = () => {
    dispatch(
      sendMessage({
        message: inputValue,
        create_game: gameID,
      }),
    )
    dispatch(
      setChats([...chats, { message: inputValue, create_game: gameID, updatedAt: new Date() }]),
    )
    setInputValue('')
  }
  useEffect(() => {
    dispatch(getChats(gameID))
  }, [])

  console.log(chats, 'chats')
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
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <LeftArrow />
              </TouchableOpacity>
              <View style={style.countBlock}>
                <Text style={style.countText}>0</Text>
              </View>
              <TouchableOpacity
                style={style.infoSvgButton}
                onPress={() => {
                  setIsVisible(true)
                }}
              >
                <InfoSvg />
              </TouchableOpacity>
            </View>
            {isVisible && (
              <Modal
                modalVisible={isVisible}
                setIsVisible={setIsVisible}
                btnClose={false}
                item={<ModalItem />}
              />
            )}
            <View style={{ flex: 1 }}>
              <ScrollView style={style.chatBlock}>
                {chats?.map((chat) => {
                  return (
                    <View style={style.myItemBlock}>
                      <Text style={style.timeText}>
                        {new Date(chat.updatedAt).toLocaleTimeString().slice(0, 4)}
                      </Text>
                      <View style={style.myItem}>
                        <Text style={{ color: '#fff' }}>{chat.message}</Text>
                      </View>
                    </View>
                  )
                })}
                <View style={style.userItemBlock}>
                  <View style={style.userItem}></View>
                  <Text style={style.timeText}>1:01</Text>
                </View>
                <View style={style.myItemBlock}>
                  <Text style={style.timeText}>1:01</Text>
                  <View style={style.myItem}></View>
                </View>
              </ScrollView>
            </View>
            <View style={style.chatInput}>
              <Pressable
                onPress={() => {
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
                value={inputValue}
                onChangeText={setInputValue}
              />
              {inputValue.length ? (
                <Pressable onPress={sendFunc}>
                  <SendSvg />
                </Pressable>
              ) : (
                <Pressable>
                  <VoiceSvg />
                </Pressable>
              )}
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableNativeFeedback>
    </ScreenMask>
  )
}

export default Index
