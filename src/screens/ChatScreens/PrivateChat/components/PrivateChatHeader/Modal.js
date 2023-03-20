import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import React from 'react'
import { LIGHT_LABEL, WHITE } from '@/theme/colors'
import { RW } from '@/theme/utils'
import { FONT_INTER_REGULAR } from '@/theme/fonts'
import ArrowRight from '@/assets/svgs/ArrowRight'
import InfoSvg from '@/assets/svgs/infoSvg'
import Modal from 'react-native-modal'
import { useSelector } from 'react-redux'

const ModalItem = ({ modalVisible, setModalVisible, gameID }) => {
  // const teamInfo = useSelector(({ auth }) => auth.user)
  // console.log(teamInfo)

  const took_part_games = useSelector(({ auth }) => auth.user.took_part_games)
  const gameInfo = took_part_games?.find(({ _id }) => _id == gameID)
  const gameDate = new Date(gameInfo?.start_date)?.toLocaleDateString().split('/').join('.')
  const gameDateTime = new Date(gameInfo?.start_date)?.toTimeString().split(':')
  const gameGender =
    gameInfo?.players_gender == 'm/f' ? 'М/Ж' : gameInfo?.players_gender == 'm' ? 'М' : 'Ж'
  const playersSearchDate = new Date(gameInfo?.end_date)?.toLocaleDateString().split('/').join('.')
  const playersSearchTime = new Date(gameInfo?.end_date)?.toTimeString().split(':')
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onBackdropPress={() => setModalVisible(false)}
    >
      <View style={styles.regulationBlock}>
        <View style={styles.rowBox}>
          <ArrowRight />
          <View style={{ paddingLeft: 10 }}>
            <InfoSvg />
          </View>
        </View>
        <View style={styles.titleColumnBox}>
          <Text style={styles.title}>Тип игры: {gameInfo?.game?.name}</Text>
          <Text style={styles.title}>
            Дата и время игры: {gameDate}, {gameDateTime[0]}:{gameDateTime[1]}
          </Text>
          <Text style={styles.title}>
            Количество игроков: от {gameInfo?.number_of_players_from} до{' '}
            {gameInfo?.number_of_players_to}
          </Text>
          <Text style={styles.title}>
            Возраст игроков: {gameInfo?.age_restrictions_from}-{gameInfo?.age_restrictions_to}
          </Text>
          <Text style={styles.title}>Половой признак игроков: {gameGender}</Text>
          <Text style={styles.title}>Адрес проведения игры:</Text>
          <Text style={styles.title}>
            Дата и время окончания поиска игроков: {playersSearchDate}, {playersSearchTime[0]}:
            {playersSearchTime[1]}
          </Text>
          {/* <Text style={styles.title}>Стоимость входного билета на игру: 500 руб.</Text> */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.title}>Организатор игры:</Text>
          </View>
        </View>
      </View>
    </Modal>
  )
}
export default ModalItem

const styles = StyleSheet.create({
  regulationBlock: {
    backgroundColor: LIGHT_LABEL,
    borderRadius: RW(20),
    width: RW(357),
    padding: RW(35),

    alignSelf: 'center',
  },
  rowBox: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  titleColumnBox: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '100%',
    alignItems: 'flex-start',
  },
  title: {
    color: WHITE,
    fontSize: RW(14),
    fontFamily: FONT_INTER_REGULAR,
    paddingTop: '5%',
  },
})
