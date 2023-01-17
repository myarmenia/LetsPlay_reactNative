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
import style from "@/screens/GameCreating/style";
import Price from "@/components/inputs/price";
// import CircleButton from '@/components/buttons/circle'
// import CircleAdd from '@/components/buttons/circleAdd'
// import GamesList from '../gamesList/gamesList'
const CREATE_GAME = 'CREATE_GAME'
const PARTICIPATION_GAME = 'PARTICIPATION_GAME'

function Index({ navigation }) {
  const [chooseType, setChooseType] = useState(false);
  const [showGameTypes, setShowGameTypes] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [flag, setFlag] = useState(false)

  const initialState = {
    price: 'Бесплатно',
    gameValue: 'Игры из Ваших предпочтений',
    statusOrganizer: 'Индивидуальный',
  }
  const [data , setData] = useState(initialState)

  const types = [
    {id: 1, name: 'Элиас', checked: false},
    {id: 2, name: 'Мафия', checked: false},
    {id: 3, name: 'Покер', checked: false},
    {id: 4, name: 'Монополия', checked: false},
    {id: 5, name: 'Крокодил', checked: false},
    {id: 6, name: 'Своя игра', checked: false},
  ]
  const typesActive = [
    {id: 7, name: 'Футбол', checked: false},
    {id: 8, name: 'Навес', checked: false},
    {id: 9, name: 'Триста', checked: false},
    {id: 10, name: 'Баскетбол', checked: false},
    {id: 11, name: 'Волейбол ', checked: false},
    {id: 12, name: 'Пионербол', checked: false},
    {id: 13, name: 'Хоккей', checked: false},
    {id: 14, name: 'Квест', checked: false},
    {id: 15, name: 'Своя игра', checked: false},
  ]

  const [gameTypes, setGameTypes] = useState(types)
  const chooseGameType = [
    {id: 1, text: 'Игры из Ваших предпочтений', checked: true},
    {id: 4, text: 'Игры из подписок', checked: false},
    {id: 2, text: 'Все игры', checked: false},
    {id: 3, text: 'Выбрать игру', checked: false},
  ]
  const [list, setList] = useState(chooseGameType)


  const freeOrPaid = [
    {id: 4, text: 'Бесплатно', checked: true},
    {id: 5, text: 'Платно', checked: false},
  ]
  const [free, setFree] = useState(freeOrPaid)
  const checkChecks = gameTypes.some(elm => elm.checked === true)
  const [errorMessage, setErrorMessage] = useState(false)
  const showHideError = () => {
    if (!checkChecks && list[2].checked === true) {
      setErrorMessage(true)
      console.log('Выберите один из игр')
    } else {
      setErrorMessage(false)
      if (list[2].id !== true) {
        if (data.statusOrganizer === 'Индивидуальный'){
        navigation.navigate('TournamentList')
        }else {
        navigation.navigate('TournamentTeam')
        }
      } else {
        console.log('error')
      }
    }
  }
  return (
      <ScreenMask>
        <ScrollView>
          <GestureRecognizer
              onSwipeLeft={state => navigation.goBack()}
              style={{
                flex: 1,
              }}
          >
            <Text style={{...styles.someTitle , marginTop: RH(20), marginBottom: RH(17)}}>Игра</Text>
            <View style={{...styles.gameTypesContainer , marginLeft: RW(30)}}>
              <Radio
                  list={list}
                  setShowGameTypes={setShowGameTypes}
                  showDropDown={showDropDown}
                  setShowDropDown={setShowDropDown}
                  showGameTypes={showGameTypes}
                  topBtn={true}
                  setList={setList}
                  typeFunc={'game'}
                  data={data}
                  type ={'gameType'}
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
                      typesActive={typesActive}
                  />
                  {/* Добавить игру */}


                  {/* <View style={styles.circleAddBox}>
                  <CircleAdd />
                  <Text style={styles.addGameText}>Добавить игру</Text>
                </View> */}
                </>
            ) : null}
            <View>
              <Text style={{ color: '#657AC5', fontSize: RW(16), marginLeft: RW(15), marginBottom: RH(20)}}>
                Формат турнира
              </Text>
              <View style={{ marginLeft: RW(30) }}>
                <Radio
                    data={data}
                    setData={setData}
                    type={'statusOrganizer'}
                    list={[
                      { id: 1, text: 'Индивидуальный', checked: true },
                      { id: 2, text: 'Командный', checked: false },
                    ]}
                />
              </View>
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
                    <DateTime type={'date'} width={166}/>
                    <View style={styles.dash}></View>
                    <DateTime type={'date'} width={166}/>
                  </View>
                  <Map placeholder={'Геолокация игры'} width={367} availablePress={false}/>
                </View>
              </View>
              <View>
                <Text style={{...styles.someTitle , marginBottom: RH(15)}}>Стоимость входного билета в игру</Text>
                <View style={{...styles.gameTypesContainer , marginLeft: RW(30)}}>
                  <Radio flag={flag} setFlag={setFlag} data={data} setData={setData} list={free} topBtn={false} setFree={setFree} type={'priceView'} typeFunc={'paid'}/>
                </View>
                {flag ? (
                    <View style={style.price}>
                      <Price
                          data={data}
                          setData={setData}
                          sliceNumber={13}
                          text={'Сумма оплаты '}
                          margin={RW(18)}
                          width={RW(210)}
                          placeholder={'Сумма оплаты 200р.'}
                      />

                    </View>
                ) : null}
              </View>
            </View>
          </GestureRecognizer>
        </ScrollView>
        <View style={styles.bottomButton}>
          <Button
              label={'Готово'}
              onPress={() => {
                showHideError()
              }}
              size={{width: 144, height: 36}}
              // selectAvailable={true}
          />
        </View>

      </ScreenMask>
  )
}

export default Index
