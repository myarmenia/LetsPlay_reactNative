import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { _storageUrl } from '@/constants'
import { RH, RW, font } from '@/theme/utils'
import Modal from '@/components/modal'
import User from '@/components/User/user'
import LightButton from '@/components/buttons/Button'
import { FONT_INTER_BOLD, FONT_INTER_MEDIUM } from '@/theme/fonts'
import { BACKGROUND, ICON, LIGHT_LABEL, RADIO_TEXT, WHITE } from '@/theme/colors'
import { useDispatch, useSelector } from 'react-redux'
import { resetSingleTournirData } from '@/store/Slices/TournamentReducer/TournamentSlice'
import FastImage from 'react-native-fast-image'
import moment from 'moment'
import { joinPlayer, joinTeam } from '@/store/Slices/TournamentReducer/TournamentApies'
import Row from '@/components/wrappers/row'


const JoinTournament = ({ route }) => {

  const dispatch = useDispatch()
  const { user } = useSelector(({ auth }) => auth)



  const [errorText, setErrorText] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const { choosenTournir, joinedTeamInfo } = useSelector(({ tournament }) => tournament)






  const handleClick = async () => {
    if (!choosenTournir.team_tourney) {
      dispatch(joinPlayer(choosenTournir._id))
        .unwrap()
        .then((res) => {
          setErrorText(false)
          setModalVisible(true)
          dispatch(resetSingleTournirData())
        })
        .catch((err) => {
          setErrorText(err)
        })
    } else {
      dispatch(joinTeam(joinedTeamInfo))
        .unwrap()
        .then((res) => {
          setErrorText(false)
          setModalVisible(true)
          dispatch(resetSingleTournirData())
        })
        .catch((err) => {
          setErrorText(err)
        })
    }
  }

  const genders = { m: 'М', f: 'Ж', 'm/f': 'Без ограничений' }
  return (
    <ScreenMask>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.propsWrapper}>
        <View style={styles.bigIcon}>
          <FastImage
            resizeMode='contain'
            style={{ width: RW(260), height: RH(260) }}
            source={{
              uri: _storageUrl + choosenTournir?.game?.img,
            }}
          />
        </View>
        <View>
          <Row wrapper={{ marginBottom: RW(16) }}>
            <Text style={styles.eachInfo}>Тип турнира :</Text>
            <Text style={styles.eachInfoTwo}>{choosenTournir?.team_tourney ? 'командный' : 'Индивидуальный'}</Text>
          </Row>
          <Row wrapper={{ marginBottom: RW(16) }}>
            <Text style={styles.eachInfo}>Название турнира: </Text>
            <Text style={styles.eachInfoTwo}>{choosenTournir?.name}</Text>
          </Row>

          <Row wrapper={{ marginBottom: RW(16) }}>
            <Text style={styles.eachInfo}>Тип игры :</Text>
            <Text style={styles.eachInfoTwo}>{choosenTournir?.game?.name}</Text>
          </Row>


          <Row wrapper={{ marginBottom: RW(16) }}>
            <Text style={styles.eachInfo} dataDetectorType='link'>Описание турнира: <Text style={styles.eachInfoTwo}>
              {choosenTournir?.description ? choosenTournir.description : 'Нету'}
            </Text></Text>

          </Row>

          <Row wrapper={{ marginBottom: RW(16) }}>
            <Text style={styles.eachInfo}>Количество {choosenTournir.team_tourney ? 'команд' : 'игроков'}:</Text>
            <Text style={styles.eachInfoTwo}>
              от {choosenTournir?.team_tourney ? choosenTournir?.number_of_teams_from : choosenTournir.number_of_participants_from
              } до {choosenTournir?.team_tourney ? choosenTournir?.number_of_teams_to : choosenTournir.number_of_participants_to}
            </Text>
          </Row>

          {!choosenTournir?.team_tourney &&
            <Row wrapper={{ marginBottom: RW(16) }}>
              <Text style={styles.eachInfo}>Возраст участников:</Text>
              <Text style={styles.eachInfoTwo}>
                от {choosenTournir.age_restrictions_from + ' '}
                до {" " + choosenTournir?.age_restrictions_to}
              </Text>
            </Row>
          }

          {!choosenTournir?.team_tourney &&
            <Row wrapper={{ marginBottom: RW(16) }}>
              <Text style={styles.eachInfo}>Пол участников:</Text>
              <Text style={styles.eachInfoTwo}>
                {genders[choosenTournir?.players_gender]}
              </Text>
            </Row>
          }


          <Row wrapper={{ marginBottom: RW(16) }}>
            <Text style={styles.eachInfo}>Дата турнира: <Text style={styles.eachInfoTwo}>
              {moment(choosenTournir.start_date).format('DD.MM.YYYY')}
            </Text></Text>

          </Row>



          <Row wrapper={{ marginBottom: RW(16) }}>
            <Text style={styles.eachInfo}>Время: <Text style={styles.eachInfoTwo}>
              {moment(choosenTournir.start_date).format('HH:mm')}
            </Text></Text>

          </Row>


          <Row wrapper={{ marginBottom: RW(16) }}>
            <Text style={styles.eachInfo} selectable={true}>Адрес проведения турнира:  <Text style={styles.eachInfoTwo} selectable={true} selectionColor={'red'}>
              {choosenTournir.address_name}
            </Text>
            </Text>
          </Row>

          <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
            <Text style={styles.eachInfo}>Организатор турнира:</Text>
            <View style={{ width: RW(60), paddingBottom: RH(20) }}>
              <User
                size={30}
                onPressItem={{
                  item: <User size={390} pressedUser={!route?.params?.fromCalendar ? user : route?.params?.elm?.user} />,
                  modalClose: false,
                  // onClickFunc: handleClick,
                }}
                pressedUser={!route?.params?.fromCalendar ? user : route?.params?.elm?.user}
              />
            </View>
          </View>
          {errorText && <Text style={styles.errorText} numberOfLines={2}>{errorText}</Text>}

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



          {!route?.params?.fromCalendar && <LightButton
            label={'Присоединиться к турниру'}
            size={{ width: RW(290), height: RW(45) }}
            onPress={handleClick}
          />}
        </View>

        <Modal
          item={
            <View style={styles.modal}>
              <Text style={styles.modalText}>Вы успешно присоединились к турниру!</Text>
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

export default JoinTournament

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
  errorText: {
    ...font('medium', 17, 'red'),
    marginLeft: 11,
    top: RH(15),
    // left: RW(20),
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
    ...font('bold', RH(20), WHITE, 20),
    marginLeft: RW(11),
  },
  eachInfoTwo: {
    ...font('regular', RH(20), WHITE, 20),
    marginLeft: RW(11),
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
