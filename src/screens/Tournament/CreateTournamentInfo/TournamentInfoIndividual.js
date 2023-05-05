import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { _storageUrl } from '@/constants'
import { RH, RW, font } from '@/theme/utils'
import Modal from '@/components/modal'
import User from '@/components/User/user'
import { Players } from '@/assets/TestData'
import LightButton from '@/assets/imgs/Button'
import { FONT_INTER_BOLD, FONT_INTER_MEDIUM } from '@/theme/fonts'
import {
  BACKGROUND,
  DARK_BLUE,
  ICON,
  LIGHT_LABEL,
  LIGHT_RED,
  RADIO_TEXT,
  WHITE,
} from '@/theme/colors'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import Row from '@/components/wrappers/row'
import { createTournament } from '@/store/Slices/TournamentSlice'
const TournamentInfoIndividual = ({ route }) => {
  const props = route.params
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false)
  const initialState = useSelector(({ tournament }) => tournament)
  const { user } = useSelector(({ auth }) => auth)
  return (
    <ScreenMask>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.propsWrapper}>
        <View style={styles.bigIcon}>
          <Image
            style={{ width: RW(260), height: RH(260), resizeMode: 'contain' }}
            source={{ uri: _storageUrl + (props?.game?.img ? props?.game?.img : props?.img) }}
          />
        </View>
        <View>
          <Row>
            <View style={{ paddingVertical: RH(20) }}></View>
            <Text style={styles.eachInfo}>Тип турнира :</Text>
            <Text style={styles.eachInfoTwo}>
              {/* Своя игра */}
              {props?.game?.name}
            </Text>
          </Row>
          <Row>
            <View style={{ paddingVertical: RH(20) }}></View>
            <Text style={styles.eachInfo}>Название турнира: </Text>
            <Text style={styles.eachInfoTwo}> {initialState?.name}</Text>
          </Row>
          <Row>
            <View style={{ paddingVertical: RH(20) }}></View>
            <Text style={styles.eachInfo}>Описание турнира: </Text>
            <Text style={styles.eachInfoTwo}>
              {initialState?.description?.length ? initialState?.description : 'Нету'}
            </Text>
          </Row>
          <Row>
            <View style={{ paddingVertical: RH(20) }}></View>
            <Text style={styles.eachInfo}>Количество игроков</Text>
            <Text style={styles.eachInfoTwo}>
              от {initialState.number_of_participants_from} до{' '}
              {initialState.number_of_participants_to}
            </Text>
          </Row>
          <Row>
            <View style={{ paddingVertical: RH(20) }}></View>
            <Text style={styles.eachInfo}>Дата турнира:</Text>
            <Text style={styles.eachInfoTwo}>{initialState.start_date.slice(0, 10)}</Text>
          </Row>
          <Row>
            <View style={{ paddingVertical: RH(20) }}></View>
            <Text style={styles.eachInfo}>Время:</Text>
            <Text style={styles.eachInfoTwo}>{initialState?.end_search_date.slice(10)}</Text>
          </Row>
          <Row>
            <View style={{ paddingVertical: RH(20) }}></View>
            <Text style={styles.eachInfo}>Адрес проведения турнира:</Text>
            <Text style={styles.eachInfoTwo}>{initialState.address_name}</Text>
          </Row>
          <Row>
            <View style={{ paddingVertical: RH(20) }}></View>
            <Text style={styles.eachInfo}>Плата за участие: </Text>
            <Text style={styles.eachInfoTwo}>
              {initialState?.ticket_price ? `${initialState?.ticket_price} руб.` : 'Бесплатно'}
            </Text>
          </Row>
          <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
            <Text style={styles.eachInfo}>Организатор турнира:</Text>
            <View style={{ width: RW(60), paddingBottom: RH(20) }}>
              <User
                size={30}
                onPressItem={{
                  item: <User size={390} pressedUser={user} />,
                  modalClose: false,
                  // onClickFunc: handleClick,
                }}
                pressedUser={user}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 'auto',
            marginBottom: RH(30),
            marginTop: RH(100),
          }}
        >
          <LightButton
            label={'Редактировать'}
            size={{ width: 220, height: 40 }}
            onPress={() => {
              navigation.navigate('CreateTournamentInfoIndividual')
              //   dispatch(joinGame(props?.id, navigation, setError, setModalVisible))
            }}
          />
          <LightButton
            label={'Готово'}
            size={{ width: 120, height: 40 }}
            onPress={() => {
              setModalVisible(true)
              dispatch(createTournament(initialState))
              // dispatch(joinGame(props?.id, navigation, setError, setModalVisible))
            }}
          />
        </View>

        <Modal
          item={
            <View style={styles.modal}>
              <Text style={styles.modalText}>Вы успешно создали турнир!</Text>
            </View>
          }
          modalVisible={modalVisible}
          navigationText={'Home'}
          setIsVisible={setModalVisible}
        />
      </ScrollView>
    </ScreenMask>
  )
}

export default TournamentInfoIndividual

export const styles = StyleSheet.create({
  gameItemContainer: {
    width: RW(395),
    minHeight: RH(99),
    maxHeight: RH(116),
    // backgroundColor: 'rgba(101, 122, 197, 0.6)',
    borderRadius: RW(8),
    alignSelf: 'center',
    marginVertical: RW(6),
    flexDirection: 'row',
    alignItems: 'center',
    // position: 'relative',
    alignContent: 'center',
    justifyContent: 'center',
  },
  midText: {
    ...font('medium', 17, WHITE),
    width: RW(240),
    flexWrap: 'wrap',
    textAlign: 'left',
  },
  priceText: {
    ...font('medium', 12, WHITE),
    width: RW(230),
    textAlign: 'left',
  },
  playersText: {
    textAlign: 'center',
    ...font('regular', 10, WHITE),
  },
  topLoading: {
    textAlign: 'center',
    ...font('regular', 19, WHITE),
    paddingVertical: RH(12),
  },
  countCircle: {
    backgroundColor: ICON,
    width: RW(28),
    height: RH(28),
    borderRadius: RW(19),
    alignItems: 'center',
    justifyContent: 'center',
  },
  countOfPlayersText: {
    ...font('bold', 14, WHITE),
  },
  horizontalLine: {
    width: '59%',
    marginTop: RH(10),
    alignSelf: 'flex-start',
    borderWidth: RW(1),
    borderColor: RADIO_TEXT,
  },
  gameListContainer: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },

  gameItemTop: {
    flexDirection: 'row',
  },
  gameTitle: {
    ...font('bold', 20, LIGHT_LABEL, 20),
    color: WHITE,
    marginTop: RH(25),
    marginBottom: RH(25),
    textAlign: 'center',
  },
  gameMiddleContainer: {
    marginLeft: RW(25),
    marginRight: RW(15),
    marginTop: RH(10),
  },
  distanceBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameItemTopText: {
    ...font('bold', 18, WHITE, 20),
  },
  gameItemPriceText: {
    ...font('bold', 12, WHITE, 20),
    marginTop: RH(7),
  },
  gameItemBottomText: {
    ...font('bold', 18, WHITE, 20),
    marginTop: RH(5),
  },
  gameItemBottom: {
    flexDirection: 'row',
    marginRight: RW(3),
  },
  line: {
    borderWidth: RW(1),
    height: RW(45),
    borderColor: RADIO_TEXT,
    marginHorizontal: '2%',
  },

  gameItemCircle: {
    backgroundColor: '#596aaa',
    alignItems: 'center',
    justifyContent: 'center',
    width: RW(30),
    height: RH(30),
    borderRadius: RH(15),
  },
  circleText: {
    color: WHITE,
    fontSize: RH(14),
    fontFamily: FONT_INTER_MEDIUM,
  },
  playersIn: {
    color: WHITE,
    fontSize: RH(14),
    fontFamily: FONT_INTER_MEDIUM,
  },
  bigIcon: {
    width: '100%',
    alignItems: 'center',
    marginTop: RH(42),
    marginBottom: RH(33),
  },
  eachInfo: {
    ...font('regular', 16, WHITE, 20),
    marginLeft: RW(11),
  },
  eachInfoTwo: {
    ...font('bold', 16, ICON, 20),
    marginLeft: RW(11),
    width: '50%',
    flexWrap: 'wrap',
    // marginBottom: RH(24),
  },
  eachInfoRegular: {
    fontFamily: FONT_INTER_BOLD,
    fontSize: RH(14),
    color: WHITE,
    paddingVertical: RH(10),
  },
  itemWrapper: {
    height: '85%',
    flexDirection: 'column',
  },
  priceTextBlock: {
    width: '100%',
    marginLeft: RW(130),
  },
  modal: {
    width: RW(266),
    alignSelf: 'center',
    backgroundColor: BACKGROUND,
    borderRadius: RW(20),
    padding: RW(40),
    marginHorizontal: RW(30.5),
  },
  modalText: {
    ...font('regular', 16, WHITE, 20),
    textAlign: 'center',
  },
})
