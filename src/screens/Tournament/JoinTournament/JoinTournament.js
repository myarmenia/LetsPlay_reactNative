import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RH, RW, font } from '@/theme/utils'
import { Platform, StyleSheet, View } from 'react-native'
import { BACKGROUND, ICON, RED } from '@/theme/colors'
import { useNavigation } from '@react-navigation/native'
import SearchAddresses from '@/screens/Map/SearchAddresses'
import DateComponent from '@/components/DateComponent'
import ScreenMask from '@/components/wrappers/screen'
import RadioBlock from '@/components/RadioBlock'
import LightButton from '@/assets/imgs/Button'
import GameType from '@/screens/Game/gameType'
import { searchTourney } from '@/store/Slices/TournamentSlice'

const JoinTournament = ({ route }) => {
  const props = route.params
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const chooseGameType = [
    { id: 1, text: 'Игры из Ваших предпочтений', checked: true },
    { id: 2, text: 'Все игры', checked: false },
    { id: 3, text: 'Выбрать игру', checked: false },
  ]

  const formats = [
    { id: 1, text: 'Индивидуальный', checked: true },
    { id: 2, text: 'Командный', checked: false },
  ]

  // const freeOrPaid = [
  //   { id: 4, text: 'Бесплатно', checked: true },
  //   { id: 5, text: 'Платно', checked: false },
  // ]
  const { nameOfGames } = useSelector((gameSlice) => gameSlice.games)
  //states
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  // const [free, setFree] = useState(freeOrPaid)
  const [list, setList] = useState(chooseGameType)
  const [gameTypes, setGameTypes] = useState(nameOfGames)
  const [showGameTypes, setShowGameTypes] = useState(false)
  const [tournamentFormat, setTournamentFormat] = useState(formats)
  const [addressName, setAddressName] = useState(route?.params?.address_name)
  const checkChecks = gameTypes.some((elm) => elm.checked === true)
  //errors
  const [errorMessage, setErrorMessage] = useState(false)

  const handleSubmit = () => {
    if (tournamentFormat[1].checked) {
      navigation.navigate('TeamNavigator', {
        screen: 'MyTeam',
        params: {
          fromTournament: true,
        },
      })
    } else {
      navigation.navigate('AllTournaments')
    }
  }
  const showHideError = () => {
    if (!errorMessage) {
      let ids = gameTypes?.filter((el) => el?.checked).map((el) => el?.id)
      const formData = new FormData()
      // if (!free[0].checked) {
      //   formData.append('price', true)
      // } else {
      //   formData.append('price', false)
      // }
      formData.append('latitude', props?.fromMap ? props?.latitude : addressName?.lat)
      formData.append('longitude', props?.fromMap ? props.longitude : addressName?.lng)

      formData.append('teamTourney', formats[0].checked ? false : true)
      formData.append(
        'address_name',
        props?.fromMap ? props?.address_name : addressName?.address_name,
      )
      if (!list[1].checked) {
        formData.append('game_of_your_choice', true)
      } else {
        formData.append('game_of_your_choice', false)
      }

      formData.append('date_from', startDate.toISOString().substring(0, 10))
      formData.append('date_to', endDate.toISOString().substring(0, 10))
      formData.append('ids', ids)
      dispatch(
        searchTourney(formData, navigation, setErrorMessage, {
          tourney: formats[0].checked ? false : true,
        }),
      )
    } else {
      console.log('error')
    }
  }
  return (
    <ScreenMask>
      <View style={styles.mainContainer}>
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
        <View style={styles.tournamentFormatContainer}>
          <RadioBlock
            list={tournamentFormat}
            left={0}
            title="Формат турнира"
            titleStyle={styles.radioTitle}
            onChange={setTournamentFormat}
          />
          <DateComponent
            title={'Дата турнира'}
            showTime={true}
            containerStyle={
              Platform.OS == 'ios' ? styles.dateContainerIOS : styles.dateContainerANDROID
            }
            dateValue={startDate}
            setDate={setStartDate}
            titleStyle={Platform.OS == 'ios' ? { left: '15%' } : ''}
          />
        </View>
        <View style={styles.mapBox}>
          <SearchAddresses
            navigateTo="JoinTournament"
            // game={game}
            setAddressName={setAddressName}
            addressName={addressName}
            command={null}
          />
        </View>
        {/* <View style={styles.priceBox}>
          <RadioBlock
            list={free}
            onChange={setFree}
            title="Стоимость входного билета в игру"
            titleStyle={styles.radioTitle}
          />
        </View> */}
      </View>
      <View style={styles.bottomBox}>
        <LightButton label={'Готово'} onPress={showHideError} />
      </View>
    </ScreenMask>
  )
}

export default JoinTournament

const styles = StyleSheet.create({
  mainContainer: {
    flex: 0.7,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  gameTypesContainer: {
    left: RW(18),
    backgroundColor: 'transparent',
  },
  tournamentFormatContainer: {
    left: RW(18),
    backgroundColor: 'transparent',
  },
  radioTitle: {
    color: ICON,
  },
  errorText: {
    ...font('medium', 18, RED),
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
  dateContainerIOS: {
    left: '-4%',
    width: '50%',
    justifyContent: 'space-evenly',
  },
  dateContainerANDROID: {
    width: '88%',
    justifyContent: 'space-evenly',
  },

  bottomBox: {
    position: 'absolute',
    bottom: RH(20),
    right: RW(20),
  },
})
