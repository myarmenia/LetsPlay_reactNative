import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import style from '@/screens/ChatScreens/Chats/style'
import ArrowRight from '@/assets/svgs/ArrowRight'
import VectorIcon from '@/assets/svgs/vectorSvg'
import { RH, RW } from '@/theme/utils'
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
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={style.titlee}>Организатор игры:</Text>
          <Image
            source={require('../../../assets/imgs/detail.png')}
            resizeMode={'contain'}
            style={{ height: RH(30), width: RW(20), paddingLeft: RW(50) }}
          />
        </View>
      </View>
    </View>
  )
}

export default ModalItem

const styles = StyleSheet.create({})
