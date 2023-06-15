import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { useDispatch, useSelector } from 'react-redux'
import { RH, RW, font } from '@/theme/utils'
import DateComponent from '@/components/DateComponent'

import RadioBlock from '@/components/RadioBlock'
import SearchAddresses from '@/screens/Map/SearchAddresses'
import LightButton from '@/assets/imgs/Button'

import { BACKGROUND, ICON, LIGHT_LABEL, RED, WHITE } from '@/theme/colors'
import {
  setAddressNameTour,
  setLatitude,
  setLongitude,
  setNumberOfTeamsFrom,
  setNumberOfTeamsTo,
  setOrganizerStatus,
  setTicketPrice,
  setTourEndDate,
  setTourStartDate,
  setTournamentFund,
} from '@/store/Slices/TournamentSlice'
import { useNavigation } from '@react-navigation/native'

const CreateTournamentInfoCommand = ({ route }) => {
  const dispatch = useDispatch()
  const response = route?.params

  const navigation = useNavigation()
  const initialState = useSelector(({ tournament }) => tournament)
  // ================== states ==================

  const [addressName, setAddressName] = useState()
  const [price, setPrice] = useState('')
  const [startDate, setStartDate] = useState({
    date: new Date(),
    time: new Date(),
  })
  const [endDate, setEndDate] = useState({
    date: new Date(new Date().setDate(startDate.date.getDate() - 1)),
    time: new Date(),
  })
  const [priceFond, setPriceFond] = useState([
    { id: 1, text: 'Да', checked: false },
    { id: 2, text: 'Нет', checked: true },
  ])
  const [organizerJoin, setOrganizerJoin] = useState([
    { id: 1, text: 'Участвует', checked: true },
    { id: 2, text: 'Не Участвует', checled: false },
  ])
  const [priceExist, setPriceExist] = useState([
    { id: 1, text: 'Бесплатно', checked: true },
    { id: 2, text: 'Палатно', checled: false },
  ])
  // ================== states end ==================

  //errors

  const [startDateError, setStartDateError] = useState(false)
  const [countError, setCountError] = useState(false)
  const [priceError, setPriceError] = useState(false)
  const [endDateError, setEndDateError] = useState(false)

  const [addressNameError, setAddressNameError] = useState(false)

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

  const handleSubmit = () => {
    if (!addressName && !response?.address_name) {
      setAddressNameError(true)
    } else {
      dispatch(setLatitude(response?.latitude || addressName.lat))
      dispatch(setLongitude(response?.longitude || addressName.lng))
      dispatch(setAddressNameTour(addressName ? addressName?.address_name : response?.address_name))
      setAddressNameError(false)
    }

    if (startDate.date <= endDate.date) {
      setEndDateError(true)
    } else {
      setEndDateError(false)
      setStartDateError(false)
    }
    if (startDate && endDate) {
      dispatch(setTourStartDate(changedStartDate))
      dispatch(setTourEndDate(changedEndDate))
    }
    if (organizerJoin[0].checked) {
      dispatch(setOrganizerStatus(true))
    } else {
      dispatch(setOrganizerStatus(false))
    }

    if (!initialState.number_of_teams_from || !initialState.number_of_teams_to) {
      setCountError('Обязательное поле для заполнения')
    } else if (initialState.number_of_teams_from >= initialState.number_of_teams_to) {
      setCountError('Введите корректную количество')
    } else {
      setCountError(false)
    }
    if (priceExist[1].checked && !price) {
      dispatch(setTournamentFund(true))
      setPriceError('Введите сумму')
    } else {
      dispatch(setTournamentFund(false))
      dispatch(setTicketPrice(price ? price : 0))
      setPriceError('')
    }
    if (
      !priceError &&
      initialState.number_of_teams_from <= initialState.number_of_teams_to &&
      !endDateError &&
      !startDateError &&
      !addressNameError
    ) {
      // dispatch(createTournament(initialState))
      // console.log('response', response)
      // console.log('initialState', initialState)
      navigation.navigate('TeamNavigator', {
        screen: 'MyTeam',
        params: { data: initialState, game: response, fromTournament: true },
      })
    }
  }

  return (
    <ScreenMask>
      {/* <KeyboardAvoidingView
        {...(Platform.OS === 'ios'
          ? {
              behavior: 'padding',
              keyboardVerticalOffset: RH(10),
              enabled: true,
              style: { flex: 1 },
            }
          : {})}
      > */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <DateComponent
          title="Дата и время начала турнира"
          containerStyle={{
            width: RW(380),
            marginTop: RH(24),
            alignSelf: 'center',
          }}
          rowStyle={{
            justifyContent: 'space-around',
          }}
          dateValue={startDate.date}
          timeValue={startDate.time}
          setDate={(date) => setStartDate({ ...startDate, date })}
          setTime={(time) => setStartDate({ ...startDate, time })}
        />
        {startDateError && <Text style={styles.error}>Введите корректную дату</Text>}
        <View>
          <Text style={styles.titles}>Количество команд</Text>
          <View style={styles.countBlock}>
            <TextInput
              // value={value}
              onChangeText={(n) => {
                dispatch(setNumberOfTeamsFrom(n))
              }}
              keyboardType={'numeric'}
              style={styles.countInput}
              placeholder={'От'}
              placeholderTextColor={ICON}
            />
            <View style={styles.dash}></View>
            <TextInput
              // value={value}
              onChangeText={(e) => {
                dispatch(setNumberOfTeamsTo(e))
              }}
              keyboardType={'numeric'}
              style={styles.countInput}
              placeholder={'До'}
              placeholderTextColor={ICON}
            />
          </View>
        </View>
        {countError && <Text style={styles.error}>{countError}</Text>}
        <View style={{ paddingVertical: RH(15) }}></View>
        <SearchAddresses
          navigateTo="CreateTournamentInfoCommand"
          setAddressName={setAddressName}
          addressName={addressName}
          show={false}
        />
        {addressNameError ? <Text style={styles.error}>Выберите аддрес</Text> : null}
        <DateComponent
          title="Дата и время окончания поиска команд"
          containerStyle={{
            width: RW(380),
            marginTop: RH(24),
            alignSelf: 'center',
          }}
          rowStyle={{
            justifyContent: 'space-around',
          }}
          dateValue={endDate.date}
          timeValue={endDate.time}
          setDate={(date) => setEndDate({ ...endDate, date })}
          setTime={(time) => setEndDate({ ...endDate, time })}
        />
        {endDateError && <Text style={styles.error}>Введите корректную дату</Text>}
        <View style={{ paddingTop: '3%', left: '2%' }}>
          <RadioBlock
            onChange={(priceFond) => {
              setPriceFond(priceFond)
            }}
            title="Призовой фонд"
            list={priceFond}
            // containerStyle={{ paddingTop: '4%' }}
            titleStyle={{ ...styles.titles, marginBottom: RW(5) }}
          />
        </View>
        <View style={{ paddingTop: '2%', left: '2%' }}>
          <RadioBlock
            onChange={(organizerJoin) => {
              setOrganizerJoin(organizerJoin)
            }}
            title="Статус организатора в турнире"
            list={organizerJoin}
            // containerStyle={{ paddingTop: '4%' }}
            titleStyle={{ ...styles.titles, marginBottom: RW(23) }}
          />
        </View>
        <View style={{ paddingTop: '2%', left: '2%' }}>
          <RadioBlock
            onChange={(priceExist) => {
              setPriceExist(priceExist)
            }}
            title="Стоимость входного билета на турнир"
            list={priceExist}
            titleStyle={{ ...styles.titles, marginBottom: RW(23) }}
          />
        </View>
        {!!priceExist[1].checked && (
          <View style={{ width: RW(200), left: '5%' }}>
            <Text style={styles.titles}>Сумма оплаты</Text>
            <View style={styles.priceBlock}>
              <TextInput
                style={styles.priceInput}
                placeholder={'Сумма оплаты 200р.'}
                placeholderTextColor={ICON}
                onChangeText={(ev) => {
                  setPrice(+ev)
                  dispatch(setTicketPrice(+ev))
                }}
                keyboardType={'numeric'}
              />
            </View>
            {!!priceError && <Text style={styles.error}>Введите сумму</Text>}
          </View>
        )}
        <View style={{ alignItems: 'flex-end', padding: RH(15) }}>
          <LightButton label={'Готово'} onPress={handleSubmit} />
        </View>
      </ScrollView>
      {/* <Modal
          navigationText={''}
          item={
            <View style={styles.modal}>
              <Text style={styles.successTeam}>Хотите, чтобы Ваш турнир был в ТОП турнирах ?</Text>
              <View style={{ width: '95%', justifyContent: 'space-around', flexDirection: 'row' }}>
                <LightButton label={'Да'} size={{ width: 100 }} onPress={handleSubmit} />
                <LightButton label={'Нет'} size={{ width: 100 }} onPress={handleSubmit} />
              </View>
            </View>
          }
          modalVisible={modalVisible}
          setIsVisible={setModalVisible}
        /> */}
      {/* </KeyboardAvoidingView> */}
    </ScreenMask>
  )
}

export default CreateTournamentInfoCommand

const styles = StyleSheet.create({
  modal: {
    width: RW(280),
    height: RH(170),
    alignSelf: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: LIGHT_LABEL,
    borderRadius: RW(20),
    padding: RW(20),
    marginHorizontal: RW(30.5),
  },
  countInput: {
    height: RH(50),
    width: RW(110),
    backgroundColor: BACKGROUND,
    borderRadius: RW(10),
    paddingLeft: RW(24),
    flexDirection: 'row',
    alignItems: 'center',
    color: ICON,
  },
  countBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    left: '15%',
  },
  titles: {
    ...font('regular', 16, ICON, 24),
    marginLeft: RW(20),
    paddingVertical: RH(10),
  },
  dash: {
    width: RW(10),
    height: 0,
    borderColor: ICON,
    borderWidth: RW(2),
    borderRadius: RW(2),
    marginHorizontal: RW(8),
  },
  successTeam: {
    ...font('inter', 16, WHITE, 20),
    textAlign: 'center',
    width: '85%',
    lineHeight: RH(25),
    alignSelf: 'center',
  },
  error: {
    ...font('regular', 18, RED),
    left: '6%',
    paddingTop: '5%',
  },
  priceInput: {
    height: '100%',
    width: '100%',
    backgroundColor: BACKGROUND,
    borderRadius: RW(10),
    color: ICON,
    zIndex: 22,
  },
  priceText: {
    ...font('regular', 16, ICON, 19),
  },
  priceBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    height: RH(48),
    width: RW(192),
    backgroundColor: BACKGROUND,
    borderRadius: RW(10),
    paddingLeft: RW(24),
    color: ICON,
  },
})
