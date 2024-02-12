import { Text, View, TextInput, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState, } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { useDispatch, useSelector } from 'react-redux'
import { RH, RW, font } from '@/theme/utils'
import DateComponent from '@/components/DateComponent'
import RadioBlock from '@/components/RadioBlock'
import SearchAddresses from '@/screens/Map/SearchAddresses'
import LightButton from '@/components/buttons/Button'
import { gender, organizerData, priceFondData } from '../info'
import { BACKGROUND, ICON, LIGHT_LABEL, RED, WHITE } from '@/theme/colors'
import { addTournamentInfo } from '@/store/Slices/TournamentReducer/TournamentSlice'
import { useNavigation } from '@react-navigation/native'
import { getMyTeams } from '@/store/Slices/TournamentReducer/TournamentApies'
import { setAddress } from '@/store/Slices/AddressSlice'


const TournamentInfo = () => {
  const { needToEdit, singleTournir } = useSelector(({ tournament }) => tournament)


  const { address, longitude, latitude } = useSelector(({ address }) => address)


  const dispatch = useDispatch()
  const navigation = useNavigation()

  const [startDate, setStartDate] = useState(new Date)
  const [endDate, setEndDate] = useState(new Date)

  const [count, setCount] = useState({
    from: null,
    to: null
  })

  const [age, setAge] = useState({
    from: null,
    to: null,
  })
  const [genderList, setGenderList] = useState(gender)
  const [priceFond, setPriceFond] = useState(priceFondData)
  const [organizerJoin, setOrganizerJoin] = useState(organizerData)
  const [formats, setFormats] = useState(
    singleTournir?.gameInfo?.formats?.map((elm, i) =>
    ({
      id: i,
      text: elm,
      checked: !i ? true : false
    })
    )
  )
  //errors
  const [ageError, setAgeError] = useState(false)
  const [countError, setCountError] = useState(false)
  const [endDateError, setEndDateError] = useState(false)
  const [startDateError, setStartDateError] = useState(false)
  const [addressError, setAddressError] = useState(false)




  const handleSubmit = () => {
    if (!address) {
      setAddressError('Обязательное поле для заполнения')
    } else if (!longitude || !latitude) {
      setAddressError('Укажите точный адрес')
    } else {
      setAddressError(false)
    }
    // ամսաթվի ստուգում
    if (startDate < new Date()) {
      setStartDateError(true)
    } else {
      setStartDateError(false)
    }

    if (startDate < endDate) {
      setEndDateError(true)
    } else {
      setEndDateError(false)
    }
    // մասնակիցների թվի ստուգում
    if (!count.from || !count.to) {
      setCountError('Обязательное поле для заполнения')
    } else if (count.from < 2) {
      setCountError(`Минимальное количество ${!singleTournir?.team_tourney ? 'участников' : 'команд'} 2`)
    }
    else if (count.from > +count.to) {
      setCountError('Введите корректную количество')
    } else {
      setCountError(false)
    }

    // տարիքի ստուգում եթե անհատական խաղ է
    if (!singleTournir?.team_tourney) {
      if (!age.to || !age.from) {
        setAgeError('Обязательное поле для заполнения')
      } else if (age.from > age.to) {
        setAgeError('Введите корректную возраст')
      } else {
        setAgeError(false)
      }
    }
    if ((count.from && count.to && count.from >= 2 && count.from <= +count.to) &&
      (startDate >= endDate && startDate >= new Date()) &&
      (address && longitude && latitude)
    ) {
      let tournamentInfo = {
        start_date: startDate.toISOString(),
        end_search_date: endDate.toISOString(),
        address_name: address,
        latitude: latitude,
        longitude: longitude,
        prize_fund: priceFond[0].checked ? true : false,
        organizer_status: organizerJoin[0].checked ? true : false
      }

      if (singleTournir?.team_tourney) {
        tournamentInfo.number_of_teams_from = count.from
        tournamentInfo.number_of_teams_to = count.to
        if (formats.length) {
          const selectedFormat = formats.find(item => item.checked)
          tournamentInfo.format = selectedFormat.text
        }
      } else {
        if (age.to && age.from && age.to >= age.from) {
          tournamentInfo.players_gender = genderList.find((e) => e.checked).label
          tournamentInfo.age_restrictions_from = age.from
          tournamentInfo.age_restrictions_to = age.to
          tournamentInfo.number_of_participants_from = count.from
          tournamentInfo.number_of_participants_to = count.to
        } else {
          return false
        }
      }
      dispatch(addTournamentInfo(tournamentInfo))
      if (singleTournir?.team_tourney) {
        dispatch(getMyTeams())
        navigation.navigate('MyCreatedTeams',
          { fromTournament: true },
        )
      } else {
        navigation.navigate('CreateTournament')
      }
    }
  }




  useEffect(() => {
    if (needToEdit) {
      setStartDate(new Date(singleTournir.start_date))
      setEndDate(new Date(singleTournir.end_search_date))
      dispatch(setAddress({
        address: singleTournir.address_name,
        longitude: singleTournir.longitude,
        latitude: singleTournir.latitude,
      }))
      setOrganizerJoin((prev) => {
        if (singleTournir.organizer_status) {
          prev[0].checked = true
          prev[1].checked = false
        } else {
          prev[0].checked = false
          prev[1].checked = true
        }
        return prev
      })
      setPriceFond((prev) => {
        if (singleTournir.prize_fund) {
          prev[0].checked = true
          prev[1].checked = false
        } else {
          prev[0].checked = false
          prev[1].checked = true
        }
        return prev
      })
      if (singleTournir.team_tourney) {
        setCount({
          from: String(singleTournir.number_of_teams_from),
          to: String(singleTournir.number_of_teams_to)
        })
        if (singleTournir.format) {
          setFormats((prev) => {
            const updatedData = [...prev]
            updatedData.forEach((item) => {
              if (item.text === singleTournir.format) {
                item.checked = true
              } else {
                item.checked = false
              }
            })
            return updatedData
          })
        }

      } else {
        setCount({
          from: singleTournir.number_of_participants_from.toString(),
          to: singleTournir.number_of_participants_to.toString()
        })
        setAge({
          from: String(singleTournir.age_restrictions_from),
          to: String(singleTournir.age_restrictions_to),
        })
        setGenderList((prev) => {
          prev.forEach((item) => {
            if (item.label === singleTournir.players_gender) {
              item.checked = true
            } else {
              item.checked = false
            }
          })
          return prev
        })

      }


    }
  }, [needToEdit])


  return (
    <ScreenMask>
      <ScrollView
        style={{ height: '100%', }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.dataContainer}>
          <DateComponent
            title="Дата и время начала турнира"
            containerStyle={styles.data}
            rowStyle={{
              justifyContent: 'space-around',
            }}
            dateValue={startDate}
            timeValue={startDate}
            setDate={(date) => { setStartDate(new Date(date)) }}
            setTime={(time) => { setStartDate(new Date(time)) }}
          />
          {!!startDateError && <Text style={styles.error}>Введите корректную дату</Text>}
        </View>

        <View style={styles.teamCountContainer}>
          <Text style={styles.titles}>
            Количество {!singleTournir?.team_tourney ? 'участников' : 'команд'}
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
          {countError ? <Text style={styles.error}>{countError}</Text> : null}
        </View>

        {!singleTournir?.team_tourney && (
          <>
            <View style={styles.teamCountContainer}>
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
              {ageError?.length ? <Text style={styles.error}>{ageError}</Text> : null}
            </View>

            <RadioBlock
              onChange={setGenderList}
              title="Половой признак участника"
              list={genderList}
              titleStyle={{ ...styles.titles }}
              left={RH(10)}
              containerStyle={{ marginBottom: RH(15) }}
            />
          </>
        )}



        <View style={styles.addressContainer}>
          <SearchAddresses />
          {addressError ? <Text style={styles.error}>{addressError}</Text> : null}
        </View>

        {(singleTournir?.team_tourney && formats?.length) ?
          <RadioBlock
            list={formats}
            onChange={setFormats}
            title={'Формат игры'}
            titleStyle={{ color: ICON, }}
            left={RH(10)}
          /> : null
        }
        <View style={[styles.dataContainer, { marginTop: 0 }]}>
          <DateComponent
            title="Дата и время окончания поиска участников"
            containerStyle={styles.data}
            rowStyle={{
              justifyContent: 'space-around',
            }}
            dateValue={endDate}
            timeValue={endDate}
            setDate={(date) => { setEndDate(new Date(date)) }}
            setTime={(time) => { setEndDate(new Date(time)) }}
          />
          {endDateError && <Text style={styles.error}>Введите корректную дату</Text>}
        </View>


        <RadioBlock
          onChange={setPriceFond}
          title="Призовой фонд"
          list={priceFond}
          containerStyle={{ marginBottom: RW(15) }}
          titleStyle={{ ...styles.titles, marginBottom: RW(5) }}
          left={RH(10)}
        />
        <RadioBlock
          onChange={setOrganizerJoin}
          title="Статус организатора в турнире"
          list={organizerJoin}
          containerStyle={{ marginBottom: RW(15) }}
          titleStyle={{ ...styles.titles, marginBottom: RW(5) }}
          left={RH(10)}
        />

        <View style={{ alignItems: 'flex-end', padding: RH(15) }}>
          <LightButton label={'Готово'} onPress={handleSubmit} />
        </View>
      </ScrollView>
    </ScreenMask>
  )
}

export default TournamentInfo

const styles = StyleSheet.create({
  dataContainer: {
    marginTop: RH(24),
    marginBottom: RH(20),
  },

  data: {
    width: RW(380),
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  teamCountContainer: {
    marginBottom: RW(20),
  },
  addressContainer: {
    marginBottom: RW(20)
  },

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
    fontSize: RH(16),
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
  },
  titles: {
    ...font('regular', 16, ICON, 24),
    paddingVertical: RH(5),
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
    marginLeft: RH(7),
    marginTop: RW(5)
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
