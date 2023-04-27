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
  const [choosable, setChoosable] = useState(false)
  const [choosedUsers, setChoosedUsers] = useState(null)
  const [nightQueastions, setNightQueastions] = useState([])
  const [answers, setAnswers] = useState(0)
  const [dayQueastions, setDayQueastions] = useState(null)
  const [daysCount, setDaysCount] = useState(1)
  const [waitAnswers, setWaitAnswers] = useState(false)

  const currentUserDeaded = useRef(false)

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
    deadUser,
    voteTime,
  } = useSelector(({ mafia }) => mafia)
  const currentUser = useSelector(({ auth }) => auth.user)
  const dispatch = useDispatch()

  useEffect(() => {
    // setModalVisible(true)
  }, [mafiaRole])
  useEffect(() => {
    if (night) {
      setDaysCount(2)
      setChoosable(true)
    }
    //  else if (night && questionTruthfulness?.truthfulness !== undefined) {
    //   dispatch(setWaitNight(false))
    //   dispatch(setLoader(true))
    //   dispatch(setQuestionTruthfulness(null))
    // } else if (night && answers == dayQueastions.length) {
    //   setAnswers(1)
    //   dispatch(setWaitNight(true))
    //   dispatch(setLoader(true))
    //   setChoosable(false)
    // }
  }, [night]) //answers, answerQuestions,
  useEffect(() => {
    if (
      night &&
      answers == 0 &&
      (mafiaRole.name == 'Дон' || mafiaRole.name == 'Шериф' || mafiaRole.name == 'Доктор')
    ) {
      console.log('setWaitAnswers(true)')
      setWaitAnswers(true)
    } else {
      console.log('setWaitAnswers(false)')
      setWaitAnswers(false)
    }
  }, [answers, mafiaRole, night])

  useEffect(() => {
    if (Object.keys(deadUser || {}).length) {
      setDeadModalVisible(true)
      if (deadUser?.user?._id == currentUser?._id) {
        currentUserDeaded.current = true
      }
    }
  }, [deadUser])
  useEffect(() => {
    setNightQueastions(answerQuestions?.filter((item) => item.night))
    setDayQueastions(answerQuestions?.find((item) => !item.night))
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
                <Text style={styles.question}>{dayQueastions?.question}</Text>
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
        <Time
          voteTime={voteTime}
          answer={answers}
          night={night}
          setAnswer={setAnswers}
          endTime={() => {}}
        />
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
              if (item?.user?._id !== currentUser._id && item?._id !== currentUser?._id) {
                return (
                  <View
                    style={{
                      padding: RW(5),
                      margin: RW(5),
                      position: 'relative',
                      opacity: item?.status == false ? 0.5 : 1,
                    }}
                    key={i}
                  >
                    {choosedUsers === item?._id ? (
                      <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
                        {console.log('waitAnswers', waitAnswers)}
                        {!questionTruthfulness || !waitAnswers ? (
                          <UserBorderSvg />
                        ) : waitAnswers && questionTruthfulness ? (
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
                        ) : null}
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
                      onPressItem={
                        daysCount == 1
                          ? {
                              item: <User size={390} user={item} />,
                              modalClose: false,
                            }
                          : {
                              onClickFunc: () => {
                                if (
                                  night &&
                                  daysCount > 1 &&
                                  item?.status &&
                                  !currentUserDeaded.current &&
                                  (!waitAnswers ||
                                    (waitAnswers &&
                                      questionTruthfulness?.truthfulness === undefined))
                                ) {
                                  setChoosedUsers(item?._id)
                                }
                              },
                            }
                      }
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
          {waitAnswers &&
          answers == 0 &&
          night &&
          waitNight == false &&
          questionTruthfulness?.truthfulness ? (
            <Text
              style={{
                ...font('bold', 18, '#74C472', 24),
                alignSelf: 'center',
                marginBottom: RH(20),
              }}
            >
              Правильно
            </Text>
          ) : waitAnswers && answers == 0 && night && waitNight == false ? (
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
          {!currentUserDeaded.current ? (
            <LightButton
              size={{ width: RW(281), height: RH(48) }}
              labelStyle={styles.invitePlayers}
              label={!night && daysCount > 1 ? 'Голосовать' : !night ? 'Ночь' : 'Подтвердить'}
              white={'white'}
              background={'#7DCE8A'}
              bgColor={'#4D7CFE'}
              onPress={() => {
                if (!night && daysCount == 1) {
                  dispatch(setLoader(true))
                  dispatch(setWaitNight(true))
                } else if (choosedUsers) {
                  dispatch(
                    setSendAnswer({
                      type: 'answer_question',
                      question_id: night ? nightQueastions[answers]?._id : dayQueastions?._id,
                      select_user: choosedUsers,
                    }),
                  )

                  if (night && answers == 0) {
                    setAnswers(1)
                    dispatch(setQuestionTruthfulness(null))
                    setChoosedUsers(null)
                  } else {
                    dispatch(setWaitNight(false))
                    setAnswers(0)
                    setChoosedUsers(null)
                  }
                } else if (night && answers == 1) {
                  dispatch(setQuestionTruthfulness(null))
                  setChoosedUsers(null)
                  setAnswers(0)
                  dispatch(setLoader(true))
                  dispatch(setWaitNight(!night))
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
