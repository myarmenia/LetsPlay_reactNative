import React, { useRef, useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import {
  Image,
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
import CloseSvg from '@/assets/svgs/closeSvg'
import AddFollowerSvg from '@/assets/svgs/AddFolloerSvg'
import ShareSvg from '@/assets/svgs/shareSvg'
import VectorIcon from '@/assets/svgs/vectorSvg'
import ArrowRight from '@/assets/svgs/ArrowRight'
import SvgComponent from '@/assets/imgs/user/userDefault'

function Index(props) {
  const { navigation } = props
  const inputRef = useRef()
  const [isVisible, setIsVisible] = useState(false)
  const ModalItem = () => {
    return (
      <View style={style.regulationBlock}>
        <View style={style.rowBox}>
          <ArrowRight />
          <View style={{ paddingLeft: 10 }}>
            <VectorIcon />
          </View>
        </View>
        <View style={style.titleColumnBox}>
          <Text style={style.titlee}>Тип игры: Триста</Text>
          <Text style={style.titlee}>Дата и время игры: 07.07.2022, 18:30</Text>
          <Text style={style.titlee}>Количество игроков: от 10 до 12</Text>
          <Text style={style.titlee}>Возраст игроков: 25-35</Text>
          <Text style={style.titlee}>Половой признак игроков: М</Text>
          <Text style={style.titlee}>Адрес проведения игры:</Text>
          <Text style={style.titlee}>Дата и время окончания поиска игроков: 07.07.2022, 18:30</Text>
          {/* <Text style={style.title}>Стоимость входного билета на игру: 500 руб.</Text> */}
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={style.titlee}>Организатор игры:</Text>
            <Image
              source={require('../../../assets/imgs/detail.png')}
              resizeMode={"contain"}
              style={{ height: RH(30), width: RW(20), paddingLeft:RW(50) }}
            />
          </View>
        </View>
      </View>
    )
  }
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
