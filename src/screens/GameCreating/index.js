import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAvoidingView, ScrollView, Text, View } from 'react-native'
import { RH, RW } from '@/theme/utils'
//components
import Button from '@/assets/imgs/Button'
import Price from '@/components/inputs/price'
import Modal from '@/components/modal'
import FirstBlock from '@/components/forms/firstBlock'
import SecondBlock from '@/components/forms/secondBlock'
import ThirdBlock from '@/components/forms/thirdBlock'
import ScreenMask from '@/components/wrappers/screen'
import DarkButton from '@/assets/imgs/DarkButton'
import SearchAddresses from '../Map/SearchAddresses'
import style from './style'
// redux
import axiosInstance from '@/store/Api'
import { useDispatch, useSelector } from 'react-redux'
import { createGame, setGame } from '@/store/Slices/GameCreatingSlice'
import { token } from '@/store/Slices/AuthSlice'

const GameCreating = props => {
  const { game, response } = props.route?.params?.params
  // const game = props.route.params.initialState
  // const initialState = {
  //   gameDayDate: undefined,
  //   gameDayTime: new Date(),
  //   number_of_players_from: '',
  //   number_of_players_to: '',
  //   age_restrictions_from: '',
  //   number_of_players_to: '',
  //   gender: 'М/Ж',
  //   addressValue: 'qwert',
  //   end_date: undefined,
  //   lastDayTime: new Date(),
  //   statusOrganizer: 'Участвует',
  //   price: 'Бесплатно',
  //   ticket_price: '',
  // }
  const navigation = useNavigation()
  //states
  const initialState = useSelector(state => state.game)
  const [errorText, setErrorText] = useState(false)
  const [flag, setFlag] = useState(false)
  const [modalOpen, setModalOpen] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  //redux
  const { token } = useSelector(({ auth }) => auth)
  const dispatch = useDispatch()

  //data for radio buttons
  const genderList = [
    { id: 1, text: 'М', checked: false },
    { id: 2, text: 'Ж', checled: false },
    { id: 3, text: 'Без ограничений', checked: true },
  ]

  const participateList = [
    { id: 1, text: 'Участвует', checked: true },
    { id: 2, text: 'Не участвует', checked: false },
  ]

  const freeList = [
    { id: 1, text: 'Бесплатно', checked: true },
    { id: 2, text: 'Платно', checked: false },
  ]

  const handleClick = () => {
    console.log(initialState)
    axiosInstance
      .post('api/create/game', initialState, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => {
        console.log(res.config.message)
        //if response success navigate GameTicket
        // navigation.navigate('GameTicket', {  initialState,  })
      })
      .catch(err => console.log(err.request))

    setModalOpen(true)
    setIsVisible(false)
  }
  const handleSubmit = () => {}
  useEffect(() => {
    dispatch(setGame({ game: game.title }))
    setIsVisible(true)
  }, [])

  useEffect(() => {
    setErrorText(false)
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
          <FirstBlock
            errorText={errorText}
            margin={RH(29)}
            title={'Дата и время начала игры'}
            place={'onTop'}
          />
          {!initialState?.start_date ? (
            <Text style={style.errorText}>Обязательное поле для заполнения</Text>
          ) : null}
          <SecondBlock type={'player'} initialState={initialState} title={'Количество игроков'} />
          {+initialState?.number_of_players_from < 0 ||
          +initialState?.number_of_players_from > +initialState?.number_of_players_to ? (
            !initialState?.number_of_players_from || !initialState?.number_of_players_to ? (
              <Text style={style.errorText}>Обязательное поле для заполнения</Text>
            ) : (
              <Text style={style.errorText}>Введите корректную число</Text>
            )
          ) : null}
          <SecondBlock type={'age'} initialState={initialState} title={'Возрастные ограничения'} />
          {+initialState?.age_restrictions_from < 0 ||
          +initialState?.age_restrictions_from > +initialState?.age_restrictions_to ? (
            !initialState?.age_restrictions_from || !initialState?.age_restrictions_to ? (
              <Text style={style.errorText}>Обязательное поле для заполнения</Text>
            ) : (
              <Text style={style.errorText}>Введите корректную возраст</Text>
            )
          ) : null}
          <ThirdBlock
            initialState={initialState}
            type={'gender'}
            list={genderList}
            title={'Половой признак игрока'}
          />
          <SearchAddresses game={game} />
          <FirstBlock title={'Дата и время окончания поиска игроков'} place={'onBottom'} />
          {!initialState?.end_date ? (
            <Text style={style.errorText}>Обязательное поле для заполнения</Text>
          ) : initialState?.end_date <= initialState?.start_date ? (
            <Text style={style.errorText}>Введите корректную дату</Text>
          ) : null}
          <ThirdBlock
            initialState={initialState}
            type={'statusOrganizer'}
            list={participateList}
            title={'Статус организатора в игре'}
          />
          <ThirdBlock
            initialState={initialState}
            type={'priceView'}
            setFlag={setFlag}
            list={freeList}
            title={'Стоимость входного билета на игру'}
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
                      <Text style={style.textTwo}>{game?.info}</Text>
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
