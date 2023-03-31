import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native'
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
import { io } from 'socket.io-client'

const PlayMafia = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [answers, setAnswers] = useState(1)
  const [choosable, setChoosable] = useState(false)
  const [choosedUsers, setChoosedUsers] = useState(null)

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
  } = useSelector(({ mafia }) => mafia)
  const dispatch = useDispatch()
  let mafiaImgPath = roles?.find((item) => (item.name = 'Мафия'))?.img

  useEffect(() => {
    setModalVisible(true)
  }, [])
  useEffect(() => {
    if (night && answers < answerQuestions.length) {
      setChoosable(true)
    } else if (answers == answerQuestions.length) {
      dispatch(setWaitNight(false))
      dispatch(setLoader(true))
      setChoosable(false)
    }
  }, [answers, answerQuestions, night])

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
              {answers < answerQuestions.length ? (
                <Text style={styles.question}>{answerQuestions[answers].question}</Text>
              ) : null}
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
            {players?.map((item, i) => (
              <View style={{ padding: RW(10), margin: RW(10), position: 'relative' }} key={i}>
                {choosedUsers === item?._id ? (
                  <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
                    {!questionTruthfulness ? (
                      <UserBorderSvg />
                    ) : (
                      <View
                        style={{
                          width: '80%',
                          height: '100%',
                          alignSelf: 'center',
                          borderWidth: 2,
                          borderRadius: 10,
                          borderColor: questionTruthfulness.truthfulness ? '#74C372' : '#F73934',
                        }}
                      />
                    )}
                  </View>
                ) : null}

                {mafiaUsersId?.find((id) => id == item?._id) ? (
                  <Image style={styles.mafiaImg} source={{ uri: _storageUrl + mafiaImgPath }} />
                ) : null}
                <User
                  onPressItem={{
                    onClickFunc: () => {
                      console.log(choosable)
                      if (choosable) {
                        setChoosedUsers(item?._id)
                      }
                    },
                  }}
                  size={90}
                  user={item}
                />
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={{ marginTop: RH(38) }}>
          <LightButton
            size={{ width: RW(281), height: RH(48) }}
            labelStyle={styles.invitePlayers}
            label={!night ? 'Ночь' : 'Подтвердить'}
            white={'white'}
            background={'#7DCE8A'}
            bgColor={'#4D7CFE'}
            onPress={() => {
              if (!night) {
                dispatch(setLoader(true))
                dispatch(setWaitNight(!night))
              } else if (Object.keys(questionTruthfulness || {}).length) {
                dispatch(setQuestionTruthfulness(null))
                setAnswers(answers + 1)
                setChoosedUsers(null)
              } else if (choosedUsers) {
                dispatch(
                  setSendAnswer({
                    type: 'answer_question',
                    question_id: answerQuestions[answers]?._id,
                    select_user: choosedUsers,
                  }),
                )
              }
            }}
          />
        </View>
      </View>
      <MafiaModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
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
    paddingBottom: RH(70),
  },
  container: {
    borderRadius: 10,
    width: RW(330),
    height: RH(600),
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
