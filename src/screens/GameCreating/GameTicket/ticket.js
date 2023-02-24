import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { RH, RW } from '@/theme/utils'
import style from '@/screens/GameCreating/style'
import Row from '@/components/wrappers/row'

function Ticket(props) {
  const { image, game, data } = props
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={style.ticketBlock}>
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
          <Text style={style.ticketText}>Дата и время игры:</Text>
          <Text style={style.ticketTextTwo}>
            {/* {moment(data.gameDayDate).format('DD.MM.YY')} ,{' '}
            {moment(data.gameDayTime).format('HH:mm')} */}
          </Text>
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>Количество игроков:</Text>
          <Text style={style.ticketTextTwo}>
            от {game.number_of_players_from} до {game.number_of_players_to}
          </Text>
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>Возраст игроков:</Text>
          <Text style={style.ticketTextTwo}>
            {game.age_restrictions_from}-{game.age_restrictions_to}
          </Text>
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>Половой признак игроков: {game.gender}</Text>
          <Text style={style.ticketTextTwo}>{game.gender}</Text>
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>Адрес проведения игры:</Text>
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>Дата и время окончания поиска игроков:</Text>
          <Text style={style.ticketTextTwo}>{game.end_date}</Text>
        </View>
        <View style={style.ticketTextBlock}>
          <Text style={style.ticketText}>Стоимость входного билета на игру:</Text>
          <Text style={style.ticketTextTwo}>{game.ticket_price ? game.ticket_price : 0} руб.</Text>
        </View>
        <Row wrapper={{ ...style.ticketTextBlock, marginBottom: RH(150) }}>
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
    </ScrollView>
  )
}

export default Ticket
