import { ICON, WHITE } from '@/theme/colors'
import { useDispatch, useSelector } from 'react-redux'
import { font, RH } from '@/theme/utils'
import { memo, useEffect, useLayoutEffect, useState } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { View, StyleSheet, Text } from 'react-native'
import AnimatedCircle from '../Components/AnimatedCircle'
import AliasBackground from '../assets/Background'
import LightButton from '@/assets/imgs/Button'
import Timer from '../Components/Timer'
import { setExplainYou, setExplainedWords, setStep, setStoping } from '@/store/Slices/AliasSlice'
import { SomeSampleScreen } from '../Modals/UserAndInfoModal'
import TimeFinishModal from '../Modals/TimeFinishModal'

const GameStart = ({ route }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [userModalVisible, setUserModalVisible] = useState(true)
  const [timeIsFinished, setTimeIsFinished] = useState('timeDontFinished')
  const [falsyCount, setFalsyCount] = useState(0)
  const [truthyCount, setTruthyCount] = useState(0)
  const [modalState, setModalState] = useState({ state: 'user' })

  // const [explainedWords, setExplainedWords] = useState({
  //   truthy: [],
  //   falsy: [],
  // })
  const { stoping } = useSelector(({ alias }) => alias)
  const { user } = useSelector(({ auth }) => auth)
  const {
    allTeams,
    explainerTeam,
    explainYou,
    step,
    time,
    staticTime,
    countWords,
    explainedWords,
    aliasGameId,
    explainerUser,
  } = useSelector(({ alias }) => alias)
  const [userExplainedWordsCount, setUserExplainedWordsCount] = useState({
    points: 0,
    aliasGameId,
  })
  let pointsPrevCurrent = allTeams.find((item) => item.value == explainerTeam)?.points

  const dispatch = useDispatch()
  const isFocused = useIsFocused()

  useEffect(() => {
    dispatch(setExplainYou(explainYou))
  }, [explainYou])

  useEffect(() => {
    if (!isFocused) {
      dispatch(setStep(0))
      setTruthyCount(0)
      setFalsyCount(0)
    }
  }, [isFocused])
  useEffect(() => {
    if (!explainYou) {
      setTruthyCount(step - explainedWords.falsy?.length)
      setFalsyCount(step - explainedWords.truthy?.length)
    }
  }, [explainedWords, explainYou, step, falsyCount])
  return (
    <>
      <AliasBackground style={{ justifyContent: 'center', alignItems: 'center' }}>
        <SomeSampleScreen modalState={modalState} setModalState={setModalState} />
        <TimeFinishModal
          timeIsFinished={timeIsFinished}
          setTimeIsFinished={setTimeIsFinished}
          userExplainedWordsCount={userExplainedWordsCount}
        />
        <View style={{ position: 'absolute' }}></View>
        <View
          style={{
            height: '95%',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignContent: 'center',
          }}
        >
          <View style={styles.answersBox}>
            <Text style={styles.commandName}>{explainerTeam}</Text>

            <Text style={styles.countOfTrueAnswer}>{truthyCount}</Text>
            <Text style={styles.countOfTrueAnswer}>Отгадано</Text>
          </View>
          <View>
            <AnimatedCircle
              setTruthyCount={setTruthyCount}
              setFalsyCount={setFalsyCount}
              userExplainedWordsCount={userExplainedWordsCount}
              setUserExplainedWordsCount={setUserExplainedWordsCount}
            />
          </View>
          <View style={styles.answersBox}>
            <Text style={styles.countOfTrueAnswer}>Пропущено</Text>
            <Text style={styles.countOfTrueAnswer}>{falsyCount}</Text>
            <View style={styles.bottomBox}>
              <View style={{ width: '65%' }}>
                {!!explainYou && (
                  <LightButton
                    label={!stoping ? 'Стоп' : 'Продолжить'}
                    size={{ width: !stoping ? 100 : null, height: 36 }}
                    onPress={() => dispatch(setStoping(!stoping))}
                  />
                )}
              </View>
              <View style={{ alignItems: 'center', width: '35%' }}>
                <Timer
                  timeIsFinished={timeIsFinished}
                  fromRes={route?.params?.fromRes}
                  modalState={modalState}
                  setTimeIsFinished={setTimeIsFinished}
                />
              </View>
            </View>
          </View>
        </View>
      </AliasBackground>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  instruction: {
    ...font('regular', 18, WHITE),
  },
  modalBox: {
    // height: '100%',
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userModalBox: {
    height: '95%',
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  instructionTextBox: {
    height: '60%',
    width: '70%',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  answersBox: {
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 999,
  },
  bottomBox: {
    width: '97%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  commandName: {
    ...font('medium', 26, ICON),
  },
  countOfTrueAnswer: {
    ...font('regular', 24, WHITE),
    paddingVertical: RH(5),
  },
})

export default memo(GameStart)
