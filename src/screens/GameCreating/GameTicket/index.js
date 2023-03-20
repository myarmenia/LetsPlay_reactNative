import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import Ticket from './ticket'
import Button from '@/assets/imgs/Button'
import { font, RH, RW } from '@/theme/utils'
import Modal from '@/components/modal'
import EditSvg from '@/assets/svgs/editSvg'
import CheckedCheckbox from '@/assets/svgs/checkedCheckbox'
import ShareSvg from '@/assets/svgs/shareSvg'
import { useNavigation } from '@react-navigation/native'
import { LIGHT_LABEL, WHITE } from '@/theme/colors'
import { useDispatch } from 'react-redux'
import { createGame } from '@/store/Slices/GameCreatingSlice'

function Index({ route }) {
  const navigation = useNavigation()
  const { flag, game, data, initialState, name, dates } = route.params.params
  const [isVisible, setIsVisible] = useState(false)
  const [success, setSuccess] = useState(false)
  const [modalClose, setModalClose] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    if (flag) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [])
  return (
    <ScreenMask style={{ paddingHorizontal: 0 }}>
      <View>
        <Ticket data={data} game={game} initialState={initialState} name={name} dates={dates} />
      </View>
      <View style={styles.gameTicketButtonsBlock}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('GameCreating', { screen: 'GameCreating', params: { game } })
          }}
        >
          <EditSvg />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton}>
          <ShareSvg />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            console.log(initialState)
            dispatch(
              createGame(
                {
                  ...initialState,
                  start_date: dates[0],
                  end_date: dates[1],
                },
                () => navigation.navigate('Home', { flag: true, game, data }),
              ),
            )
          }}
        >
          <CheckedCheckbox />
        </TouchableOpacity>
        {/*<Button*/}

        {/*    size={{width: 192, height: 36}}*/}
        {/*    label={'Редактировать'}*/}
        {/*/>*/}
        {/*<Button*/}
        {/*    size={{width: 166, height: 36}}*/}
        {/*    label={'Готово'}*/}
        {/*/>*/}
      </View>
      <View style={{ position: 'absolute' }}>
        <Modal
          modalClose={modalClose}
          modalVisible={isVisible}
          setIsVisible={setIsVisible}
          btnClose={false}
          item={
            !success ? (
              <View style={styles.firstTicketModalBlock}>
                <Text style={{ ...styles.text, width: RW(209), marginBottom: 0 }}>
                  Для завершения необходимо оплатить стоимость комиссий за организацию платной игры.
                </Text>
                <Text style={{ ...styles.text, marginTop: 0, marginBottom: RH(42) }}>
                  {' '}
                  Стоимость: 100 р
                </Text>
                <Button
                  onPress={() => {
                    setSuccess(true)
                    setModalClose(false)
                  }}
                  size={{ width: 144, height: 36 }}
                  label={'Оплатить'}
                />
              </View>
            ) : (
              <View style={styles.secondTicketModalBlock}>
                <Text style={styles.text}>Оплата прошла успешна. Вы успешно создали игру!</Text>
              </View>
            )
          }
        />
      </View>
    </ScreenMask>
  )
}

const styles = StyleSheet.create({
  gameTicketButtonsBlock: {
    width: '100%',
    height: RH(65),
    paddingHorizontal: RW(84),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: LIGHT_LABEL,
    position: 'absolute',
    bottom: 0,
  },
  shareButton: {
    position: 'absolute',
    bottom: '50%',
    left: '68%',
  },
  firstTicketModalBlock: {
    width: RW(306),
    height: RH(300),
    backgroundColor: LIGHT_LABEL,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: RW(20),
    alignItems: 'center',
  },
  text: {
    ...font('regular', 16, WHITE, 25),
    width: RW(200),
    textAlign: 'center',
    marginTop: RH(49),
    marginBottom: RH(31),
  },
  secondTicketModalBlock: {
    width: RW(306),
    height: RH(191),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: LIGHT_LABEL,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: RW(20),
  },
})

export default Index
