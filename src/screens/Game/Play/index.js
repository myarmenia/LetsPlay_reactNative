import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import { styles } from '@/screens/Game/Play/style'
import Button from '@/assets/imgs/Button'
import GestureRecognizer from 'react-native-swipe-gestures'
import Radio from '@/components/checkbox/radio'
import DateTime from '@/services/DateTime'
import Map from '@/components/inputs/map'
import { font, RH, RW } from '@/theme/utils'
import GameType from '../gameType'
import { SCREEN_HEIGHT } from '@/constants'
import CircleButton from '@/components/buttons/circle'
import CircleAdd from '@/components/buttons/circleAdd'
import GamesList from '../gamesList/gamesList'
const CREATE_GAME = 'CREATE_GAME'
const PARTICIPATION_GAME = 'PARTICIPATION_GAME'

function Index({ navigation }) {
  const [chooseType, setChooseType] = useState(false)
  const [showGameTypes, setShowGameTypes] = useState(false)
  const [showDropDown, setShowDropDown] = useState(false)

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
    { id: 2, text: 'Все игры', checked: false },
    { id: 3, text: 'Выбрать игру', checked: false },
  ]
  const [list, setList] = useState(chooseGameType)

  const freeOrPaid = [
    { id: 4, text: 'Бесплатно', checked: true },
    { id: 5, text: 'Платно', checked: false },
  ]
  const [free, setFree] = useState(freeOrPaid)
  const [firstDate, setFirstDate] = useState('')
  const [secondDate, setSecondDate] = useState('')
  const checkChecks = gameTypes.some(elm => elm.checked === true)
  const [errorMessage, setErrorMessage] = useState(false)
  const showHideError = () => {
    if (!checkChecks && list[2].checked == true) {
      setErrorMessage(true)
      console.log('Выберите один из игр')
    } else {
      setErrorMessage(false)
      if (list[2].id !== true) {
        navigation.navigate('GameList')
      } else {
        console.log('error')
      }
    }
  }

  if (!chooseType) {
    return (
      <ScreenMask>
        <GestureRecognizer
          onSwipeLeft={state => navigation.goBack()}
          style={{
            flex: 1,
          }}
        >
          <View style={styles.btnBlock}>
            <View style={styles.btnActiveGames}>
              <Button
                onPress={() => setChooseType(CREATE_GAME)}
                label={'Создать игру'}
                size={{ width: 281, height: 50 }}
              />
            </View>
            <View>
              <Button
                onPress={() => setChooseType(PARTICIPATION_GAME)}
                label={'Принять участие в игре'}
                size={{ width: 281, height: 50 }}
              />
            </View>
          </View>
        </GestureRecognizer>
      </ScreenMask>
    )
  }

  if (chooseType === CREATE_GAME) {
    return (
      <ScreenMask>
        <GestureRecognizer
          onSwipeLeft={state => setChooseType(false)}
          style={{
            flex: 1,
          }}
        >
          <View style={styles.btnBlock}>
            <View style={styles.btnActiveGames}>
              <Button
                onPress={() => {
                  setChooseType(false)
                  navigation.navigate('ActiveGames')
                }}
                label={'Активные игры'}
                size={{ width: 281, height: 50 }}
              />
            </View>
            <View>
              <Button
                onPress={() => {
                  setChooseType(false)
                  navigation.navigate('BoardGames')
                }}
                label={'Настольные игры'}
                size={{ width: 281, height: 50 }}
              />
            </View>
          </View>
        </GestureRecognizer>
      </ScreenMask>
    )
  }
  if (chooseType === PARTICIPATION_GAME) {
    return (
      <ScreenMask>
        <ScrollView>
          <GestureRecognizer
            onSwipeLeft={state => navigation.goBack()}
            style={{
              flex: 1,
            }}
          >
            <Text style={styles.someTitle}>Игра</Text>
            <View style={styles.gameTypesContainer}>
              <Radio
                list={list}
                setShowGameTypes={setShowGameTypes}
                showDropDown={showDropDown}
                setShowDropDown={setShowDropDown}
                showGameTypes={showGameTypes}
                topBtn={true}
                setList={setList}
                typeFunc={'game'}
              />
            </View>

            {showGameTypes ? (
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
            <View>
              <Text style={styles.someTitle}>Дата игры</Text>
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
                    <DateTime
                      type={'date'}
                      width={166}
                      dateTime={firstDate}
                      setter={setFirstDate}
                    />
                    <View style={styles.dash}></View>
                    <DateTime
                      type={'date'}
                      width={166}
                      dateTime={secondDate}
                      setter={setSecondDate}
                    />
                  </View>
                  <Map placeholder={'Геолокация игры'} width={366} availablePress={false} />
                </View>
              </View>
              <View>
                <Text style={styles.someTitle}>Стоимость входного билета в игру</Text>
                <View style={styles.gameTypesContainer}>
                  <Radio list={free} topBtn={false} setFree={setFree} typeFunc={'paid'} />
                </View>
              </View>
            </View>
          </GestureRecognizer>
        </ScrollView>
        <View style={[styles.bottomButton, { bottom: RH(20) }]}>
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
}

export default Index
