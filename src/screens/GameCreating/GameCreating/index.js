import React, { useEffect, useState } from 'react'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { KeyboardAvoidingView, Platform, ScrollView, Text, View, StyleSheet } from 'react-native'
import { RH, RW, font } from '@/theme/utils'
//components
import Button from '@/assets/imgs/Button'
import Price from '@/components/inputs/price'
import Modal from '@/components/modal'
import SecondBlock from '@/components/forms/secondBlock'
import ScreenMask from '@/components/wrappers/screen'
import DarkButton from '@/assets/imgs/DarkButton'
import SearchAddresses from '../../Map/SearchAddresses'
import { ICON, LIGHT_LABEL, LIGHT_RED, WHITE } from '@/theme/colors'

// redux
import { useDispatch, useSelector } from 'react-redux'
import {
  setGame,
  setOrganizer_in_the_game,
  setPlayers_gender,
} from '@/store/Slices/GameCreatingSlice'
import RadioBlock from '@/components/RadioBlock'
import DateComponent from '@/components/DateComponent'

const GameCreating = ({ route }) => {
  const { game, response } = route?.params?.params
  const navigation = useNavigation()

  console.log(response)

  //states
  const initialState = useSelector((state) => state.game)
  const [flag, setFlag] = useState(false)
  const [modalOpen, setModalOpen] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [addressName, setAddressName] = useState()

  // error messages
  const [startDateError, setStartDateError] = useState(false)
  const [endDateError, setEndDateError] = useState(false)
  const [playersCuntError, setPlayersCuntError] = useState(false)
  const [ageError, setAgeError] = useState(false)
  const [addressError, setAddressError] = useState(false)

  //redux
  const dispatch = useDispatch()
  const [startDate, setStartDate] = useState({
    date: new Date(),
    time: new Date(),
  })
  const [endDate, setEndDate] = useState({
    date: new Date(new Date().setDate(startDate.date.getDate() - 1)),
    time: new Date(),
  })
  const [organizer_in_the_game, setOrganizer_in_the_gameState] = useState([
    { id: 1, text: 'Участвует', checked: true },
    { id: 2, text: 'Не участвует', checked: false },
  ])
  // const [priceList, setPriceList] = useState([
  //   { id: 1, text: 'Бесплатно', checked: true },
  //   { id: 2, text: 'Платно', checked: false },
  // ])
  const [genderList, setGenderList] = useState([
    { id: 1, text: 'М', checked: false, label: 'm' },
    { id: 2, text: 'Ж', checled: false, label: 'f' },
    { id: 3, text: 'Без ограничений', checked: true, label: 'm/f' },
  ])

  const timeFormat = (date) => {
    if (
      date.time.toLocaleTimeString().split(' ')[1] == 'PM' &&
      +date.time.toLocaleTimeString().slice(0, 2) != 12
    ) {
      return (
        +date.time.toLocaleTimeString().split(' ')[0].split(':')[0] +
        12 +
        ':' +
        date.time.toLocaleTimeString().split(':')[1]
      )
    } else if (date.time.toLocaleTimeString().split(' ')[0].split(':')[0].length == 1) {
      return (
        '0' +
        date.time.toLocaleTimeString().split(' ')[0].split(':')[0] +
        ':' +
        date.time.toLocaleTimeString().split(':')[1]
      )
    } else {
      return (
        date.time.toLocaleTimeString().split(' ')[0].split(':')[0] +
        ':' +
        date.time.toLocaleTimeString().split(':')[1]
      )
    }
  }

  const changedStartDate = startDate.date
    .toISOString()
    .substring(0, 10)
    .concat(' ' + timeFormat(startDate))
  const changedEndDate = endDate.date
    .toISOString()
    .substring(0, 10)
    .concat(' ' + timeFormat(endDate))

  const handleClick = () => {

    console.log("startDate.date", startDate.date)
    console.log("endDate.date",  endDate.date)
    console.log("startDate.date <= endDate.date", startDate.date <= endDate.date)
    if (!startDate) {
      setStartDateError('Обязательное поле для заполнения')
    } else {
      setStartDateError(null)
    }
    if (!endDate) {
      setEndDateError('Обязательное поле для заполнения')
    } else if (startDate.date < endDate.date) {
      setEndDateError('Введите корректную дату')
    } else {
      setEndDateError(null)
    }
    if (!initialState.age_restrictions_from || !initialState?.age_restrictions_to) {
      setAgeError('Обязательное поле для заполнения')
    } else if (
      +initialState?.age_restrictions_from < 0 ||
      +initialState?.age_restrictions_from > +initialState?.age_restrictions_to
    ) {
      setAgeError('Введите корректную возраст')
    } else {
      setAgeError(null)
    }

    if (!initialState.number_of_players_from || !initialState?.number_of_players_to) {
      setPlayersCuntError('Обязательное поле для заполнения')
    } else if (
      +initialState?.number_of_players_from < 0 ||
      +initialState?.number_of_players_from > +initialState?.number_of_players_to
    ) {
      setPlayersCuntError('Введите корректную число')
    } else {
      setPlayersCuntError(null)
    }
    if (!initialState?.latitude || !initialState?.longitude || !initialState.address_name) {
      setAddressError('Обязательное поле для заполнения')
    } else {
      setAddressError(null)
    }
    if (
      startDate &&
      endDate &&
      startDate.date >= endDate.date &&
      initialState.age_restrictions_from &&
      initialState?.age_restrictions_to &&
      +initialState?.number_of_players_from > 0 &&
      +initialState?.number_of_players_from < +initialState?.number_of_players_to &&
      ((initialState?.latitude && initialState?.longitude) || initialState.address_name)
    ) {
      navigation.navigate('GameTicket', {
        params: {
          initialState,
          game,
          name: game.name,
          dates: [changedStartDate, changedEndDate],
        },
      })
    }
  }
  useEffect(() => {
    dispatch(setGame(game._id))
    setIsVisible(true)
  }, [])

  return (
    <ScreenMask>
      <KeyboardAvoidingView
        {...(Platform.OS === 'ios'
          ? {
              behavior: 'padding',
              keyboardVerticalOffset: RH(10),
              enabled: true,
              style: { flex: 1 },
            }
          : {})}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <DateComponent
            title="Дата и время начала игры"
            containerStyle={{
              width: RW(380),
              marginTop: RH(24),
              alignSelf: 'center',
            }}
            rowStyle={{
              justifyContent: 'flex-start',
            }}
            dateValue={startDate.date}
            timeValue={startDate.time}
            setDate={(date) => {
              console.log("setDate",new Date(date).toLocaleDateString())
              setStartDate({ ...startDate, date })
            }}
            setTime={(time) => setStartDate({ ...startDate, time })}
          />
          {startDateError && <Text style={styles.errorText}>{startDateError}</Text>}
          <SecondBlock type={'player'} initialState={initialState} title={'Количество игроков'} />
          {playersCuntError && <Text style={styles.errorText}>{playersCuntError}</Text>}

          <SecondBlock type={'age'} initialState={initialState} title={'Возрастные ограничения'} />
          {ageError ? <Text style={styles.errorText}>{ageError}</Text> : null}

          <RadioBlock
            onChange={(list) => {
              setGenderList(list)
              dispatch(setPlayers_gender(list.find((e) => e.checked).label))
            }}
            title="Половой признак игрока"
            list={genderList}
            titleStyle={{ ...styles.titles, marginBottom: RW(10) }}
          />
          <SearchAddresses
            game={game}
            setAddressName={setAddressName}
            addressName={addressName}
            command={null}
          />
          {addressError && <Text style={styles.errorText}>{addressError}</Text>}

          <DateComponent
            title="Дата и время окончания поиска игроков"
            containerStyle={{
              width: RW(380),
              marginTop: RH(24),
              alignSelf: 'center',
            }}
            rowStyle={{
              justifyContent: 'flex-start',
            }}
            dateValue={endDate.date}
            timeValue={endDate.time}
            setDate={(date) => setEndDate({ ...endDate, date })}
            setTime={(time) => setEndDate({ ...endDate, time })}
          />
          {endDateError ? <Text style={styles.errorText}>{endDateError}</Text> : null}
          <RadioBlock
            onChange={(list) => {
              setOrganizer_in_the_gameState(list)
              dispatch(setOrganizer_in_the_game(list.find((e) => e.text == 'Участвует').checked))
            }}
            title="Статус организатора в игре"
            list={organizer_in_the_game}
            titleStyle={{ ...styles.titles, marginBottom: RW(23) }}
          />

          {/* <RadioBlock
            onChange={(list) => {
              setPriceList(list)
              list.find((e) => e.checked).text == 'Платно' ? setFlag(true) : setFlag(false)
            }}
            title="Стоимость входного билета на игру"
            list={priceList}
            titleStyle={{ ...styles.titles, marginBottom: RW(23) }}
          /> */}

          {/* {flag && (
            <View style={styles.price}>
              <Price
                initialState={initialState}
                sliceNumber={13}
                text={'Сумма оплаты '}
                margin={RW(18)}
                width={RW(210)}
                placeholder={'Сумма оплаты 200р.'}
              />
            </View>
          )} */}
          {/* {!initialState?.ticket_price && flag ? (
            <Text style={styles.errorText}>Обязательное поле для заполнения</Text>
          ) : null} */}
          <View style={{ position: 'absolute' }}>
            {!response && (
              <Modal
                modalVisible={isVisible}
                setIsVisible={setIsVisible}
                btnClose={false}
                item={
                  modalOpen ? (
                    <View style={styles.regulationBlock}>
                      <Text style={styles.title}>Правила</Text>
                      <Text style={styles.textTwo}>{game?.rules}</Text>
                    </View>
                  ) : (
                    <></>
                    // <View style={styles.topBlock}>
                    //   <Text style={styles.text}>Хотите, чтобы Ваша игра была в ТОП играх ?</Text>
                    //   <View
                    //     style={{
                    //       flexDirection: 'row',
                    //       justifyContent: 'space-between',
                    //       width: RW(220),
                    //     }}
                    //   >
                    //     <Button
                    //       light={true}
                    //       onPress={handleSubmit}
                    //       size={{ width: 100, height: 36 }}
                    //       label={'Да'}
                    //     />
                    //     <DarkButton
                    //       light={false}
                    //       onPress={handleSubmit}
                    //       size={{ width: 100, height: 36 }}
                    //       label={'Нет'}
                    //     />
                    //   </View>
                    // </View>
                  )
                }
              />
            )}
          </View>
          <View style={flag ? { ...styles.submitBlock } : { ...styles.submitBlock, marginTop: 20 }}>
            {/* {error && <Text style={styles.errorBoldText}>Ошибка</Text>} */}
            <Button onPress={handleClick} size={{ width: 144, height: 36 }} label={'Готово'} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenMask>
  )
}
const styles = StyleSheet.create({
  detailImg: {
    width: RW(20),
    height: RH(31),
    marginLeft: RW(20),
  },

  ticketBlock: {
    paddingTop: RH(42),
    paddingBottom: 100,
  },

  titles: {
    ...font('regular', 16, ICON, 24),
    marginTop: RH(24),
    marginLeft: RW(20),
  },
  dateBlock: {
    marginRight: RW(9),
    marginTop: RH(9),
    marginLeft: RW(13),
    marginBottom: RH(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dash: {
    width: RW(10),
    height: 0,
    borderColor: ICON,
    borderWidth: RW(2),
    borderRadius: RW(2),
    marginHorizontal: RW(8),
  },
  countBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: RW(11),
    marginTop: RH(9),
  },
  submitBlock: {
    marginLeft: 'auto',
    marginRight: RW(9),
    marginBottom: RW(23),
    marginTop: RH(70),
  },
  regulationBlock: {
    backgroundColor: LIGHT_LABEL,
    marginRight: 'auto',
    borderRadius: RW(20),
    marginLeft: 'auto',
    width: RW(357),
    padding: RW(35),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    ...font('bold', 24, WHITE, 24),
    marginBottom: RH(15),
  },
  textTwo: {
    ...font('regular', 16, WHITE, 19),
    textAlign: 'center',
  },
  errorText: {
    color: LIGHT_RED,
    fontSize: RW(16),
    marginTop: RH(5),
    marginLeft: RH(10),
  },
  errorBoldText: {
    color: LIGHT_RED,
    fontSize: RW(20),
    alignSelf: 'center',
    marginTop: RH(5),
    // marginLeft: RH(10),
  },
})
export default GameCreating
