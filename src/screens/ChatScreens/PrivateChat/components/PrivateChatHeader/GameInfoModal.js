import { Pressable, StyleSheet, Text, View, Share } from 'react-native'
import React from 'react'
import { LIGHT_LABEL, WHITE } from '@/theme/colors'
import { RW } from '@/theme/utils'
import { FONT_INTER_REGULAR } from '@/theme/fonts'
import ArrowRight from '@/assets/svgs/ArrowRight'
import Modal from '@/components/modal'
import User from '@/components/User/user'
import { useSelector } from 'react-redux'
import dateFormater from '../../../../../helpers/dateFormater'

const GameInfoModal = ({ modalVisible, setModalVisible, gameID }) => {
  const took_part_games = useSelector(({ auth }) => auth.user.took_part_games)
  const gameInfo = took_part_games.find((elm) => elm.id == gameID)
  console.log(took_part_games, 'tookpartgames')
  const gameGender =
    gameInfo?.players_gender == 'm/f' ? 'М/Ж' : gameInfo?.players_gender == 'm' ? 'М' : 'Ж'

  const share = async () => {
    try {
      const result = await Share.share({
        message: 'React Native | A framework for building native apps using React',
      })
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message)
    }
  }
  return (
    <Modal
      modalVisible={modalVisible}
      setIsVisible={setModalVisible}
      btnClose={false}
      item={
        <View style={styles.modalWrapper}>
          <View style={styles.regulationBlock}>
            <View style={styles.rowBox}>
              <Pressable onPress={share}>
                <ArrowRight />
              </Pressable>
            </View>
            <View style={styles.titleColumnBox}>
              <Text style={styles.title}>Тип игры: {gameInfo?.game?.name}</Text>
              <Text style={styles.title}>
                Дата и время игры: {dateFormater(gameInfo?.start_date)}
              </Text>
              <Text style={styles.title}>
                Количество игроков: от {gameInfo?.number_of_players_from} до{' '}
                {gameInfo?.number_of_players_to}
              </Text>
              <Text style={styles.title}>
                Возраст игроков: {gameInfo?.age_restrictions_from}-{gameInfo?.age_restrictions_to}
              </Text>
              <Text style={styles.title}>Половой признак игроков: {gameGender}</Text>
              <Text style={styles.title}>Адрес проведения игры: {gameInfo?.address_name}</Text>
              <Text style={styles.title}>
                Дата и время окончания поиска игроков: {dateFormater(gameInfo?.end_date)}
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.title}>Организатор игры:</Text>
                <View style={{ left: 10 }}>
                  <User
                    size={30}
                    onPressItem={{
                      item: <User size={370} />,
                      modalClose: false,
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      }
    />
  )
}
export default GameInfoModal

const styles = StyleSheet.create({
  regulationBlock: {
    backgroundColor: LIGHT_LABEL,
    borderRadius: RW(20),
    width: RW(357),
    top: '-5%',
    padding: RW(30),
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
