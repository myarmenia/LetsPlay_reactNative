import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ScreenMask from '@/components/wrappers/screen'
import DateComponent from '@/components/DateComponent'
import SearchAddresses from '@/screens/Map/SearchAddresses'
import RadioBlock from '@/components/RadioBlock'
import { ICON } from '@/theme/colors'
import LightButton from '@/assets/imgs/Button'
import { RH, RW } from '@/theme/utils'
import { useNavigation } from '@react-navigation/native'

const CommandLeadCreate = ({ route }) => {
  const { savedTeam } = useSelector(({ teams }) => teams)
  const { game } = route.params
  const priceList = [
    {
      id: 1,
      text: 'Бесплатно',
      checked: true,
    },
    {
      id: 2,
      text: 'Платно',
      checked: false,
    },
  ]
  const playersChoose = [
    {
      id: 1,
      text: 'Весь состав команды',
      checked: true,
    },
    {
      id: 2,
      text: 'Выбрать игроков',
      checked: false,
    },
  ]
  const [radioPrice, setRadioPrice] = useState(priceList)
  const [radioPlayers, setRadioPlayers] = useState(playersChoose)
  const [addressName, setAddressName] = useState('')
  const { betweenPlayers } = useSelector(({ teams }) => teams)
  useEffect(() => {
    console.log(betweenPlayers)
  }, [])
  const navigation = useNavigation()
  return (
    <ScreenMask>
      <View style={styles.mainContainer}>
        <View style={styles.dateBox}>
          <DateComponent showTime={true} title="Дата и время начала игры"></DateComponent>
        </View>
        <View style={styles.mapBox}>
          <SearchAddresses
            navigateTo="CommandLeadCreate"
            setAddressName={setAddressName}
            addressName={addressName}
            show={false}
          />
        </View>
        <RadioBlock
          list={radioPrice}
          onChange={setRadioPrice}
          titleStyle={{ color: ICON, left: '3%', paddingVertical: RH(10) }}
          title="Стоимость входного билета в игру"
        />
        <RadioBlock
          list={radioPlayers}
          titleStyle={{ color: ICON, left: '3%', paddingVertical: RH(10) }}
          onChange={setRadioPlayers}
          title="Участие игроков"
        />
      </View>
      <View style={styles.bottomBtn}>
        <LightButton
          label={'Далее>>'}
          onPress={() => navigation.navigate('ChoosePlayers', savedTeam)}
        />
      </View>
    </ScreenMask>
  )
}

export default CommandLeadCreate

const styles = StyleSheet.create({
  mainContainer: {
    width: '96%',
    top: '2%',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
  },
  dateBox: {
    width: '100%',
    alignSelf: 'center',
  },
  bottomBtn: {
    position: 'absolute',
    bottom: RH(15),
    right: RW(5),
  },
  mapBox: {
    paddingVertical: RH(20),
  },
})
