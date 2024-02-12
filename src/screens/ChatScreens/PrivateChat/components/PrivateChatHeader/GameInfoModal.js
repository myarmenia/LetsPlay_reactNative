import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { LIGHT_LABEL, WHITE } from '@/theme/colors'
import { RH, RW } from '@/theme/utils'
import { FONT_INTER_REGULAR } from '@/theme/fonts'
import ArrowRight from '@/assets/svgs/ArrowRight'
import Modal from '@/components/modal'
import User from '@/components/User/User'
import { useSelector } from 'react-redux'
import dateFormater from '../../../../../helpers/dateFormater'
import { _storageUrl } from '@/constants'
import Share from 'react-native-share'
import ViewShot from "react-native-view-shot";




const GameInfoModal = ({ modalVisible, setModalVisible, gameID }) => {
  const took_part_games = useSelector(({ auth }) => auth.user.took_part_games)
  const gameInfo = took_part_games.find((elm) => elm.id == gameID)
  const gameGender =
    gameInfo?.players_gender == 'm/f' ? 'М/Ж' : gameInfo?.players_gender == 'm' ? 'М' : 'Ж'
  const viewShot = React.useRef();






  const shareImage = async () => {
    viewShot.current.capture()
      .then(async (uri) => {
        const shareOptions = {
          message: 'Информация об игре',
          url: uri,
        };
        await Share.open(shareOptions);
      }).catch((err) => {
      })

  };





  return (
    <Modal
      modalVisible={modalVisible}
      setIsVisible={setModalVisible}
      btnClose={false}
      item={
        <ViewShot
          ref={viewShot}
          options={{
            format: "jpg",
            quality: 0.9,
            fileName: 'Информация об игре'
          }}
        >
          <View style={styles.modalWrapper}>
            <View style={styles.regulationBlock}>
              <View style={styles.rowBox}>

                <Pressable onPress={shareImage}>
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
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: RH(10) }}>
                  <Text style={[styles.title, { paddingTop: 0 }]}>Организатор игры:</Text>
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
        </ViewShot>
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
  generatedImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
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
