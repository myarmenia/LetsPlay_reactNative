import React, { useEffect, useRef, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  InteractionManager,
} from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import VectorIcon from '@/assets/svgs/vectorSvg'
import UserBorderSvg from './assets/UserBorderSvg'
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
  setAnswersCount,
  setLoader,
  setQuestionTruthfulness,
  setSendAnswer,
  setWaitAnswer,
  setWaitNight,
} from '@/store/Slices/MafiaSlice'

import MafiaDeadModal from './components/MafiaDeadModal'
import WinnerModal from './components/WinnerModal'
import Row from '@/components/wrappers/row'

const PlayMafia = () => {
  const [modalVisible, setModalVisible] = useState(true)
  const [deadModalVisible, setDeadModalVisible] = useState(false)
  const [winnerModal, setWinnerModal] = useState(false)
  const [choosable, setChoosable] = useState(false)
  const [choosedUsers, setChoosedUsers] = useState(null)
  const [nightQueastions, setNightQueastions] = useState([])
  const [dayQueastions, setDayQueastions] = useState(null)
  const [daysCount, setDaysCount] = useState(1)

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
    deadUser,
    waitAnswer,
    equalVotes,
    waitNight,
    donVotedPlayers,
    loader,
    answersCount,
  } = useSelector(({ mafia }) => mafia)
  const currentUser = useSelector(({ auth }) => auth.user)
  const dispatch = useDispatch()

  useEffect(() => {
    if (deadUser?.length) {
      setDeadModalVisible(true)
      deadUser.forEach((deadUserItem) => {
        console.log('deadUserItem?.user?._id', deadUserItem?.user?._id)
        if (deadUserItem?.user?._id == currentUser?._id) {
          currentUserDeaded.current = true
        }
      })
    }
  }, [deadUser])

  useEffect(() => {
    if (!night && daysCount > 1 && waitNight == null) {
      setDeadModalVisible(true)
    }
  }, [night, daysCount, waitNight])

  useEffect(() => {
    setDayQueastions(answerQuestions?.find((item) => !item.night))
    if (mafiaRole.name !== 'Дон') {
      setNightQueastions(answerQuestions?.filter((item) => item.night))
    } else {
      setNightQueastions(
        answerQuestions?.filter((item) => item.night && item.answer_user !== 'Мирный житель'),
      )
    }
  }, [answerQuestions])

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      if (winner) {
        setModalVisible(false)
        setDeadModalVisible(false)
        setWinnerModal(winner)
      }
    })
  }, [winner])

  useEffect(() => {
    if (donVotedPlayers?.length == mafiasCount - 1 && loader && mafiaRole.name == 'Дон') {
      dispatch(setAnswersCount(1))
    }
  }, [donVotedPlayers, loader, mafiasCount, mafiaRole])

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
            {daysCount > 1 && !Object.keys(equalVotes || {}).length ? (
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
              {mafiaRole?.name !== 'Дон' || answersCount == 0 ? (
                <Text style={styles.question}>{nightQueastions[answersCount]?.question}</Text>
              ) : mafiaRole?.name == 'Дон' && answersCount > 0 ? (
                <View>
                  <Text style={styles.question}>
                    {
                      answerQuestions?.find((item) => item.answer_user === 'Мирный житель')
                        ?.question
                    }
                  </Text>
                </View>
              ) : null}
            </View>
          </>
        )}
        <Time setChoosedUsers={setChoosedUsers} />

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
            {Object.keys(equalVotes || {}).length ? (
              <Row>
                <View
                  style={{
                    padding: RW(5),
                    margin: RW(5),
                    position: 'relative',
                    opacity: 1,
                  }}
                >
                  {choosedUsers === equalVotes?.first_player?._id ? (
                    <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
                      <UserBorderSvg />
                    </View>
                  ) : null}

                  {mafiaUsersId?.find((elm) => elm.id == equalVotes?.first_player?._id) ? (
                    <Image
                      style={styles.mafiaImg}
                      source={{
                        uri:
                          _storageUrl +
                          (mafiaUsersId?.find((elm) => elm?.id == equalVotes?.first_player?._id)
                            ?.name == 'Дон' && mafiaRole.name !== 'Шпион'
                            ? roles?.find((item) => item.name == 'Дон')?.img
                            : roles?.find((item) => item.name == 'Мафия')?.img),
                      }}
                    />
                  ) : null}
                  <User
                    onPressItem={{
                      onClickFunc: () => {
                        if (!currentUserDeaded.current)
                          setChoosedUsers(equalVotes?.first_player?._id)
                      },
                    }}
                    size={150}
                    user={equalVotes?.first_player}
                  />
                </View>

                <View
                  style={{
                    padding: RW(5),
                    margin: RW(5),
                    position: 'relative',
                    opacity: 1,
                  }}
                >
                  {choosedUsers === equalVotes?.second_player?._id ? (
                    <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
                      <UserBorderSvg />
                    </View>
                  ) : null}
                  {mafiaUsersId?.find((elm) => elm.id == equalVotes?.second_player?._id) ? (
                    <Image
                      style={styles.mafiaImg}
                      source={{
                        uri:
                          _storageUrl +
                          (mafiaUsersId?.find((elm) => elm?.id == equalVotes?.first_player?._id)
                            ?.name == 'Дон' && mafiaRole?.name !== 'Шпион'
                            ? roles?.find((item) => item?.name == 'Дон')?.img
                            : roles?.find((item) => item?.name == 'Мафия')?.img),
                      }}
                    />
                  ) : null}
                  <User
                    onPressItem={{
                      onClickFunc: () => {
                        if (!currentUserDeaded.current)
                          setChoosedUsers(equalVotes?.second_player?._id)
                      },
                    }}
                    size={150}
                    user={equalVotes?.second_player}
                  />
                </View>
              </Row>
            ) : (
              <>
                {players?.map((item, i) => {
                  if (item?.user?._id !== currentUser?._id && item?._id !== currentUser?._id) {
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
                          <View
                            style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
                          >
                            {choosedUsers === item?._id &&
                            !Object.keys(questionTruthfulness || {}).length ? (
                              <UserBorderSvg />
                            ) : waitAnswer && Object.keys(questionTruthfulness || {}).length ? (
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
                                (mafiaUsersId?.find(
                                  (elm) => elm?.id == equalVotes?.first_player?._id,
                                )?.name == 'Дон' && mafiaRole?.name !== 'Шпион'
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
                                    console.log('choosable', choosable)
                                    console.log(
                                      'currentUserDeaded.current',
                                      currentUserDeaded.current,
                                    )
                                    console.log(item?.status)
                                    if (choosable && !currentUserDeaded.current && item?.status) {
                                      if (
                                        answersCount == 0 &&
                                        night &&
                                        (mafiaRole?.name == 'Дон' ||
                                          mafiaRole?.name == 'Шериф' ||
                                          mafiaRole?.name == 'Шпион')
                                      ) {
                                        dispatch(setWaitAnswer(true))
                                      } else {
                                        dispatch(setWaitAnswer(false))
                                      }

                                      setChoosedUsers(item?._id)
                                    }
                                  },
                                }
                          }
                          size={90}
                          user={item}
                        />

                        {answersCount == 1 && night && mafiaRole?.name == 'Дон' ? (
                          <Text
                            style={{
                              ...font('bold', 14, '#fff'),
                              alignSelf: 'center',
                              marginTop: 2,
                            }}
                          >
                            {donVotedPlayers?.[item?._id]}
                          </Text>
                        ) : null}
                      </View>
                    )
                  }
                })}
              </>
            )}
          </View>
        </ScrollView>
        <View style={{ position: 'absolute', bottom: RH(15) }}>
          {waitAnswer && questionTruthfulness?.truthfulness ? (
            <Text
              style={{
                ...font('bold', 18, '#74C472', 24),
                alignSelf: 'center',
                marginBottom: RH(20),
              }}
            >
              Правильно
            </Text>
          ) : waitAnswer && questionTruthfulness?.truthfulness == false ? (
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
              label={
                !night && daysCount > 1
                  ? 'Голосовать'
                  : !night
                  ? 'Ночь'
                  : waitAnswer && Object.keys(questionTruthfulness || {}).length
                  ? 'Продолжить'
                  : 'Подтвердить'
              }
              white={'white'}
              background={'#7DCE8A'}
              bgColor={'#4D7CFE'}
              onPress={() => {
                if (daysCount == 1) {
                  console.log('if 1')
                  dispatch(setLoader(true))
                  dispatch(setWaitNight(true))
                  setDaysCount(2)
                  setChoosable(true)
                } else if (equalVotes?.question_id) {
                  console.log('if 1 1')
                  console.log('if equalVotes?.question_id', equalVotes?.question_id)
                  dispatch(
                    setSendAnswer({
                      type: 'answer_question',
                      question_id: equalVotes?.question_id,
                      select_user: choosedUsers,
                    }),
                  )
                  dispatch(setWaitNight(true))
                  setChoosedUsers(null)
                  dispatch(setLoader(true))
                } else if (choosedUsers) {
                  console.log('if')

                  if (waitAnswer && Object.keys(questionTruthfulness || {}).length) {
                    console.log('if 1')
                    dispatch(setQuestionTruthfulness(null))
                    setChoosedUsers(null)
                    dispatch(setWaitAnswer(false))
                    setChoosable(true)
                    if (mafiaRole?.name !== 'Дон') {
                      // dispatch(setAnswersCount(1))
                    } else {
                      dispatch(setLoader('Ждем голосование мафии'))
                    }
                  } else if (
                    night &&
                    answersCount > 0 &&
                    Object.keys(donVotedPlayers || {}).length
                  ) {
                    console.log('if 2')
                    const questionId = answerQuestions?.find(
                      (item) => item.answer_user === 'Мирный житель',
                    )?._id
                    console.log('answer_question DON', {
                      type: 'answer_question',
                      question_id: questionId,
                      select_user: choosedUsers,
                    })
                    dispatch(
                      setSendAnswer({
                        type: 'answer_question',
                        question_id: questionId,
                        select_user: choosedUsers,
                      }),
                    )
                    dispatch(setAnswersCount(0))
                    dispatch(setLoader(true))
                    dispatch(setWaitNight(false))
                  } else if (night && answersCount == 1) {
                    dispatch(
                      setSendAnswer({
                        type: 'answer_question',
                        question_id: nightQueastions[answersCount]?._id,
                        select_user: choosedUsers,
                      }),
                    )
                    console.log('if 6')
                    // dispatch(setAnswersCount(0))
                    dispatch(setLoader(true))

                    // dispatch(setWaitNight(false))
                  } else if (!night) {
                    console.log('if 7')
                    // day
                    // dispatch(setAnswersCount(0))

                    dispatch(
                      setSendAnswer({
                        type: 'answer_question',
                        question_id: dayQueastions?._id,
                        select_user: choosedUsers,
                      }),
                    )
                    dispatch(setLoader(true))
                    dispatch(setWaitNight(true))
                    setChoosedUsers(null)
                  } else {
                    console.log('if 3')
                    console.log('choosedUsers ' + mafiaRole?.name, {
                      type: 'answer_question',
                      question_id: night ? nightQueastions[answersCount]?._id : dayQueastions?._id,
                      select_user: choosedUsers,
                    })
                    dispatch(
                      setSendAnswer({
                        type: 'answer_question',
                        question_id: night
                          ? nightQueastions[answersCount]?._id
                          : dayQueastions?._id,
                        select_user: choosedUsers,
                      }),
                    )

                    if (waitAnswer) {
                      console.log('if 4')
                      setChoosable(false)
                    } else {
                      console.log('if 5')
                      setChoosedUsers(null)
                      setChoosable(true)
                      // dispatch(setAnswersCount(1))
                    }
                  }
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
