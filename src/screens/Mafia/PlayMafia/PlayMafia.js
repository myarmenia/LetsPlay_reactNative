import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import VectorIcon from '@/assets/svgs/vectorSvg'
import { font, RH, RW } from '@/theme/utils'
import { GRAY, ICON, WHITE } from '@/theme/colors'
import LightButton from '@/assets/imgs/Button'
import User from '@/components/User/user'
import MafiaModal from './components/MafiaModal'
import { useDispatch, useSelector } from 'react-redux'
import { _storageUrl } from '@/constants'
import Time from './components/Time'
import MafiaLoader from './components/MafiaLoader'
import {
  setCurrentUserDeaded,
  setLoader,
  setQuestionTruthfulness,
  setSendAnswer,
  setWaitNight,
} from '@/store/Slices/MafiaSlice'
import UserBorderSvg from './assets/UserBorderSvg'
import MafiaDeadModal from './components/MafiaDeadModal'
import WinnerModal from './components/WinnerModal'

const PlayMafia = () => {
  const [modalVisible, setModalVisible] = useState(true)
  const [deadModalVisible, setDeadModalVisible] = useState(false)
  const [winnerModal, setWinnerModal] = useState(false)
  // const [currentUserDeaded, setCurrentUserDeaded] = useState(false)

  const [choosable, setChoosable] = useState(false)
  const [choosedUsers, setChoosedUsers] = useState(null)
  const [nightQueastions, setNightQueastions] = useState([])
  const [answers, setAnswers] = useState(1)
  const [dayQueastions, setDayQueastions] = useState([])
  const [daysCount, setDaysCount] = useState(1)

  // const daysCountRef = useRef(1)

  const {
    mafiaRole,
    players,
    roles,
    mafiaUsersId,
    mafiasCount,
    civiliansCount,
    night,
    answerQuestions,
    questionTruthfulness,
    winner,
    waitNight,
    alredyDeadedUsers,
    currentUserDeaded,
    deadUser,
  } = useSelector(({ mafia }) => mafia)
  const currentUser = useSelector(({ auth }) => auth.user)
  const dispatch = useDispatch()

  useEffect(() => {
    setModalVisible(true)
  }, [mafiaRole])
  useEffect(() => {
    if (night) {
      setChoosable(true)
      setAnswers(Math.round(Math.random() * (nightQueastions.length - 1)))
    } else if (night && questionTruthfulness?.truthfulness !== undefined) {
      dispatch(setWaitNight(false))
      dispatch(setLoader(true))
      dispatch(setQuestionTruthfulness(null))
    } else if (night && answers == dayQueastions.length) {
      setAnswers(1)
      dispatch(setWaitNight(true))
      dispatch(setLoader(true))
      setChoosable(false)
    }
  }, [answers, answerQuestions, night])
  useEffect(() => {
    console.log('deadUser', deadUser)
    console.log('deadUser._id == currentUser._id', deadUser?.user?._id == currentUser?._id)
    if (Object.keys(deadUser || {}).length) {
      setDeadModalVisible(true)
      dispatch(setCurrentUserDeaded(deadUser?.user?._id == currentUser?._id))
    }
  }, [deadUser])
  // console.log('currentUser', currentUser)
  useEffect(() => {
    setNightQueastions(answerQuestions.filter((item) => item.night))
    setDayQueastions(answerQuestions.filter((item) => !item.night))
  }, [answerQuestions])

  useEffect(() => {
    setWinnerModal(winner)
  }, [winner])

  return (
    <ScreenMask>
      <MafiaLoader />
      <View style={styles.common}>
        {!night ? (
          <>
            <View style={styles.youPlaceMen}>
              <View>
                <Image source={{ uri: _storageUrl + mafiaRole?.img }} style={styles.img} />
              </View>
              <View style={styles.infoMafia}>
                <Text style={styles.textPlaceMen}>Вы {mafiaRole?.name?.toLowerCase()}</Text>
                <Text style={styles.text}>Мафия {mafiasCount}</Text>
                <Text style={styles.text}>Мирные жители {civiliansCount}</Text>
              </View>
              <Pressable onPress={() => setModalVisible(true)}>
                <VectorIcon />
              </Pressable>
            </View>
            <Text style={styles.morningText}>Утро</Text>
            {daysCount > 1 ? (
              <View>
                <Text style={styles.question}>{dayQueastions[0]?.question}</Text>
              </View>
            ) : null}
          </>
        ) : (
          <>
            <Text style={[styles.morningText, { color: ICON }]}>Ночь</Text>
            <Pressable
              style={{ position: 'absolute', right: RW(10), top: RH(2) }}
              onPress={() => setModalVisible(true)}
            >
              <VectorIcon />
            </Pressable>

            <View>
              <Text style={styles.question}>{nightQueastions[answers]?.question}</Text>
            </View>
          </>
        )}

        <Time />
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: 20,
            }}
          >
            {players?.map((item, i) => {
              if (item?.user?._id !== currentUser._id) {
                return (
                  <View
                    style={{
                      padding: RW(5),
                      margin: RW(5),
                      position: 'relative',
                      opacity: item?.status ? 1 : 0.5,
                    }}
                    key={i}
                  >
                    {choosedUsers === item?._id ? (
                      <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
                        {!questionTruthfulness ? ( //|| !night || waitNight == false
                          <UserBorderSvg />
                        ) : (
                          <View
                            style={{
                              width: '80%',
                              height: '100%',
                              alignSelf: 'center',
                              borderWidth: 2,
                              borderRadius: 10,
                              borderColor: questionTruthfulness?.truthfulness
                                ? '#74C372'
                                : '#F73934',
                            }}
                          />
                        )}
                      </View>
                    ) : null}
                    {mafiaUsersId?.find((elm) => elm.id == item?._id) ? (
                      <Image
                        style={styles.mafiaImg}
                        source={{
                          uri:
                            _storageUrl +
                            (mafiaUsersId?.find((elm) => elm?.id == item?._id)?.name == 'Дон'
                              ? roles?.find((item) => item.name == 'Дон')?.img
                              : roles?.find((item) => item.name == 'Мафия')?.img),
                        }}
                      />
                    ) : null}
                    <User
                      onPressItem={{
                        onClickFunc: () => {
                          // console.log(questionTruthfulness?.truthfulness)
                          if (
                            (choosable || daysCount > 1) &&
                            item?.status &&
                            !currentUserDeaded &&
                            questionTruthfulness?.truthfulness === undefined
                          ) {
                            setChoosedUsers(item?._id)
                          }
                        },
                      }}
                      size={90}
                      user={item}
                    />
                  </View>
                )
              }
            })}
          </View>
        </ScrollView>
        <View style={{ position: 'absolute', bottom: RH(15) }}>
          {questionTruthfulness?.truthfulness && night && waitNight == false ? (
            <Text
              style={{
                ...font('bold', 18, '#74C472', 24),
                alignSelf: 'center',
                marginBottom: RH(20),
              }}
            >
              Правильно
            </Text>
          ) : questionTruthfulness?.truthfulness !== undefined && night && waitNight == false ? (
            <Text
              style={{
                ...font('bold', 18, '#F73934', 24),
                alignSelf: 'center',
                marginBottom: RH(20),
              }}
            >
              Не правильно
            </Text>
          ) : null}
          {!currentUserDeaded ? (
            <LightButton
              size={{ width: RW(281), height: RH(48) }}
              labelStyle={styles.invitePlayers}
              label={!night && daysCount > 1 ? 'Голосовать' : !night ? 'Ночь' : 'Подтвердить'}
              white={'white'}
              background={'#7DCE8A'}
              bgColor={'#4D7CFE'}
              onPress={() => {
                if (!night && daysCount == 1) {
                  setDaysCount(2)
                  dispatch(setLoader(true))
                  dispatch(setWaitNight(!night))
                } else if (Object.keys(questionTruthfulness || {}).length) {
                  dispatch(setQuestionTruthfulness(null))
                  setChoosedUsers(null)
                  // if (night || daysCount > 1) {
                  dispatch(setLoader(true))
                  dispatch(setWaitNight(!night))
                  // }
                } else if (choosedUsers) {
                  dispatch(
                    setSendAnswer({
                      type: 'answer_question',
                      question_id: night ? nightQueastions[answers]?._id : dayQueastions[0]?._id,
                      select_user: choosedUsers,
                    }),
                  )
                  // if (!night && daysCount > 1) {
                  //   dispatch(setLoader(true))
                  //   dispatch(setWaitNight(true))
                  //   setChoosedUsers(null)
                  //   dispatch(setQuestionTruthfulness(null))
                  // }
                }
              }}
            />
          ) : null}
        </View>
      </View>
      <MafiaModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <MafiaDeadModal modalVisible={deadModalVisible} setModalVisible={setDeadModalVisible} />
      <WinnerModal modalVisible={winnerModal} setModalVisible={setWinnerModal} />
    </ScreenMask>
  )
}
const styles = StyleSheet.create({
  item: {
    padding: RW(3),
    marginTop: RH(30),
  },
  activeItem: {
    padding: RW(3),
    marginTop: RH(30),
    borderWidth: 1,
    borderColor: '#7DCE8A',
    borderRadius: RW(15),
  },
  common: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  container: {
    borderRadius: 10,
    width: RW(330),
    height: RH(500),
  },
  youPlaceMen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: RH(36),
    paddingHorizontal: RW(20),
    borderBottomWidth: RW(1),
    borderBottomColor: GRAY,
    width: '100%',
  },
  img: {
    width: RW(46),
    height: RW(55),
    resizeMode: 'contain',
  },
  infoMafia: {
    paddingRight: RW(90),
    paddingLeft: RW(10),
  },
  text: {
    ...font('inter', 14, WHITE, 24),
    fontWeight: '700',
    letterSpacing: 0.01,
  },
  textPlaceMen: {
    ...font('inter', 20, ICON, 24),
    fontWeight: '700',
    letterSpacing: 0.01,
    paddingBottom: RH(5.83),
  },
  morning: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: RH(15.84),
  },
  morningText: {
    ...font('inter', 24, WHITE, 24),
    fontWeight: '700',
    letterSpacing: 0.01,
    paddingVertical: RH(15),
  },
  imgView: {
    paddingHorizontal: RW(10.29),
    margin: RW(10),
    paddingVertical: RH(20),
  },
  imgData: {
    width: 76,
    height: 150,
    resizeMode: 'contain',
  },
  peopleInfo: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderRadius: {
    borderRadius: RW(20),
    borderWidth: 1,
    borderColor: '#7DCE8A',
    paddingHorizontal: RW(10.29),
    margin: RW(10),
    paddingVertical: RH(20),
  },
  mafiaImg: {
    width: RW(25),
    height: RW(25),
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: 999,
    top: RW(-3),
    left: RW(-3),
  },
  question: {
    ...font('bold', 24, WHITE, 32),
    textAlign: 'center',
    marginHorizontal: RW(10),
    marginBottom: RH(10),
  },
})
export default PlayMafia
