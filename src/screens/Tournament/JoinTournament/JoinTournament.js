import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RH, RW, font } from '@/theme/utils'
import { StyleSheet, View } from 'react-native'
import { BACKGROUND, ICON, RED } from '@/theme/colors'
import { useNavigation } from '@react-navigation/native'
import SearchAddresses from '@/screens/Map/SearchAddresses'
import DateComponent from '@/components/DateComponent'
import ScreenMask from '@/components/wrappers/screen'
import RadioBlock from '@/components/RadioBlock'
import LightButton from '@/assets/imgs/Button'
import GameType from '@/screens/Game/gameType'

const JoinTournament = ({route}) => {
  const navigation = useNavigation()
    const chooseGameType = [
        { id: 1, text: 'Игры из Ваших предпочтений', checked: true },
        { id: 2, text: 'Все игры', checked: false },
        { id: 3, text: 'Выбрать игру', checked: false },
    ]

    const formats = [
        { id: 1, text: 'Индивидуальный', checked: true },
        { id: 2, text: 'Командный', checked: false }
    ]

    const freeOrPaid = [
      { id: 4, text: 'Бесплатно', checked: true },
      { id: 5, text: 'Платно', checked: false },
    ]
    const { nameOfGames } = useSelector((gameSlice) => gameSlice.games)
    //states
    const [free, setFree] = useState(freeOrPaid)
    const [list, setList] = useState(chooseGameType)
    const [gameTypes, setGameTypes] = useState(nameOfGames)
    const [showGameTypes, setShowGameTypes] = useState(false)
    const [tournamentFormat, setTournamentFormat] = useState(formats)
    const [addressName, setAddressName] = useState(route?.params?.address_name)
    //errors
    const [errorMessage, setErrorMessage] = useState(false)

    const handleSubmit = () => {
      if(tournamentFormat[1].checked){
        navigation.navigate("TeamNavigator", {
          screen: "MyTeam",
          params: {
            fromTournament: true
          }
        })
      } else {
        navigation.navigate("AllTournaments")
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
          <DateComponent title={'Дата  турнира'} showTime={true} containerStyle={styles.dateContainer} titleStyle={styles.dateTitle}/>
          </View>
          <View style={styles.mapBox}>
          <SearchAddresses
          navigateTo='JoinTournament'
            // game={game}
            setAddressName={setAddressName}
            addressName={addressName}
            command={null}
          />
          </View>
          <View style={styles.priceBox}>
          <RadioBlock list={free} onChange={setFree}  title="Стоимость входного билета в игру" titleStyle={styles.radioTitle}/>
          </View>
          </View>
          <View style={styles.bottomBox}>
          <LightButton label={"Готово"} onPress={handleSubmit}/>
          </View>
    </ScreenMask>
  )
}

export default JoinTournament

const styles = StyleSheet.create({
  mainContainer:{
    flex:0.7,
    flexDirection:"column",
    justifyContent:"space-evenly"
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
      dateContainer:{
        left:"-8%",
        width:"50%",
        justifyContent:"space-evenly"
      },
      dateTitle:{
        left:"15%"
      },
      bottomBox:{
        position:"absolute",
        bottom:RH(20),
        right:RW(20)
      }
})