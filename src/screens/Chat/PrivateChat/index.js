import React, { useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import style from '@/screens/Chat/style'
import SmilesSvg from '@/assets/svgs/SmilesSvg'
import { ICON } from '@/theme/colors'
import VoiceSvg from '@/assets/svgs/voiceSvg'
import { RH, RW } from '@/theme/utils'
import LeftArrow from '@/assets/svgs/leftArrow'
import InfoSvg from '@/assets/svgs/infoSvg'
import Modal from '@/components/modal'
import Ticket from '@/screens/GameCreating/GameTicket/ticket'

function Index(props) {
  const [isVisible, setIsVisible] = useState(false)
  const { navigation } = props
  return (
    <ScreenMask>
      <View style={style.chatHeadBlock}>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <LeftArrow />
        </TouchableOpacity>
        <View style={style.countBlock}>
          <Text style={style.countText}>12</Text>
        </View>
        <TouchableOpacity onPress={() => setIsVisible(true)} style={style.infoSvgButton}>
          <InfoSvg />
        </TouchableOpacity>
      </View>
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
        <View style={style.myItemBlock}>
          <Text style={style.timeText}>1:01</Text>
          <View style={style.myItem}></View>
        </View>
      </View>
      <View style={{ height: RH(784) }}></View>
      <View style={style.chatInput}>
        <SmilesSvg />
        <TextInput
          style={{ width: RW(276) }}
          placeholder={'Сообщение...'}
          placeholderTextColor={ICON}
        />
        <VoiceSvg />
      </View>
      <Modal
        modalVisible={isVisible}
        setIsVisible={setIsVisible}
        btnClose={false}
        item={
          <View style={style.infoModal}>
            <Ticket image={true} />
          </View>
        }
      />
      <View style={style.chatInput}>
        <SmilesSvg />
        <TextInput
          style={{ width: RW(276) }}
          placeholder={'Сообщение...'}
          placeholderTextColor={ICON}
        />
        <VoiceSvg />
      </View>
    </ScreenMask>
  )
}

export default Index
