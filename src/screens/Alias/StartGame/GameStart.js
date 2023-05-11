import { ICON, WHITE } from '@/theme/colors'
import { useDispatch, useSelector } from 'react-redux'
import { font, RH, RW } from '@/theme/utils'
import { memo, useEffect, useRef, useState } from 'react'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  InteractionManager,
  TouchableOpacity,
} from 'react-native'
import PlayingInstructionSVG from '../assets/PlayingInstructionSVG'
import TypeButton from '@/screens/Game/components/TypeButton'
import AnimatedCircle from '../Components/AnimatedCircle'
import AliasBackground from '../assets/Background'
import LightButton from '@/assets/imgs/Button'
import User from '@/components/User/user'
import Timer from '../Components/Timer'
import Modal from '@/components/modal'
import { setCommandsInGame, setStartedAlias, setStoping } from '@/store/Slices/AliasSlice'

const GameStart = ({ route }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [secModalVisible, setSecModalVisible] = useState(false)
  const [userModalVisible, setUserModalVisible] = useState(false)
  const [truthyCount, setTruthyCount] = useState(0)
  const [falsyCount, setFalsyCount] = useState(0)
  // const [explainedWords, setExplainedWords] = useState({
  //   truthy: [],
  //   falsy: [],
  // })
  const { user } = useSelector(({ auth }) => auth)
  const { stoping } = useSelector(({ alias }) => alias)
  const { allTeams, explainerUser, explainerTeam, explainYou, step, explainedWords } = useSelector(
    ({ alias }) => alias,
  )
  let props = route?.params
  const dispatch = useDispatch()
  const isFocused = useIsFocused()
  const navigation = useNavigation()

  // let explainedWords = {
  //   truthy: [],
  //   falsy: [],
  // }
  const timeOutFunc = () => {
    setSecModalVisible(false)
    navigation.navigate('ResultsOfAnswers')
    // explainedWords = {
    //   truthy: [],
    //   falsy: [],
    // }
  }

  useEffect(() => {
    console.log('allteams ===', allTeams)
    if (!explainYou && allTeams[0].members?.length) {
      const currentExplainTeamPoints = allTeams.find((item) => item.value == explainerTeam)?.points
      if (typeof currentExplainTeamPoints == 'number') setTruthyCount(currentExplainTeamPoints)
      if (step > 0 && typeof currentExplainTeamPoints == 'number')
        setFalsyCount(step - currentExplainTeamPoints)
    }
  }, [allTeams, step])

      if(!startAgain){
        if (!userModalVisible && explainYou) {
          setModalVisible(true)
        } else if (!userModalVisible && !explainYou)  {
          setModalVisible(false)
        } 
      } 
      
    })
  }, [isFocused, userModalVisible, startAgain])
    useEffect(()=>{
      InteractionManager.runAfterInteractions(()=>{
        if(!modalVisible && endRound && startAgain){
          setUserModalVisible(true)
        } 
      })
    },[startAgain, modalVisible, userModalVisible, explainYou])
  
  const UserModal = () => {
    return (
      <Pressable
        onPress={() => {
          setUserModalVisible(false)
        }}
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <View style={[styles.userModalBox]}>
          <Text style={[styles.commandName, { position: 'absolute', top: RH(40) }]}>
            {explainerTeam}
          </Text>
          <View style={{ alignItems: 'center' }}>
            <Text style={[styles.countOfTrueAnswer, { bottom: RH(10) }]}>Объясняет</Text>
            <User size={380} pressedUser={explainYou ? user : explainerUser} />
          </View>

          {!!explainYou && (
            <View style={{ position: 'absolute', bottom: RH(20) }}>
              <LightButton
                label={'Начать'}
                size={{ width: 281, height: 48 }}
                onPress={() => {
                  setUserModalVisible(false)
                }}
              />
            </View>
          )}
        </View>
      </Pressable>
    )
  }

  const ModalItem = () => {
    return (
      <TouchableOpacity
        // onPress={() => {
        //   setModalVisible(false)
        //   dispatch(setStoping(false))
        //   // dispatch(setStartedAlias(true))
        // }}
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
          <TypeButton
            size={60}
            title={'OK'}
            onPress={() => {
              setModalVisible(false)
              dispatch(setStoping(false))
              // dispatch(setStartedAlias(true))
            }}
          />
        </View>
      </TouchableOpacity>
    )
  }

  const TimeIsFinished = () => {
    return (
      <Pressable
        onPress={() => {
          setSecModalVisible(false)
          navigation.navigate('ResultsOfAnswers')
        }}
        style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}
      >
        <Text style={{ ...font('medium', 32, '#F73934') }}>Время истекло!</Text>
      </Pressable>
    )
  }

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      if (props?.fromRes == true) {
        setUserModalVisible(true)
        props.fromRes = null
      } else {
        if (!userModalVisible && explainYou) {
          setModalVisible(true)
        } else if (!userModalVisible && !explainYou) {
          // dispatch(setStoping(false))
          setModalVisible(false)
        }
      }
    }, [isFocused, userModalVisible])

    //  else {
    //   if (!userModalVisible && !modalVisible) {
    //     // dispatch(setStoping(false))
    //     // setUserModalVisible(false)
    //     setModalVisible(false)
    //   } else {
    //     // setUserModalVisible(true)
    //   }
    // }
  }, [userModalVisible, isFocused, props, explainYou])
  useEffect(() => {
    console.log('explainedWords', explainedWords)
  }, [explainedWords])
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
        <Modal
          setIsVisible={setModalVisible}
          modalVisible={modalVisible}
          dontClose={true}
          item={<ModalItem />}
        />
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

          <Text style={styles.countOfTrueAnswer}>{truthyCount}</Text>
          <Text style={styles.countOfTrueAnswer}>Отгадано</Text>
        </View>
        <View>
          <AnimatedCircle setTruthyCount={setTruthyCount} setFalsyCount={setFalsyCount} />
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
            <Text>{allTeams[0].points}</Text>
            <Text>{allTeams[1].points}</Text>
            <View style={{ alignItems: 'center', width: '35%' }}>
              <Timer
                secModalVisible={secModalVisible}
                userModalVisible={userModalVisible}
                fromRes={props?.fromRes}
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
