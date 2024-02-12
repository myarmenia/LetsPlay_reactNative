import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import GameType from '../gameType'
import { BACKGROUND, ICON, RED, WHITE } from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'
import ScreenMask from '@/components/wrappers/screen'
import RadioBlock from '@/components/RadioBlock'
import DateComponent from '@/components/DateComponent'
import SearchAddresses from '@/screens/Map/SearchAddresses'
import LightButton from '@/components/buttons/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getGames } from '@/store/Slices/GamesSlice'
import { searchGame, setFindedGames } from '@/store/Slices/TeamSlice'
import { isTablet } from 'react-native-device-info';


const JoinGame = () => {
  const { address, longitude, latitude } = useSelector(({ address }) => address)
  const isTabletDevice = isTablet();


  const dispatch = useDispatch()
  const games = useSelector(({ games }) => games.games)

  // const freeOrPaid = [
  //   { id: 4, text: 'Бесплатно', checked: true },
  //   { id: 5, text: 'Платно', checked: false },
  // ]
  const chooseGameType = [
    { id: 1, text: 'Игры из Ваших предпочтений', checked: true },
    { id: 2, text: 'Все игры', checked: false },
    { id: 3, text: 'Выбрать игру', checked: false },
  ]
  const navigation = useNavigation()

  //states
  const [showGameTypes, setShowGameTypes] = useState(false)
  const [addressError, setAddressError] = useState(false)

  const [gameTypes, setGameTypes] = useState()
  const [list, setList] = useState(chooseGameType)
  //datesState
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  //errors
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const checkChecks = gameTypes?.some((elm) => elm.checked === true)

  const showHideError = () => {
    if (!checkChecks && list[2].checked) {
      setErrorMessage(true)
    } else {
      setErrorMessage(false)
    }
    if (!address) {
      setAddressError('Обязательное поле для заполнения')
    } else if (!longitude || !latitude) {
      setAddressError('Укажите точный адрес')
    } else {
      setAddressError(false)
    }
    if (address && latitude && longitude && startDate <= endDate) {
      let ids = gameTypes?.filter((el) => el?.checked).map((el) => el?.id)
      const formData = {
        latitude: latitude,
        longitude: longitude,
        address_name: address,
        game_of_your_choice: !list[1].checked,
        date_from: startDate.toISOString().substring(0, 10),
        data_to: endDate.toISOString().substring(0, 10),
        games: ids,
      }
      dispatch(searchGame(formData, navigation, setError))
    } else {
    }
  }

  useEffect(() => {
    dispatch(setFindedGames([]))
  }, [])

  useEffect(() => {
    if (!games.length) {
      dispatch(getGames())
    }

    let gameTypesData = games.map((elm) => {
      return {
        id: elm._id,
        name: elm.name,
        checked: false,
      }
    })
    setGameTypes(gameTypesData)
  }, [games])
  return (
    <ScreenMask>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.gameTypesContainer}>
          <RadioBlock
            list={list}
            left={0}
            title="Игра"
            titleStyle={styles.radioTitle}
            onChange={setList}
          />
        </View>

        {list.find((el) => el.checked).text === 'Выбрать игру' ? (
          <GameType
            showGameTypes={showGameTypes}
            setShowGameTypes={setShowGameTypes}
            gameTypes={gameTypes}
            setGameTypes={setGameTypes}
            errorMessage={errorMessage}
          />
        ) : null}
        <View>
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.someTitle}>Дата игры</Text>
            <View style={styles.datesContainer}>
              <DateComponent
                showTime={false}
                dateAndroidStyle={{ width: RW(170) }}
                dateValue={startDate}
                setDate={setStartDate}
              />
              <View style={styles.dash}></View>
              <DateComponent
                showTime={false}
                dateAndroidStyle={{ width: RW(170) }}
                dateValue={endDate}
                setDate={setEndDate}
                minDate={startDate}
              />
            </View>
          </View>

          <SearchAddresses />
          {addressError && <Text style={styles.errorText}>{addressError}</Text>}
        </View>
      </ScrollView>
      {error ? <Text style={styles.errorText}>Не найденно</Text> : null}
      <View
        style={[
          styles.bottomButton,
          {
            bottom: RH(35),
            height: RH(36),
            width: '100%',
            alignItems: 'flex-end',
            backgroundColor: 'transparent',
          },
        ]}
      >
        <LightButton
          label={'Готово'}
          onPress={showHideError}
          size={{ width: isTabletDevice ? RH(120) : RW(144), height: '100%' }}
        />
      </View>
    </ScreenMask>
  )
}

export default JoinGame

const styles = StyleSheet.create({
  gameTypesContainer: {
    marginTop: '10%',
    left: RW(18),
    backgroundColor: 'transparent',
  },
  radioTitle: {
    color: ICON,
  },
  errorText: {
    ...font('medium', 18, RED),
  },
  openedGameBtn: {
    borderRadius: RW(10),
    backgroundColor: BACKGROUND,
    width: RW(380),
    height: RH(48),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceInput: {
    backgroundColor: BACKGROUND,
    width: RW(190),
    height: RH(50),
    flexDirection: 'row',
    borderRadius: RW(10),
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: RW(13),
  },
  priceInputText: {
    color: ICON,
    width: '80%',
    marginLeft: RW(15),
    fontSize: RW(16),
  },
  someTitle: {
    color: ICON,
    marginLeft: RW(10),
    alignSelf: 'flex-start',
    top: '15%',
  },
  datesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: RH(20),
    width: RW(380),
    alignSelf: 'center',
  },
  dash: {
    width: RW(10),
    height: 0,
    top: '4%',
    borderColor: ICON,
    borderWidth: RW(2),
    borderRadius: RW(2),
  },
  bottomButton: {
    marginLeft: 'auto',
    marginRight: RW(10),
    backgroundColor: 'transparent',
  },
  loading: {
    ...font('regular', 15, WHITE),
    left: '-4%',
  },
})
