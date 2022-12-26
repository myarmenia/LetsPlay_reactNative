import React from 'react'
import { Image, Text, View } from 'react-native'
import Soccer from '@/assets/imgs/games/soccer.png'
import { RH, RW } from '@/theme/utils'
import style from '@/screens/GameCreating/style'
import ShareSvg from '@/assets/svgs/shareSvg'
import Detail from '@/assets/imgs/detail.png'
import moment from "moment";

function Ticket(props) {
  const { image , game , data } = props
<<<<<<< HEAD
  console.log(game , 11111 , data)
=======
>>>>>>> a6bf9b1f955cf66f812a859938c3c3fcf62b5f1b
  return (
    <View>
      {!image ? (
        <View style={style.ticketImgBlock}>
          <Image style={style.ticketImg} source={game.image} />
        </View>
      ) : null}
      <View>
        <View style={style.firstTextBlock}>
          <Text style={style.ticketText}>Тип игры: {game.title}</Text>
          <ShareSvg />
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>Дата и время игры: {moment(data.gameDayDate).format('DD.MM.YY')} , {moment(data.gameDayTime).format('HH:mm')}</Text>
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>Количество игроков: от {data.playerCountFrom} до {data.playerCountTo}</Text>
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>Возраст игроков: {data.ageFrom}-{data.ageTo}</Text>
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>Половой признак игроков: {data.gender}</Text>
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>Адрес проведения игры:</Text>
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>Дата и время окончания поиска </Text>
          <Text style={style.ticketText}>игроков: {moment(data.lastDayDate).format('DD.MM.YY')} , {moment(data.lastDayTime).format('HH:mm')}</Text>
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>Стоимость входного билета на игру: {data.priceValue? data.priceValue : 0} руб.</Text>
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
