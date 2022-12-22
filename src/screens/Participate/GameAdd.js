import { styles } from './style'
import GameType from '@/screens/Participate/GameType'
import React, { useEffect, useMemo, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import Button from '@/assets/imgs/Button'
import GestureRecognizer from 'react-native-swipe-gestures'
import Radio from '@/components/checkbox/radio'
import DateTime from '@/services/DateTime'
import Map from '@/components/inputs/map'
import { font, RH, RW } from '@/theme/utils'
import { SCREEN_HEIGHT } from '@/constants'
import { _tournamentData } from './tournamentData'
// import CircleButton from '@/components/buttons/circle'
// import CircleAdd from '@/components/buttons/circleAdd'
// import GamesList from '../gamesList/gamesList'
const CREATE_GAME = 'CREATE_GAME'
const PARTICIPATION_GAME = 'PARTICIPATION_GAME'

function Index({ navigation }) {
  const [chooseType, setChooseType] = useState(false)
  const [showGameTypes, setShowGameTypes] = useState(false)
  const [showDropDown, setShowDropDown] = useState(false)
  const [flag, setFlag] = useState(false)
  const initialState = {
    price: 'Бесплатно',
    gameValue: 'Выбрать игру',
  }
  const [data, setData] = useState(initialState)
  const types = [
    { id: 1, name: 'Элиас', checked: false },
    { id: 2, name: 'Мафия', checked: false },
    { id: 3, name: 'Покер', checked: false },
    { id: 4, name: 'Монополия', checked: false },
    { id: 5, name: 'Крокодил', checked: false },
    { id: 6, name: 'Иные игры', checked: false },
  ]
  const [gameTypes, setGameTypes] = useState(types)

  const chooseGameType = [
    { id: 1, text: 'Игры из Ваших предпочтений', checked: true },
    { id: 2, text: 'Игры из подписок', checked: false },
    { id: 3, text: 'Все игры', checked: false },
    { id: 4, text: 'Выбрать игру', checked: false },
  ]
  const freeOrPaid = [
    { id: 4, text: 'Бесплатно', checked: true },
    { id: 5, text: 'Платно', checked: false },
  ]
  const [free, setFree] = useState(freeOrPaid)

  const checkChecks = gameTypes.some((elm) => elm.checked === true)
  const [errorMessage, setErrorMessage] = useState(false)
  const showHideError = () => {
    if (!checkChecks && data.gameValue === 'Выбрать игру') {
      setErrorMessage(true)
      console.log('Выберите один из игр')
    } else {
      setErrorMessage(false)
      if (data.gameValue !== 'Выбрать') {
        navigation.navigate('TournamentList')
      } else {
        console.log('error')
      }
    }
  }
  useMemo(() => {})
  useEffect(() => {
    setErrorMessage(!errorMessage)
  }, [data.gameValue])

  return (
      <ScreenMask>
        <ScrollView>
          <GestureRecognizer
              onSwipeLeft={(state) => navigation.goBack()}
              style={{
                flex: 1,
              }}
          >
            <Text style={styles.someTitle}>Игра</Text>
            <View style={styles.gameTypesContainer}>
              <Radio
                  list={chooseGameType}
                  setShowGameTypes={setShowGameTypes}
                  showDropDown={showDropDown}
                  setShowDropDown={setShowDropDown}
                  showGameTypes={showGameTypes}
                  type={'gameType'}
                  data={data}
                  setData={setData}
              />
            </View>

            {data.gameValue === 'Выбрать игру' ? (
                <>
                  <GameType
                      showGameTypes={showGameTypes}
                      setShowGameTypes={setShowGameTypes}
                      setShowDropDown={setShowDropDown}
                      gameTypes={gameTypes}
                      setGameTypes={setGameTypes}
                      types={types}
                      errorMessage={errorMessage}
                  />
                  {/* Добавить игру */}

                  {/* <View style={styles.circleAddBox}>
                  <CircleAdd />
                  <Text style={styles.addGameText}>Добавить игру</Text>
                </View> */}
                </>
            ) : null}
            <Text style={{ color: '#657AC5', fontSize: RW(16), marginBottom: RH(20) }}>
              Формат турнира
            </Text>
            <View style={{ marginHorizontal: RW(10) }}>
              <Radio
                  list={[
                    { id: 1, text: 'Индивидуальный', checked: true },
                    { id: 2, text: 'Командный', checked: false },
                  ]}
              />
            </View>
            <View>
              <Text style={styles.someTitle}>Дата турнира</Text>
              <View
                  style={{
                    flexDirection: 'column',
                    width: RW(367),
                    alignSelf: 'center',
                    justifyContent: 'space-around',
                  }}
              >
                <View style={styles.dateMap}>
                  <View style={styles.datesContainer}>
                    <DateTime type={'date'} width={166} />
                    <View style={styles.dash}></View>
                    <DateTime type={'date'} width={166} />
                  </View>
                  <Map placeholder={'Геолокация игры'} width={367} availablePress={false} />
                </View>
              </View>
              <View>
                <Text style={styles.someTitle}>Стоимость входного билета в игру</Text>
                <View style={styles.gameTypesContainer}>
                  <Radio
                      list={free}
                      type={'priceView'}
                      setFlag={setFlag}
                      data={data}
                      setData={setData}
                  />
                </View>
              </View>
            </View>
          </GestureRecognizer>
        </ScrollView>
        <View style={[styles.bottomButton, { bottom: RH(20), alignItems: 'flex-end' }]}>
          <Button
              label={'Готово'}
              onPress={() => {
                showHideError()
              }}
              size={{ width: 144, height: 36 }}
              // selectAvailable={true}
          />
        </View>
      </ScreenMask>
  )
}

export default Index
