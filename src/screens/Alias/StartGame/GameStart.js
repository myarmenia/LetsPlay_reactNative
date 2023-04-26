import { ICON, WHITE } from '@/theme/colors'
import { useDispatch, useSelector } from 'react-redux'
import { font, RH, RW } from '@/theme/utils'
import { memo, useEffect, useState } from 'react'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { View, StyleSheet, Text, Pressable, InteractionManager } from 'react-native'
import PlayingInstructionSVG from '../assets/PlayingInstructionSVG'
import TypeButton from '@/screens/Game/components/TypeButton'
import AnimatedCircle from '../Components/AnimatedCircle'
import AliasBackground from '../assets/Background'
import LightButton from '@/assets/imgs/Button'
import User from '@/components/User/user'
import Timer from '../Components/Timer'
import Modal from '@/components/modal'

const GameStart = ({ route }) => {
  let props = route?.params
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)
  const [secModalVisible, setSecModalVisible] = useState(false)
  const [userModalVisible, setUserModalVisible] = useState(true)
  const {
    explainYou,
    explainerTeam,
    explainingUser
  } = useSelector(({ alias }) => alias)
  const { user } = useSelector(({auth})=>auth)
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
        onPress={() => {
          if(!explainYou){
            setStoped(false)
          }
          setUserModalVisible(false)
        }}
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',

         
        }}
      >
        <View style={[styles.userModalBox]}>
          <Text style={[styles.commandName, {position: "absolute", top: RH(40)}]}>{explainerTeam}</Text>
          <View style={{ alignItems: 'center' }}>
            <Text style={[styles.countOfTrueAnswer, { bottom: RH(10) }]}>Объясняет</Text>
            <User size={380} pressedUser={explainYou ? user : explainingUser}/>
          </View>
          
          {!!explainYou && <View style={{position: "absolute", bottom: RH(20)}}><LightButton
            label={'Начать'}
            size={{ width: 281, height: 48 }}
            onPress={() => {
              setUserModalVisible(false)
              
            }}
          /></View>}
          
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
          justifyContent: 'space-around',
          position: 'absolute',
        }}
      >
        <View style={styles.modalBox}>
          <View style={styles.instructionTextBox}>
            <Text style={styles.instruction}>
              После того как ваша команда отгадает слово переместите его вверх
            </Text>
            <Text style={styles.instruction}>Для пропуска слова переместите его вниз</Text>
          </View>
          <PlayingInstructionSVG />
        </View>
        <View style={{ top: '7%' }}>
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
            navigation.navigate('ResultsOfAnswers', answers)
        }}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text style={{ ...font('medium', 32, '#F73934') }}>Время истекло!</Text>
      </Pressable>
    )
  }
  useEffect(()=>{
    InteractionManager.runAfterInteractions(() => {
      if(!userModalVisible && explainYou){
        setModalVisible(true)
      } 
      else if(!userModalVisible && !explainYou){
        setStoped(false)
        setModalVisible(false)
      }
    });
  },[userModalVisible])
  return (
    <AliasBackground style={{ justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ position: 'absolute' }}>
        {/* {secModalVisible && !userModalVisible ? ( */}
        <Modal
          setIsVisible={setSecModalVisible}
          modalVisible={secModalVisible}
          item={<TimeIsFinished />}
        />
        {/* ) : null} */}
        {/* {userModalVisible ? ( */}
        <Modal
          setIsVisible={setUserModalVisible}
          modalVisible={userModalVisible}
          navigationText={''}
          item={<UserModal />}
        />
        {/* ) : null} */}
        {/* {modalVisible ? ( */}
        <Modal setIsVisible={setModalVisible} modalVisible={modalVisible} item={<ModalItem />} />
        {/* ) : null} */}
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
          <Text style={styles.commandName}>{explainerTeam}</Text>
          <Text style={styles.countOfTrueAnswer}>{answers.true}</Text>
          <Text style={styles.countOfTrueAnswer}>Отгадано</Text>
        </View>
        <View>
          <AnimatedCircle
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
              {!!explainYou &&  (
              <LightButton
                label={!stoped ? 'Стоп' : 'Продолжить'}
                size={{ width: !stoped ? 100 : null, height: 36 }}
                onPress={() => setStoped(!stoped)}
              />
              )}
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
