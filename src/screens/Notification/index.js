import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import style from '@/screens/Notification/style'
import { RH, RW } from '@/theme/utils'
import { ACTIVE } from '@/theme/colors'
import CloseSvg from '@/assets/svgs/closeSvg'
import Button from '@/assets/imgs/Button'

function Index(props) {
  return (
    <ScreenMask>
      <View style={style.container}>
        <Text style={style.title}>Уведомления</Text>
        <TouchableOpacity style={style.deleteAll}>
          <Text style={style.deleteAllText}>Очистить все</Text>
        </TouchableOpacity>
        <View style={style.noteBlock}>
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
        </View>
      </View>
    </ScreenMask>
  )
}

export default Index
