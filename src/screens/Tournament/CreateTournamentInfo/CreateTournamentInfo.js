import { Text, View, TextInput, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { useDispatch, useSelector } from 'react-redux'
import { RH, RW, font } from '@/theme/utils'
import DateComponent from '@/components/DateComponent'
import RadioBlock from '@/components/RadioBlock'
import SearchAddresses from '@/screens/Map/SearchAddresses'
import LightButton from '@/components/buttons/Button'
import { gender, organizerData, priceFondData, start_date, end_date } from '../info'
import { BACKGROUND, ICON, LIGHT_LABEL, RED, WHITE } from '@/theme/colors'
import { addTournamentInfo } from '@/store/Slices/TournamentReducer/TournamentSlice'
import { useNavigation } from '@react-navigation/native'

const CreateTournamentInfo = ({ route }) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const initialState = useSelector(({ tournament }) => tournament)
  const response = route?.params
  const [needNavigate, setNeedNavigate] = useState(false)
  // ================== states ==================

  const [addressName, setAddressName] = useState(null)
  const [startDate, setStartDate] = useState(start_date)
  const [endDate, setEndDate] = useState(end_date)
  const [genderList, setGenderList] = useState(gender)
  const [organizerJoin, setOrganizerJoin] = useState(organizerData)
  const [priceFond, setPriceFond] = useState(priceFondData)
  const [count, setCount] = useState({
    from: null,
    to: null,
  })

  const [age, setAge] = useState({
    from: null,
    to: null,
  })

  // ================== states end ==================

  //errors
  const [ageError, setAgeError] = useState(false)
  const [countError, setCountError] = useState(false)
  const [endDateError, setEndDateError] = useState(false)
  const [startDateError, setStartDateError] = useState(false)
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
    // Հասցեի ստուգում
    if (!addressName) {
      setAddressNameError(true)
    } else {
      setAddressNameError(false)
    }

    // ամսաթվի ստուգում
    if (startDate.date <= endDate.date) {
      setEndDateError(true)
    } else {
      setEndDateError(false)
      setStartDateError(false)
    }

    // մասնակիցների թվի ստուգում
    if (!count.from || !count.to) {
      setCountError('Обязательное поле для заполнения')
    } else if (count.from > +count.to) {
      setCountError('Введите корректную количество')
    } else {
      setCountError(false)
    }

    // տարիքի ստուգում եթե անհատական խաղ է
    if (!initialState.team_tourney) {
      if (!age.to || !age.from) {
        setAgeError('Обязательное поле для заполнения')
      } else if (age.from > age.to) {
        setAgeError('Введите корректную возраст')
      } else {
        setAgeError(false)
      }
    }
    setNeedNavigate(true)
  }

  useEffect(() => {
    if (
      needNavigate &&
      !countError &&
      !endDateError &&
      !startDateError &&
      addressName &&
      ((!initialState.team_tourney && !ageError) || initialState.team_tourney)
    ) {
      const tournamentInfo = {
        startData: changedStartDate,
        endData: changedEndDate,
        playersCount: count,
        playersAge: age,
        gender: genderList.find((e) => e.checked).label,
        address: addressName,
        price: priceFond[0].checked ? true : false,
        organizerJoin: organizerJoin[0].checked ? true : false,
      }
      dispatch(addTournamentInfo(tournamentInfo))

      setNeedNavigate(false)

      if (initialState.team_tourney) {
        navigation.navigate('TeamNavigator', {
          screen: 'MyTeam',
          params: { data: initialState, game: response, fromTournament: true },
        })
      } else {
        navigation.navigate('TournamentInfo')
      }
    } else {
      setNeedNavigate(false)
    }
  }, [countError, endDateError, startDateError, addressName, ageError, needNavigate])

  useEffect(() => {
    // dispatch(setLatitude(response?.latitude ? response?.latitude : addressName?.lat))
    // dispatch(setLongitude(response?.longitude ? response?.longitude : addressName?.lng))
    // dispatch(
    //   setAddressNameTour(
    //     response?.address_name ? response?.address_name : addressName?.address_name,
    //   ),
    // )
  }, [response, addressName])
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
        {!!startDateError && <Text style={styles.error}>Введите корректную дату</Text>}
        <View>
          <Text style={styles.titles}>
            Количество {!initialState.team_tourney ? 'участников' : 'команд'}
          </Text>
          <View style={styles.countBlock}>
            <TextInput
              value={count.from}
              onChangeText={(e) => {
                setCount({ ...count, from: +e })
              }}
              keyboardType={'numeric'}
              style={styles.countInput}
              placeholder={'От'}
              placeholderTextColor={ICON}
            />
            <View style={styles.dash}></View>
            <TextInput
              value={count.to}
              onChangeText={(e) => {
                setCount({ ...count, to: +e })
              }}
              keyboardType={'numeric'}
              style={styles.countInput}
              placeholder={'До'}
              placeholderTextColor={ICON}
            />
          </View>
        </View>
        {countError ? <Text style={styles.error}>{countError}</Text> : null}
        {!initialState.team_tourney ? (
          <>
            <View>
              <Text style={styles.titles}>Возрастные ограничения</Text>
              <View style={styles.countBlock}>
                <TextInput
                  value={age.from}
                  onChangeText={(number) => {
                    setAge({ ...age, from: +number })
                  }}
                  keyboardType={'numeric'}
                  style={styles.countInput}
                  placeholder={'От'}
                  placeholderTextColor={ICON}
                />
                <View style={styles.dash}></View>
                <TextInput
                  value={age.to}
                  onChangeText={(number) => {
                    setAge({ ...age, to: +number })
                  }}
                  keyboardType={'numeric'}
                  style={styles.countInput}
                  placeholder={'До'}
                  placeholderTextColor={ICON}
                />
              </View>
            </View>
            {ageError?.length ? <Text style={styles.error}>{ageError}</Text> : null}
            <RadioBlock
              onChange={setGenderList}
              title="Половой признак участника"
              list={genderList}
              titleStyle={{ ...styles.titles, marginTop: RW(23) }}
            />
          </>
        ) : null}
        <View style={{ marginTop: initialState.team_tourney ? RH(20) : 0 }} />
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
          setDate={(date) => setEndDate({ ...endDate, date })}
          setTime={(time) => setEndDate({ ...endDate, time })}
        />
        {endDateError && <Text style={styles.error}>Введите корректную дату</Text>}

        <View style={{ paddingTop: '5%', left: '2%' }}>
          <RadioBlock
            onChange={setPriceFond}
            title="Призовой фонд"
            list={priceFond}
            containerStyle={{ paddingTop: '4%' }}
            titleStyle={{ ...styles.titles, marginBottom: RW(5) }}
          />
        </View>
        <View style={{ paddingTop: '5%', left: '2%' }}>
          <RadioBlock
            onChange={setOrganizerJoin}
            title="Статус организатора в турнире"
            list={organizerJoin}
            containerStyle={{ paddingTop: '4%' }}
            titleStyle={{ ...styles.titles, marginBottom: RW(5) }}
          />
        </View>

        <View style={{ alignItems: 'flex-end', padding: RH(15) }}>
          <LightButton label={'Готово'} onPress={handleSubmit} />
        </View>
      </ScrollView>
      {/* </KeyboardAvoidingView> */}
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
    marginTop: '4%',
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
