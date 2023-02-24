import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { RH, RW } from '@/theme/utils'
import style from '@/screens/GameCreating/style'
import Row from '@/components/wrappers/row'
import { _storageUrl } from '@/constants'

function Ticket({ game, data, initialState, name }) {
  return (
    <View style={{}}>
      <View style={style.ticketImgBlock}>
        <Image style={style.ticketImg} source={{ uri: _storageUrl + game?.img }} />
      </View>
      <View>
        <View style={style.firstTextBlock}>
          <Text style={style.ticketText}>Тип игры:</Text>
          <Text style={style.ticketTextTwo}>{name}</Text>
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>Дата и время игры:</Text>
          <Text style={style.ticketTextTwo}>{initialState?.start_date}</Text>
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>Количество игроков:</Text>
          <Text style={style.ticketTextTwo}>
            от {initialState?.number_of_players_from} до {initialState?.number_of_players_to}
          </Text>
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>Возраст игроков:</Text>
          <Text style={style.ticketTextTwo}>
            {initialState?.age_restrictions_from}-{initialState?.age_restrictions_to}
          </Text>
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>Половой признак игроков:</Text>
          <Text style={style.ticketTextTwo}>
            {initialState?.players_gender == 'm'
              ? 'М'
              : initialState?.players_gender == 'Ж'
              ? 'Ж'
              : 'М/Ж'}
          </Text>
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>Адрес проведения игры:</Text>
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>Дата и время окончания поиска игроков:</Text>
          <Text style={style.ticketTextTwo}>{initialState?.end_date}</Text>
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>Стоимость входного билета на игру:</Text>
          <Text style={style.ticketTextTwo}>
            {initialState?.ticket_price ? initialState?.ticket_price : 0} руб.
          </Text>
        </View>
        <Row wrapper={{ ...style.ticketTextBlock }}>
          <Text style={style.ticketText}>Организатор игры:</Text>
          <View style={{ width: RW(60), marginLeft: RW(20) }}>
            {/* <User
              size={40}
              user={Players[6]}
              onPressItem={{
                item: <User user={Players[6]} size={390} />,
                modalClose: false,
              }}
            /> */}
            <Image source={require('./assets/user.png')} />
          </View>
        </Row>
      </View>
    </View>
  )
}

export default Ticket
