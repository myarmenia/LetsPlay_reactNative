import React from 'react'
import { Image, Text, View } from 'react-native'
import Soccer from '@/assets/imgs/games/soccer.png'
import { RH, RW } from '@/theme/utils'
import style from '@/screens/GameCreating/style'
import ShareSvg from '@/assets/svgs/shareSvg'
import Detail from '@/assets/imgs/detail.png'
import moment from 'moment'
import User from "@/assets/imgs/user/user";
import {Players} from "@/assets/TestData";

function Ticket(props) {
  const { image, game, data } = props
  return (
    <View>
      {!image ? (
        <View style={style.ticketImgBlock}>
          <Image style={style.ticketImg} source={game.image} />
        </View>
      ) : null}
      <View>
        <View style={style.firstTextBlock}>
          <Text style={style.ticketText}>Тип игры:</Text>
          <Text style={style.ticketTextTwo}>{game.title}</Text>
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>
            Дата и время игры:
          </Text>
          <Text style={style.ticketTextTwo}>
            {moment(data.gameDayDate).format('DD.MM.YY')} ,{' '}
            {moment(data.gameDayTime).format('HH:mm')}
          </Text>
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>
            Количество игроков:
          </Text>
          <Text style={style.ticketTextTwo}>
           от {data.playerCountFrom} до {data.playerCountTo}
          </Text>
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>
            Возраст игроков:
          </Text>
          <Text style={style.ticketTextTwo}>
            {data.ageFrom}-{data.ageTo}
          </Text>
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>Половой признак игроков: {data.gender}</Text>
          <Text style={style.ticketTextTwo}>{data.gender}</Text>
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>Адрес проведения игры:</Text>
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>Дата и время окончания поиска игроков:</Text>
          <Text style={style.ticketTextTwo}>
            {moment(data.lastDayDate).format('DD.MM.YY')} ,{' '}
            {moment(data.lastDayTime).format('HH:mm')}
          </Text>
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>Стоимость входного билета на игру:</Text>
          <Text style={style.ticketTextTwo}>{data.priceValue ? data.priceValue : 0} руб.</Text>
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>Организатор игры:</Text>
          <View style={{width: RW(60) , marginLeft: RW(20)}}>
            <User size={40} user={Players[0]} onPressItem={{
              item: <User user={Players[0]} size={390}/>,
              modalClose:false,
            }}/>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Ticket
