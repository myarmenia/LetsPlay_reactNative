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
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import Row from '@/components/wrappers/row'
import FastImage from 'react-native-fast-image'
import moment from 'moment'
import { editTournametInfo, resetSingleTournirData } from '@/store/Slices/TournamentReducer/TournamentSlice'
import { createTourney } from '@/store/Slices/TournamentReducer/TournamentApies'


const CreateTournament = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false)
  const initialState = useSelector(({ tournament }) => tournament)
  const { user } = useSelector(({ auth }) => auth) 
  const count_from = initialState?.singleTournir?.team_tourney
    ?
    initialState?.singleTournir?.number_of_teams_from
    :
    initialState.singleTournir.number_of_participants_from

  const count_to = initialState.singleTournir.team_tourney
    ?
    initialState.singleTournir.number_of_teams_to
    :
    initialState.singleTournir.number_of_participants_to
  const genders = { m: 'М', f: 'Ж', 'm/f': 'Без ограничений' }



  const onEditPress = () => {
    dispatch(editTournametInfo())
    navigation.navigate('TournamentName')
  }




  return (
    <ScreenMask>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.propsWrapper}>
        <View style={styles.bigIcon}>
          <FastImage
            resizeMode="contain"
            style={{ width: RW(260), height: RH(260) }}
            source={{ uri: _storageUrl + initialState?.singleTournir?.imagePath }}
          />
        </View>
        <View>
          <Row>
            <View style={{ paddingVertical: RH(20) }}></View>
            <Text style={styles.eachInfo}>Тип турнира :</Text>
            <Text style={styles.eachInfoTwo}>
              {initialState?.singleTournir?.tournamentGameType}
            </Text>
          </Row>
          <Row>
            <View style={{ paddingVertical: RH(20) }}></View>
            <Text style={styles.eachInfo}>Название турнира: </Text>
            <Text style={styles.eachInfoTwo}> {initialState?.singleTournir?.name}</Text>
          </Row>
          <Row>
            <View style={{ paddingVertical: RH(20) }}></View>
            <Text style={styles.eachInfo}>Описание турнира: </Text>
            <Text style={styles.eachInfoTwo}>
              {initialState?.singleTournir?.description
                ?
                initialState?.singleTournir?.description
                :
                'Нету'}
            </Text>
          </Row>
          <Row>
            <View style={{ paddingVertical: RH(20) }}></View>
            <Text style={styles.eachInfo}>
              Количество {initialState?.singleTournir?.team_tourney
                ?
                'команд'
                :
                'участников'
              }:
            </Text>
            <Text style={styles.eachInfoTwo}>
              от {count_from} до {' '}{count_to}
            </Text>
          </Row>
          {initialState.singleTournir?.team_tourney ? null : (
            <>
              <Row>
                <View style={{ paddingVertical: RH(20) }}></View>
                <Text style={styles.eachInfo}>Возраст участников:</Text>
                <Text style={styles.eachInfoTwo}>
                  от {initialState?.singleTournir.age_restrictions_from} до {initialState?.singleTournir?.age_restrictions_to}
                </Text>
              </Row>
              <Row>
                <View style={{ paddingVertical: RH(20) }}></View>
                <Text style={styles.eachInfo}> Пол участников:</Text>
                <Text style={styles.eachInfoTwo}>
                  {genders[initialState?.singleTournir?.players_gender]}
                </Text>
              </Row>
            </>
          )}

          <Row>
            <View style={{ paddingVertical: RH(20) }}></View>
            <Text style={styles.eachInfo}>Дата турнира:</Text>
            <Text style={styles.eachInfoTwo}>
              {moment(initialState?.singleTournir?.start_date).format('DD.MM.YYYY')}
            </Text>
          </Row>
          <Row>
            <View style={{ paddingVertical: RH(20) }}></View>
            <Text style={styles.eachInfo}>Время:</Text>
            <Text style={styles.eachInfoTwo}>
              {moment(initialState?.singleTournir?.start_date).format('HH:mm')}
            </Text>
          </Row>
          <Row>
            <View style={{ paddingVertical: RH(20) }}></View>
            <Text style={styles.eachInfo}>Адрес проведения турнира:</Text>
            <Text style={styles.eachInfoTwo}>
              {initialState?.singleTournir?.address_name}
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
            marginBottom: RH(30),
            marginTop: RH(30),
          }}
        >
          <LightButton
            label={'Редактировать'}
            size={{ width: 220, height: 40 }}
            onPress={onEditPress}
          />
          <LightButton
            label={'Готово'}
            size={{ width: 120, height: 40 }}
            onPress={() => {
              const obj = { ...initialState.singleTournir }
           
              if (!initialState.singleTournir.team_tourney) {
                delete obj.number_of_teams_from
                delete obj.number_of_teams_to
              } else {
                delete obj.number_of_participants_from
                delete obj.number_of_participants_to
                delete obj.age_restrictions_from
                delete obj.age_restrictions_to
                delete obj.players_gender
                const {joinedTeamInfo}=initialState 
                if(obj.organizer_status){
                  obj.team_id=joinedTeamInfo.team_id
                  obj.players=joinedTeamInfo.players
                }
              }
              dispatch(createTourney(obj))
                .unwrap()
                .then((res) => {
                  if (res.status === 201) {
                    setModalVisible(true)
                    dispatch(resetSingleTournirData())
                  }
                })
                .catch((err) => {
                  console.log(err, 'err');
                })
            }}
          />
        </View>

        <Modal
          item={
            <View style={styles.modal}>
              <Text style={styles.modalText}>
                {modalVisible === true
                  ? 'Вы успешно создали турнир!'
                  : 'Что-то произошло не так, трнир не создан!'}
              </Text>
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

export default CreateTournament

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
    width: RW(290),
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

let x = {
  address_name: { address_name: 'Ереван, Армения', lat: 40.2426667, lng: 44.6150493 },
  age_restrictions_from: 12,
  age_restrictions_to: 12,
  description: 'Crece2c',
  end_search_date: '2023-10-02 12:26',
  error: false,
  findedTourney: [],
  imagePath: '/game_imgs/soccer-ball 1.png',
  loading: false,
  name: 'Ece',
  number_of_participants_from: undefined,
  number_of_participants_to: 12,
  organizer_status: true,
  players_gender: 'm/f',
  prize_fund: false,
  start_date: '2023-10-03 12:26',
  team_tourney: false,
  ticket_price: 0,
  tournamentGameType: 'Футбол',
}
