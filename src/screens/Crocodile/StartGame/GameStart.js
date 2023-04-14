import { ICON, WHITE } from '@/theme/colors'
import { useDispatch } from 'react-redux'
import { font, RH, RW } from '@/theme/utils'
import { memo, useEffect, useState } from 'react'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { View, StyleSheet, Text, Pressable } from 'react-native'
import AliasBackground from '../assets/Background'
import TypeButton from '@/screens/Game/components/TypeButton'
import Modal from '@/components/modal'
import PlayingInstructionSVG from '../assets/PlayingInstructionSVG'
import LightButton from '@/assets/imgs/Button'
import AnimatedCircle from '../Components/AnimatedCircle'
import User from '@/components/User/user'
import Timer from '../Components/Timer'

const GameStart = ({ route }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const isFocused = useIsFocused()
  let props = route?.params
  const [modalVisible, setModalVisible] = useState(false)
  const [userModalVisible, setUserModalVisible] = useState(true)
  const [secModalVisible, setSecModalVisible] = useState(false)

  const [stoped, setStoped] = useState(false)
  const [answers, setAnswers] = useState({
    true: 0,
    false: 0,
  })
  useEffect(() => {
    if (secModalVisible == false) {
      if (props?.fromRes == true) {
        setUserModalVisible(true)
        props.fromRes = null
      }
    }
  }, [secModalVisible, props])

  const UserModal = () => {
    return (
      <Pressable
        onPress={() => (setUserModalVisible(false), setModalVisible(true))}
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          top: '2%',
        }}
      >
        <View style={styles.userModalBox}>
          <Text style={styles.commandName}>{/* Команда 1 */}</Text>
          <View style={{ alignItems: 'center' }}>
            <Text style={[styles.countOfTrueAnswer, { bottom: RH(50) }]}>Показывает</Text>
            <User size={380} />
          </View>
          <LightButton
            label={'Начать'}
            size={{ width: 281, height: 48 }}
            onPress={() => (setUserModalVisible(false), setModalVisible(true))}
          />
        </View>
      </Pressable>
    )
  }

  const ModalItem = () => {
    return (
      <Pressable
        onPress={() => setModalVisible(false)}
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          top: '5%',
        }}
      >
        <View style={styles.modalBox}>
          <View style={styles.instructionTextBox}>
            <Text style={styles.instruction}>
              После того как ваша команда отгадает слово переместите его вверх
            </Text>
            <Text style={styles.instruction}>Для получения унформации о слове нажмите на него</Text>
            <Text style={styles.instruction}>Для пропуска слова переместите его вниз</Text>
          </View>
          <PlayingInstructionSVG />
        </View>
        <View style={{ top: '-10%' }}>
          <TypeButton size={60} title={'OK'} onPress={() => setModalVisible(false)} />
        </View>
      </Pressable>
    )
  }

  const TimeIsFinished = () => {
    return (
      <Pressable
        onPress={() => {
          setAnswers({
            true: 0,
            false: 0,
          }),
            setSecModalVisible(false),
            navigation.navigate('ResultsOfAnswers')
        }}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text style={{ ...font('medium', 32, '#F73934') }}>Время истекло!</Text>
      </Pressable>
    )
  }

  return (
    <AliasBackground style={{ justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ position: 'absolute' }}>
        {modalVisible ? (
          <Modal setIsVisible={setModalVisible} modalVisible={modalVisible} item={<ModalItem />} />
        ) : null}
        {secModalVisible && !userModalVisible ? (
          <Modal
            setIsVisible={setSecModalVisible}
            modalVisible={secModalVisible}
            item={<TimeIsFinished />}
          />
        ) : null}
        {userModalVisible ? (
          <Modal
            setIsVisible={setUserModalVisible}
            modalVisible={userModalVisible}
            navigationText={''}
            item={<UserModal />}
          />
        ) : null}
      </View>
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
          <Text style={styles.commandName}>Команда 1</Text>
          <Text style={styles.countOfTrueAnswer}>{answers.true}</Text>
          <Text style={styles.countOfTrueAnswer}>Отгадано</Text>
        </View>
        <View>
          <AnimatedCircle
            word={'Testing'}
            answers={answers}
            setAnswers={setAnswers}
            stoped={stoped ? true : false}
          />
        </View>
        <View style={styles.answersBox}>
          <Text style={styles.countOfTrueAnswer}>Пропущено</Text>
          <Text style={styles.countOfTrueAnswer}>{answers.false}</Text>
          <View style={styles.bottomBox}>
            <View style={{ width: '65%' }}>
              <LightButton
                label={!stoped ? 'Стоп' : 'Продолжить'}
                size={{ width: !stoped ? 100 : null, height: 36 }}
                onPress={() => setStoped(!stoped)}
              />
            </View>
            <View style={{ alignItems: 'center', width: '35%' }}>
              <Timer
                secModalVisible={secModalVisible}
                userModalVisible={userModalVisible}
                stoped={stoped}
                timerStart={!props?.fromRes ? true : false}
                modalVisible={modalVisible}
                setUserModalVisible={setUserModalVisible}
                setSecModalVisible={setSecModalVisible}
              />
            </View>
          </View>
        </View>
      </View>
    </AliasBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  instruction: {
    ...font('Italic', 18, WHITE),
    paddingVertical: RH(50),
  },
  modalBox: {
    // height: '100%',
    width: '97%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userModalBox: {
    height: '95%',
    top: '-4%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
  },
  instructionTextBox: {
    height: '75%',
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
