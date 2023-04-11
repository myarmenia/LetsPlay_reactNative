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
import LightButton from '@/assets/imgs/Button'
// import CircleAdd from '@/components/buttons/circleAdd'
import { useDispatch, useSelector } from 'react-redux'
import { getGamesOnlyNames } from '@/store/Slices/GamesSlice'
import { searchGame, setFindedGames } from '@/store/Slices/TeamSlice'

const JoinGame = ({ route }) => {
  const props = route?.params
  const dispatch = useDispatch()
  const { nameOfGames } = useSelector(gameSlice => gameSlice.games)
  const { findedGames } = useSelector(({ teams }) => teams)

  const freeOrPaid = [
    { id: 4, text: 'Бесплатно', checked: true },
    { id: 5, text: 'Платно', checked: false },
  ]
  const chooseGameType = [
    { id: 1, text: 'Игры из Ваших предпочтений', checked: true },
    { id: 2, text: 'Все игры', checked: false },
    { id: 3, text: 'Выбрать игру', checked: false },
  ]
  const navigation = useNavigation()

  //states
  const [showGameTypes, setShowGameTypes] = useState(false)
  const [addressName, setAddressName] = useState(route?.params?.address_name)
  const [price, setPrice] = useState('')
  const [gameTypes, setGameTypes] = useState(nameOfGames)
  const [list, setList] = useState(chooseGameType)
  const [free, setFree] = useState(freeOrPaid)
  //datesState
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  //errors
  const [priceError, setPriceError] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const checkChecks = gameTypes.some(elm => elm.checked === true)
  useEffect(() => {
    !nameOfGames.length && dispatch(getGamesOnlyNames())
    dispatch(setFindedGames([]))
  }, [])

  useEffect(() => {
    setGameTypes(nameOfGames)
  }, [nameOfGames])

  const showHideError = () => {
    if (!checkChecks && list[2].checked == true) {
      setErrorMessage(true)
    } else {
      setErrorMessage(false)
    }
    if (!price.length && Boolean(free.find(el => el.checked).text == 'Платно')) {
      setPriceError(true)
    } else {
      setPriceError(false)
    }
    if (!priceError && !errorMessage) {
      let ids = gameTypes?.filter(el => el?.checked).map(el => el?.id)
      const formData = new FormData()
      if (!free[0].checked) {
        formData.append('price', true)
      }
      formData.append('latitude', props?.fromMap ? props?.latitude : addressName?.lat)
      formData.append('longitude', props?.fromMap ? props.longitude : addressName?.lng)
      formData.append(
        'address_name',
        props?.fromMap ? props?.address_name : addressName?.address_name,
      )
      formData.append('game_of_your_choice', !list[1].checked ? true : false)
      formData.append('dateFrom', startDate.toISOString().substring(0, 10))
      formData.append('dateTo', endDate.toISOString().substring(0, 10))
      formData.append('ids', ids)
      dispatch(searchGame(formData, navigation, setError))
    } else {
      console.log('error')
    }
  }

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

        {list.find(el => el.checked).text === 'Выбрать игру' ? (
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

          <SearchAddresses
            navigateTo="Join"
            setAddressName={setAddressName}
            addressName={addressName}
            show={false}
          />
          <View style={{ top: '-3%' }}>
            <Text style={styles.someTitle}>Стоимость входного билета в игру</Text>
            <RadioBlock list={free} onChange={setFree} />
            {free.find(el => el.checked).text === 'Платно' ? (
              <>
                <View style={styles.priceInput}>
                  <TextInput
                    style={styles.priceInputText}
                    placeholder={'Сумма оплаты до'}
                    onChangeText={e => setPrice(e)}
                    placeholderTextColor={ICON}
                    keyboardType="number-pad"
                  />
                </View>
                {priceError && <Text style={styles.errorText}>Обязательное поле</Text>}
              </>
            ) : null}
          </View>
        </View>
      </ScrollView>
      {error ? <Text style={styles.errorText}>Не найденно</Text> : null}
      <View
        style={[
          styles.bottomButton,
          {
            bottom: RH(20),
            height: RH(36),
            width: '100%',
            alignItems: 'flex-end',
            backgroundColor: 'transparent',
          },
        ]}
      >
        <LightButton
          label={'Готово'}
          onPress={() => {
            showHideError()
          }}
          size={{ width: RW(144), height: '100%' }}
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
    top: RH(15),
    left: RW(20),
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
    // marginVertical: RH(10),
  },
  datesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: RH(20),
    width: RW(380),
    alignSelf: 'center',
    // marginBottom: RH(30),
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
