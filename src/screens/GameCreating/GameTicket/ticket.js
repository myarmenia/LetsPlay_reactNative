import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { font, RH, RW } from '@/theme/utils'
import { _storageUrl } from '@/constants'
import { ICON, WHITE } from '@/theme/colors'
import { useSelector } from 'react-redux'

import Row from '@/components/wrappers/row'
import { Players } from '@/assets/TestData'
import User from '@/components/User/user'
function Ticket({ game, initialState, name, dates }) {
  const { avatar } = useSelector(({ auth }) => auth.user)
  return (
    <View style={{}}>
      <View style={styles.ticketImgBlock}>
        <Image style={styles.ticketImg} source={{ uri: _storageUrl + game?.img }} />
      </View>
      <View>
        <View style={styles.firstTextBlock}>
          <Text style={styles.ticketText}>Тип игры:</Text>
          <Text style={styles.ticketTextTwo}>{name}</Text>
        </View>
        <View style={styles.ticketTextBlock}>
          <Text style={styles.ticketText}>Дата и время игры:</Text>
          {console.log(dates[0])}
          <Text style={styles.ticketTextTwo}>
            {dates[0]
              .substr(0, 10)
              .split('-')
              .reverse()
              .join('-') + dates[0].substr(10, dates[1].length)}
          </Text>
        </View>
        <View style={styles.ticketTextBlock}>
          <Text style={styles.ticketText}>Количество игроков:</Text>
          <Text style={styles.ticketTextTwo}>
            от {initialState?.number_of_players_from} до {initialState?.number_of_players_to}
          </Text>
        </View>
        <View style={styles.ticketTextBlock}>
          <Text style={styles.ticketText}>Возраст игроков:</Text>
          <Text style={styles.ticketTextTwo}>
            {initialState?.age_restrictions_from}-{initialState?.age_restrictions_to}
          </Text>
        </View>
        <View style={styles.ticketTextBlock}>
          <Text style={styles.ticketText}>Половой признак игроков:</Text>
          <Text style={styles.ticketTextTwo}>
            {initialState?.players_gender == 'm'
              ? 'М'
              : initialState?.players_gender == 'Ж'
              ? 'Ж'
              : 'Без ограничений'}
          </Text>
        </View>
        <View style={styles.ticketTextBlock}>
          <Text style={styles.ticketText}>Адрес проведения игры:</Text>
          <Text style={styles.ticketTextTwo}>{initialState?.address_name}</Text>
        </View>
        <View style={styles.ticketTextBlock}>
          <Text style={styles.ticketText}>Дата и время окончания поиска игроков:</Text>
          <Text style={styles.ticketTextTwo}>
            {dates[1]
              .substr(0, 10)
              .split('-')
              .reverse()
              .join('-') + dates[1].substr(10, dates[1].length)}
          </Text>
        </View>
        <View style={styles.ticketTextBlock}>
          <Text style={styles.ticketText}>Стоимость входного билета на игру:</Text>
          <Text style={styles.ticketTextTwo}>
            {initialState?.ticket_price ? initialState?.ticket_price : 0} руб.
          </Text>
        </View>
        <Row wrapper={{ ...styles.ticketTextBlock }}>
          <Text style={styles.ticketText}>Организатор игры:</Text>
          <View style={{ width: RW(60), marginLeft: RW(20) }}>
            <User
              size={40}
              user={Players[8]}
              onPressItem={{
                item: <User user={Players[8]} size={390} />,
                modalClose: false,
              }}
            />
          </View>
        </Row>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ticketImgBlock: {
    alignItems: 'center',
    top: '4%',
  },
  ticketTextBlock: {
    marginBottom: RH(16),
  },
  firstTextBlock: {
    justifyContent: 'space-between',
    marginRight: RW(18),
    marginBottom: RH(24),
  },
  ticketText: {
    ...font('regular', 14, WHITE, 20),
    marginLeft: RW(31),
    marginBottom: RH(6),
  },
  ticketTextTwo: {
    ...font('bold', 16, ICON, 20),
    marginLeft: RW(31),
  },
  ticketImg: {
    width: RW(206),
    height: RH(218),
    resizeMode: 'contain',
  },
})

export default Ticket
