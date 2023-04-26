import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { useDispatch, useSelector } from 'react-redux'
import { RH, RW, font } from '@/theme/utils'
import DateComponent from '@/components/DateComponent'
import SecondBlock from '@/components/forms/secondBlock'
import RadioBlock from '@/components/RadioBlock'
import SearchAddresses from '@/screens/Map/SearchAddresses'
import LightButton from '@/assets/imgs/Button'
import Price from '@/components/inputs/price'
import Modal from '@/components/modal'
import { BACKGROUND, ICON, LIGHT_LABEL, RED, WHITE } from '@/theme/colors'
import {
  setAgeRestrictionsFrom,
  setAgeRestrictionsTo,
  setNumberOfParticipantsFrom,
  setNumberOfParticipantsTo,
} from '@/store/Slices/TournamentSlice'

const CreateTournamentInfo = ({ route }) => {
  const dispatch = useDispatch()
  const response = route?.params
  const initialState = useSelector(({ tournament }) => tournament)
  // ================== states ==================
  const [modalVisible, setModalVisible] = useState(false)
  const [addressName, setAddressName] = useState()
  const [startDate, setStartDate] = useState({
    date: new Date(),
    time: new Date(),
  })
  const [endDate, setEndDate] = useState({
    date: new Date(new Date().setDate(startDate.date.getDate() - 1)),
    time: new Date(),
  })
  const [genderList, setGenderList] = useState([
    { id: 1, text: 'М', checked: false, label: 'm' },
    { id: 2, text: 'Ж', checled: false, label: 'f' },
    { id: 3, text: 'Без ограничений', checked: true, label: 'm/f' },
  ])
  const [organizerJoin, setOrganizerJoin] = useState([
    { id: 1, text: 'Участвует', checked: true },
    { id: 2, text: 'Не Участвует', checled: false },
  ])
  const [priceExist, setPriceExist] = useState([
    { id: 1, text: 'Бесплатно', checked: true },
    { id: 2, text: 'Пsлатно', checled: false },
  ])
  // ================== states end ==================

  //errors
  const [ageError, setAgeError] = useState(false)
  const [startDateError, setStartDateError] = useState(false)
  const [countError, setCountError] = useState(false)
  const [endDateError, setEndDateError] = useState(false)
  const [playersCountError, setPlayersCountError] = useState(false)
  const [addressNameError, setAddressNameError] = useState(false)

  const handleSubmit = () => {
    if (!addressName && !response?.address_name) {
      setAddressNameError(true)
    } else {
      setAddressNameError(false)
    }
    if (!startDate) {
      setStartDateError('Обязательное поле для заполнения')
    }
    if (!endDate) {
      setEndDateError('Обязательное поле для заполнения')
    } else if (startDate <= endDate) {
      setEndDateError('Введите корректную дату')
    }
    if (!initialState.age_restrictions_from || !initialState.age_restrictions_to) {
      setAgeError('Обязательное поле для заполнения')
    } else if (initialState.age_restrictions_from >= initialState.age_restrictions_to) {
      setAgeError('Введите корректную возраст')
    } else {
      setAgeError(false)
    }
    if (!initialState.number_of_participants_from || !initialState.number_of_participants_t0) {
      setCountError('Обязательное поле для заполнения')
    } else if (initialState.number_of_participants_from >= initialState.number_of_participants_to) {
      setCountError('Введите корректную возраст')
    } else {
      setCountError(false)
    }

    // setModalVisible(true)
  }

  useEffect(() => {
    console.log(initialState)
  }, [initialState])

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
            setDate={date => setStartDate({ ...startDate, date })}
            setTime={time => setStartDate({ ...startDate, time })}
          />
          {startDateError && <Text style={styles.error}>{startDateError}</Text>}
          <View>
            <Text style={styles.titles}>Количество участников</Text>
            <View style={styles.countBlock}>
              <TextInput
                // value={value}
                onChangeText={number => {
                  dispatch(setNumberOfParticipantsFrom(number))
                }}
                keyboardType={'numeric'}
                style={styles.countInput}
                placeholder={'От'}
                placeholderTextColor={ICON}
              />
              <View style={styles.dash}></View>
              <TextInput
                // value={value}
                onChangeText={number => {
                  dispatch(setNumberOfParticipantsTo(number))
                }}
                keyboardType={'numeric'}
                style={styles.countInput}
                placeholder={'До'}
                placeholderTextColor={ICON}
              />
            </View>
          </View>
          {!!countError && <Text style={styles.error}>{countError}</Text>}
          <View>
            <Text style={styles.titles}>Возрастные ограничения</Text>
            <View style={styles.countBlock}>
              <TextInput
                // value={value}
                onChangeText={number => {
                  dispatch(setAgeRestrictionsFrom(number))
                }}
                keyboardType={'numeric'}
                style={styles.countInput}
                placeholder={'От'}
                placeholderTextColor={ICON}
              />
              <View style={styles.dash}></View>
              <TextInput
                // value={value}
                onChangeText={number => {
                  dispatch(setAgeRestrictionsTo(number))
                }}
                keyboardType={'numeric'}
                style={styles.countInput}
                placeholder={'До'}
                placeholderTextColor={ICON}
              />
            </View>
          </View>
          {!!ageError && <Text style={styles.error}>{ageError}</Text>}
          <RadioBlock
            onChange={list => {
              setGenderList(list)
            }}
            title="Половой признак участника"
            list={genderList}
            titleStyle={{ ...styles.titles, marginTop: RW(23) }}
          />
          <SearchAddresses
            navigateTo="CreateTournamentInfo"
            setAddressName={setAddressName}
            addressName={addressName}
            show={false}
          />
          {addressNameError ? <Text style={styles.error}>Выберите аддрес</Text> : null}
          <DateComponent
            title="Дата и время окончания поиска участников"
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
            setDate={date => setEndDate({ ...endDate, date })}
            setTime={time => setEndDate({ ...endDate, time })}
          />
          <View style={{ paddingTop: '5%', left: '2%' }}>
            <RadioBlock
              onChange={organizerJoin => {
                setOrganizerJoin(organizerJoin)
              }}
              title="Статус организатора в турнире"
              list={organizerJoin}
              containerStyle={{ paddingTop: '4%' }}
              titleStyle={{ ...styles.titles, marginBottom: RW(23) }}
            />
          </View>
          <View style={{ paddingTop: '5%', left: '2%' }}>
            <RadioBlock
              onChange={priceExist => {
                setPriceExist(priceExist)
              }}
              title="Стоимость входного билета на турнир"
              list={priceExist}
              titleStyle={{ ...styles.titles, marginBottom: RW(23) }}
            />
          </View>
          {!!priceExist[1].checked && (
            <View style={{ width: RW(200), left: '5%' }}>
              <Price text={'Сумма оплаты'} width={'100%'} placeholder={'Сумма оплаты 200р.'} />
            </View>
          )}
          <View style={{ alignItems: 'flex-end', padding: RH(15) }}>
            <LightButton label={'Готово'} onPress={handleSubmit} />
          </View>
        </ScrollView>
        <Modal
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
        />
      </KeyboardAvoidingView>
    </ScreenMask>
  )
}

export default CreateTournamentInfo

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
    left: '35%',
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
})
