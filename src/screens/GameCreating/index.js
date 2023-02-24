import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native'
import { RH, RW } from '@/theme/utils'
//components
import Button from '@/assets/imgs/Button'
import Price from '@/components/inputs/price'
import Modal from '@/components/modal'
import SecondBlock from '@/components/forms/secondBlock'
import ScreenMask from '@/components/wrappers/screen'
import DarkButton from '@/assets/imgs/DarkButton'
import SearchAddresses from '../Map/SearchAddresses'
import style from './style'
// redux
import { useDispatch, useSelector } from 'react-redux'
import {
  createGame,
  setGame,
  setGameCreatedSuccessful,
  setOrganizer_in_the_game,
  setPlayers_gender,
} from '@/store/Slices/GameCreatingSlice'
import RadioBlock from '@/components/RadioBlock'
import DateComponent from '@/components/DateComponent'

const GameCreating = (props) => {
  const { game, response } = props.route?.params?.params
  const navigation = useNavigation()
  //states
  const initialState = useSelector((state) => state.game)

  const [errorText, setErrorText] = useState(false)
  const [flag, setFlag] = useState(false)
  const [modalOpen, setModalOpen] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  //redux
  const { token } = useSelector(({ auth }) => auth)
  const dispatch = useDispatch()

  const [startDate, setStartDate] = useState({
    date: new Date(),
    time: new Date(),
  })
  const [endDate, setEndDate] = useState({
    date: new Date(new Date().setDate(startDate.date.getDate() - 1)),
    time: new Date(),
  })
  const [organizer_in_the_game, setOrganizer_in_the_gameState] = useState([
    { id: 1, text: 'Участвует', checked: true },
    { id: 2, text: 'Не участвует', checked: false },
  ])
  const [priceList, setPriceList] = useState([
    { id: 1, text: 'Бесплатно', checked: true },
    { id: 2, text: 'Платно', checked: false },
  ])
  const [genderList, setGenderList] = useState([
    { id: 1, text: 'М', checked: false, label: 'm' },
    { id: 2, text: 'Ж', checled: false, label: 'mf' },
    { id: 3, text: 'Без ограничений', checked: true, label: 'm/f' },
  ])
  const handleClick = () => {
    console.log({
      ...initialState,
      start_date: startDate.date
        .toISOString()
        .substring(0, 10)
        .concat(
          ` ${
            startDate.time.toLocaleTimeString().slice(8, 10) == 'PM'
              ? +startDate.time.toLocaleTimeString().slice(0, 1) +
                12 +
                startDate.time.toLocaleTimeString().slice(1, 4)
              : startDate.time.toLocaleTimeString().slice(0, Platform.OS == 'ios' ? 4 : 5)
          }`,
        ),
      end_date: endDate.date
        .toISOString()
        .substring(0, 10)
        .concat(
          ` ${
            endDate.time.toLocaleTimeString().slice(8, 10) == 'PM'
              ? +endDate.time.toLocaleTimeString().slice(0, 1) +
                12 +
                endDate.time.toLocaleTimeString().slice(1, 4)
              : endDate.time.toLocaleTimeString().slice(0, Platform.OS == 'ios' ? 4 : 5)
          }`,
        ),
    })
    dispatch(
      createGame({
        ...initialState,
        start_date: startDate.date
          .toISOString()
          .substring(0, 10)
          .concat(
            ` ${
              startDate.time.toLocaleTimeString().slice(8, 10) == 'PM'
                ? +startDate.time.toLocaleTimeString().slice(0, 1) +
                  12 +
                  startDate.time.toLocaleTimeString().slice(1, 4)
                : startDate.time.toLocaleTimeString().slice(0, Platform.OS == 'ios' ? 4 : 5)
            }`,
          ),
        end_date: endDate.date
          .toISOString()
          .substring(0, 10)
          .concat(
            ` ${
              endDate.time.toLocaleTimeString().slice(8, 10) == 'PM'
                ? +endDate.time.toLocaleTimeString().slice(0, 1) +
                  12 +
                  endDate.time.toLocaleTimeString().slice(1, 4)
                : endDate.time.toLocaleTimeString().slice(0, Platform.OS == 'ios' ? 4 : 5)
            }`,
          ),
      }),
    )
    setModalOpen(true)
    setIsVisible(false)
  }
  useEffect(() => {
    dispatch(setGame(game._id))
    setIsVisible(true)
  }, [])

  useEffect(() => {
    setErrorText(false)
  }, [initialState])
  useEffect(() => {
    if (initialState.gameCreatedSuccessful) {
      navigation.navigate('GameTicket', { params: { initialState, game, name: game.name } })
      dispatch(setGameCreatedSuccessful(null))
    }
  }, [initialState.gameCreatedSuccessful])

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
            title="Дата и время начала игры"
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
          {/* {!initialState?.start_date ? (
            <Text style={style.errorText}>Обязательное поле для заполнения</Text>
          ) : null} */}
          <SecondBlock type={'player'} initialState={initialState} title={'Количество игроков'} />
          {/* {+initialState?.number_of_players_from < 0 ||
          +initialState?.number_of_players_from > +initialState?.number_of_players_to ? (
            !initialState?.number_of_players_from || !initialState?.number_of_players_to ? (
              <Text style={style.errorText}>Обязательное поле для заполнения</Text>
            ) : (
              <Text style={style.errorText}>Введите корректную число</Text>
            )
          ) : null} */}
          <SecondBlock type={'age'} initialState={initialState} title={'Возрастные ограничения'} />
          {+initialState?.age_restrictions_from < 0 ||
          +initialState?.age_restrictions_from > +initialState?.age_restrictions_to ? (
            !initialState?.age_restrictions_from || !initialState?.age_restrictions_to ? (
              <Text style={style.errorText}>Обязательное поле для заполнения</Text>
            ) : (
              <Text style={style.errorText}>Введите корректную возраст</Text>
            )
          ) : null}

          <RadioBlock
            onChange={(list) => {
              setGenderList(list)
              dispatch(setPlayers_gender(list.find((e) => e.checked).label))
            }}
            title="Половой признак игрока"
            list={genderList}
            titleStyle={{ ...style.titles, marginBottom: RW(23) }}
          />
          <SearchAddresses game={game} />

          <DateComponent
            title="Дата и время окончания поиска игроков"
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
          {/* {!initialState?.end_date ? (
            <Text style={style.errorText}>Обязательное поле для заполнения</Text>
          ) : initialState?.end_date <= initialState?.start_date ? (
            <Text style={style.errorText}>Введите корректную дату</Text>
          ) : null} */}
          <RadioBlock
            onChange={(list) => {
              setOrganizer_in_the_gameState(list)
              dispatch(setOrganizer_in_the_game(list.find((e) => e.text == 'Участвует').checked))
            }}
            title="Статус организатора в игре"
            list={organizer_in_the_game}
            titleStyle={{ ...style.titles, marginBottom: RW(23) }}
          />

          <RadioBlock
            onChange={(list) => {
              setPriceList(list)
            }}
            title="Стоимость входного билета на игру"
            list={priceList}
            titleStyle={{ ...style.titles, marginBottom: RW(23) }}
          />

          {flag ? (
            <View style={style.price}>
              <Price
                initialState={initialState}
                sliceNumber={13}
                text={'Сумма оплаты '}
                margin={RW(18)}
                width={RW(210)}
                placeholder={'Сумма оплаты 200р.'}
              />
            </View>
          ) : null}
          {!initialState?.ticket_price && flag ? (
            <Text style={style.errorText}>Обязательное поле для заполнения</Text>
          ) : null}
          <View style={{ position: 'absolute' }}>
            {!response && (
              <Modal
                modalVisible={isVisible}
                setIsVisible={setIsVisible}
                btnClose={false}
                item={
                  modalOpen ? (
                    <View style={style.regulationBlock}>
                      <Text style={style.title}>Правила</Text>
                      <Text style={style.textTwo}>{game?.rules}</Text>
                    </View>
                  ) : (
                    <View style={style.topBlock}>
                      <Text style={style.text}>Хотите, чтобы Ваша игра была в ТОП играх ?</Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          width: RW(220),
                        }}
                      >
                        <Button
                          light={true}
                          onPress={handleSubmit}
                          size={{ width: 100, height: 36 }}
                          label={'Да'}
                        />
                        <DarkButton
                          light={false}
                          onPress={handleSubmit}
                          size={{ width: 100, height: 36 }}
                          label={'Нет'}
                        />
                      </View>
                    </View>
                  )
                }
              />
            )}
          </View>
          <View style={flag ? { ...style.submitBlock } : { ...style.submitBlock, marginTop: 20 }}>
            <Button onPress={handleClick} size={{ width: 144, height: 36 }} label={'Готово'} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenMask>
  )
}
export default GameCreating
