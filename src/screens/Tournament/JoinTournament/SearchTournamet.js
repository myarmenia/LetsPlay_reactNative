import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import GameType from '@/screens/Game/gameType'
import { BACKGROUND, ICON, RED, WHITE } from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'
import ScreenMask from '@/components/wrappers/screen'
import RadioBlock from '@/components/RadioBlock'
import DateComponent from '@/components/DateComponent'
import SearchAddresses from '@/screens/Map/SearchAddresses'
import LightButton from '@/components/buttons/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getGames } from '@/store/Slices/GamesSlice'
import { searchTourney } from '@/store/Slices/TournamentReducer/TournamentApies'
import moment from 'moment'
import { isTabletDevice } from '@/helpers/helpFunctions'


import { chooseGameType, format } from './info'


const SearchTournament = () => {

  const dispatch = useDispatch()
  const address = useSelector(({ address }) => address)


  const games = useSelector(({ games }) => games.games)
  const { myTeams } = useSelector(({ teams }) => teams)
  const navigation = useNavigation()

  //states
  const [showGameTypes, setShowGameTypes] = useState(false)
  const [addressError, setAddressError] = useState(false)
  const [tournamentFormat, setTournamentFormat] = useState(format)


  const [gameTypes, setGameTypes] = useState()
  const [list, setList] = useState(chooseGameType)
  //datesState
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  //errors
  const [notFoundError, setNotFoundError] = useState(false)

  const handleSubmit = () => {
    if (!address.address) {
      setAddressError(true)
    } else {
      setAddressError(false)
      let ids = gameTypes?.filter((el) => el?.checked).map((el) => el?.id)
      const formData = {
        price: null,
        game_of_your_choice: !list[1].checked,
        team_tourney: !tournamentFormat[0].checked,
        date_from: moment(startDate).format('YYYY-MM-DD'),
        date_to: moment(endDate).format('YYYY-MM-DD'),
        latitude: address?.latitude,
        longitude: address?.longitude,
        games: ids,
      }
      dispatch(searchTourney(formData))
        .unwrap()
        .then((res) => {
          if (res.data.datas.length) {
            setNotFoundError(false)
            navigation.navigate('TournamentList')
          } else {
            setNotFoundError(true)
          }
        })
        .catch((err) => {
        })
    }
  }


  useEffect(() => {
    if (!myTeams.length) {
      setTournamentFormat([
        tournamentFormat[0],
        { id: 2, text: 'Командный', checked: false, disable: true },])
    }
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
    <ScreenMask style={styles.container}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.gameTypesContainer}>
          <RadioBlock
            list={tournamentFormat}
            left={0}
            title="Формат турнира"
            titleStyle={styles.radioTitle}
            onChange={setTournamentFormat}
            editable={!tournamentFormat[1]?.disable}
          />
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
          {addressError ? <Text style={styles.errorText}>Выберите аддрес</Text> : null}
        </View>
      </ScrollView>

      <View style={styles.bottomButton}>
        <View>
          {notFoundError ? <Text style={styles.errorText}>Турниров не найдено</Text> : null}
        </View>
        <LightButton
          label={'Готово'}
          onPress={handleSubmit}
          size={{ width: isTabletDevice ? RH(100) : RW(144) }}
        />
      </View>
    </ScreenMask>
  )
}

export default SearchTournament

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
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
    marginBottom: RH(45)

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
    fontSize: RH(15)
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
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: RH(20),
    alignItems: 'flex-end',
  },
  loading: {
    ...font('regular', 15, WHITE),
    left: '-4%',
  },
})
