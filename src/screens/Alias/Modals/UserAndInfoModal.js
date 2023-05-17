import LightButton from '@/assets/imgs/Button'
import { RH, RW, font } from '@/theme/utils'
import { useIsFocused } from '@react-navigation/native'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {
  Pressable,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
  useWindowDimensions,
  Dimensions,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import PlayingInstructionSVG from '../assets/PlayingInstructionSVG'
import TypeButton from '@/screens/Game/components/TypeButton'
import User from '@/components/User/user'
import { ICON, WHITE } from '@/theme/colors'
import { setStoping } from '@/store/Slices/AliasSlice'

export const SomeSampleScreen = ({ modalState, setModalState }) => {
  const isFocused = useIsFocused()
  const { user } = useSelector(({ auth }) => auth)
  const { explainYou, explainerTeam, explainerUser } = useSelector(({ alias }) => alias)
  const height = Dimensions.get('window').height
  const animatedValue = useRef(new Animated.Value(height)).current
  const dispatch = useDispatch()

  useEffect(() => {
    setModalState({ state: 'user' })
  }, [isFocused])
  useLayoutEffect(() => {
    if (!isFocused) {
      setTimeout(() => {
        animatedValue.setValue(height)
      }, 1000)
    }

    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start()

    // Animated.timing(animatedValueBack, {
    //   toValue: 1,
    //   duration: 2000,
    //   useNativeDriver: true,
    // }).start()
  }, [isFocused])

  return (
    <Animated.View
      style={{
        transform: [{ translateY: animatedValue }],
        width: '100%',
        display: !modalState.state && 'none',
        height: '120%',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
        backgroundColor: modalState.state && 'rgba(0,0,0,0.8)',
        position: 'absolute',
      }}
    >
      <Pressable
        onPress={() => {
          explainYou ? setModalState({ state: 'inst' }) : setModalState({})
        }}
        style={{
          display: modalState.state == 'user' ? 'flex' : 'none',
          flexDirection: 'column',
          alignItems: 'center',
          // zIndex: 300,
          // marginTop: height / 1.5,
          // position: 'absolute',
          height: '87%',
          // width: '100%',
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
                  setModalState({ state: 'inst' })
                  //   setUserModalVisible(false)
                }}
              />
            </View>
          )}
        </View>
      </Pressable>

      <View
        onPress={() => {
          // setModalState({ state: '' })
          dispatch(setStoping(false))
        }}
        style={{
          display: modalState.state == 'inst' ? 'flex' : 'none',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          height: '84%',
          justifyContent: 'center',
          //   position: 'relative',
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
        {/* <Pressable style={{ top: '7%' }}> */}
        <TypeButton
          size={60}
          title={'OK'}
          onPress={() => {
            dispatch(setStoping(false))
            setModalState('')

            //   setModalVisible(false)
            // dispatch(setStartedAlias(true))
          }}
        />
        {/* </Pressable> */}
      </View>
    </Animated.View>
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
    justifyContent: 'space-around',
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
