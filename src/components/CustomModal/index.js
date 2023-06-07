import { RH, font } from '@/theme/utils'
import { useEffect, useRef, useState } from 'react'
import {
  Pressable,
  Text,
  View,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native'

import { ICON, WHITE } from '@/theme/colors'

const CustomModal = ({ modalVisible, setModalVisible, item }) => {
  //   const { modal } = useSelector(({ app }) => app)
  //   const [modalVisible, setModalVisible] = useState(false)
  const height = Dimensions.get('window').height
  const animatedValue = useRef(new Animated.Value(height)).current

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: modalVisible ? 0 : height,
      duration: 200,
      useNativeDriver: true,
    }).start()
  }, [modalVisible])

  return (
    <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
      <Animated.View
        style={{
          flex: 1,
          transform: [{ translateY: animatedValue }],
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 99999,
          backgroundColor: modalVisible ? 'rgba(0,0,0,0.1)' : 'transparent',
          position: 'absolute',
        }}
      >
        <Pressable>{item}</Pressable>
      </Animated.View>
    </TouchableWithoutFeedback>
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
export default CustomModal
