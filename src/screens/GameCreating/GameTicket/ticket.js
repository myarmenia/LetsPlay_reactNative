import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { font, RH, RW } from '@/theme/utils'
import { _storageUrl } from '@/constants'
import { ICON, WHITE } from '@/theme/colors'
import Row from '@/components/wrappers/row'
import { Players } from '@/assets/TestData'
import User from '@/components/User/user'
import FastImage from 'react-native-fast-image'
import { useSelector } from 'react-redux'

function Ticket({ game, initialState, name, dates }) {
  const { game_name, game_description } = useSelector((state) => state.game)

  const dateFotmat = (date) => {
    const date1 = new Date(date)
    // date1.setDate(date1.getDate() + 1)
    let fullDate
    if (date1.toLocaleDateString().includes('/')) {
      let x = date1.toLocaleDateString().split('/')
      let fullDateArray = [x[1], x[0], x[2]]
      fullDate = fullDateArray.map((e) => (e.length == 1 ? '0' + e : e)).join('.')
    } else {
      fullDate = date1
        .toLocaleDateString()
        .split('.')
        .map((e) => (e.length == 1 ? '0' + e : e))
        .join('.')
    }
    const timesArray = date1.toLocaleTimeString().split(':')
    if (date1.toLocaleTimeString().includes('PM') || date1.toLocaleTimeString().includes('AM')) {
      const hasPM = date1.toLocaleTimeString().includes('PM')
      if (hasPM && +timesArray[0] != 12) {
        timesArray[0] = +timesArray[0] + 12
      } else if (hasPM && +timesArray[0] == 12) {
        timesArray[0] = timesArray[0] - 12
      }
    }
    const fullTime =
      (timesArray[0].toString().length == 1 ? '0' + timesArray[0] : timesArray[0]) +
      ':' +
      (timesArray[1].toString().length == 1 ? '0' + timesArray[1] : timesArray[1])
    return `${fullDate} ${fullTime}`
  }
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: RH(50) }}>
      <View style={styles.ticketImgBlock}>
        <FastImage
          resizeMode="contain"
          style={styles.ticketImg}
          source={{ uri: _storageUrl + game?.img }}
        />
      </View>
      <View>
        <View style={styles.firstTextBlock}>
          <Text style={styles.ticketText}>Тип игры:</Text>
          <Text style={styles.ticketTextTwo}>{name}</Text>
        </View>
        {name == 'Своя игра' ? (
          <>
            <View style={styles.firstTextBlock}>
              <Text style={styles.ticketText}>Название игры:</Text>
              <Text style={styles.ticketTextTwo}>{game_name}</Text>
            </View>
            <View style={styles.firstTextBlock}>
              <Text style={styles.ticketText}>Описание игры:</Text>
              <Text style={styles.ticketTextTwo}>{game_description}</Text>
            </View>
          </>
        ) : null}
        <View style={styles.ticketTextBlock}>
          <Text style={styles.ticketText}>Дата и время игры:</Text>
          <Text style={styles.ticketTextTwo}>{dateFotmat(dates[0])}</Text>
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
          <Text style={styles.ticketTextTwo}>{dateFotmat(dates[1])}</Text>
        </View>
        <View style={styles.ticketTextBlock}>
          <Text style={styles.ticketText}>Стоимость входного билета на игру:</Text>
          <Text style={styles.ticketTextTwo}>
            {initialState?.ticket_price ? initialState?.ticket_price : 0} руб.
          </Text>
        </View>
        <Row wrapper={{ ...styles.ticketTextBlock }}>
          <Text style={styles.ticketText}>Организатор игры:</Text>
          <View style={{ width: RW(60), top: '-2%', marginLeft: RW(20) }}>
            <User
              size={45}
              user={Players[8]}
              onPressItem={{
                item: <User user={Players[8]} size={390} />,
                modalClose: false,
              }}
            />
          </View>
        </Row>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ticketImgBlock: {
    alignItems: 'center',
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
  },
})

export default Ticket
