import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import style from './style'
import CloseSvg from '@/assets/svgs/closeSvg'
import Button from '@/assets/imgs/Button'

function NotificationScreen(props) {
  return (
    <ScreenMask>
      <View style={style.container}>
        <Text style={style.title}>Уведомления</Text>
        <TouchableOpacity style={style.deleteAll}>
          <Text style={style.deleteAllText}>Очистить все</Text>
        </TouchableOpacity>
        <ScrollView style={style.noteBlock}>
          <View style={style.firstLine}>
            <View style={style.circle}></View>
            <Text style={style.noteText}>Пожалуйста завершите игру.</Text>
            <TouchableOpacity style={style.deleteButton}>
              <CloseSvg />
            </TouchableOpacity>
          </View>
          <View style={style.finishButton}>
            <Button label={'Завершить'} />
            <Text style={style.time}>03:12</Text>
          </View>
        </ScrollView>
      </View>
    </ScreenMask>
  )
}

export default NotificationScreen
