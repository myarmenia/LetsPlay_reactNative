import React from 'react'
import { Image, Text, View } from 'react-native'
import Soccer from '@/assets/imgs/games/soccer.png'
import { RH, RW } from '@/theme/utils'
import style from '@/screens/GameCreating/style'
import ShareSvg from '@/assets/svgs/shareSvg'
import Detail from '@/assets/imgs/detail.png'

function Ticket(props) {
  const { image } = props
  return (
    <View>
      {!image ? (
        <View style={style.ticketImgBlock}>
          <Image style={style.ticketImg} source={Soccer} />
        </View>
      ) : null}
      <View>
        <View style={style.firstTextBlock}>
          <Text style={style.ticketText}>Тип игры: Футбол</Text>
          <ShareSvg />
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>Дата и время игры: 07.07.2022, 18:30</Text>
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>Количество игроков: от 10 до 12</Text>
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>Возраст игроков: 25-35</Text>
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>Половой признак игроков: М</Text>
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>Адрес проведения игры:</Text>
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>Дата и время окончания поиска </Text>
          <Text style={style.ticketText}>игроков: 07.07.2022, 18:30</Text>
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>Стоимость входного билета на игру: 200 руб.</Text>
        </View>
        <View style={{ ...style.ticketTextBlock, flexDirection: 'row' }}>
          <Text style={style.ticketText}>Организатор игры:</Text>
          <Image source={Detail} style={style.detailImg} />
        </View>
      </View>
    </View>
  )
}

export default Ticket
