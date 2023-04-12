import React, { useRef } from 'react'
import TypeButton from '@/screens/Game/components/TypeButton'
import { PanResponder, Animated } from 'react-native'

const AnimatedCircle = ({ word, answers, setAnswers, stoped }) => {
  //animation =====================================
  const pan = useRef(new Animated.ValueXY()).current
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dy: pan.y }]),
      onPanResponderRelease: (e, gestureState) => {
        pan.flattenOffset()
        if (gestureState.moveY < 233) {
          stoped == false ? setAnswers({ ...answers, true: ++answers.true }) : null
          Animated.timing(pan, {
            toValue: { x: 0, y: 0 },
            duration: 300,
            useNativeDriver: false,
          }).start()
        } else if (gestureState.moveY > 555) {
          stoped == false ? setAnswers({ ...answers, false: ++answers.false }) : null
          Animated.timing(pan, {
            toValue: { x: 0, y: 0 },
            duration: 300,
            useNativeDriver: false,
          }).start()
        } else {
          Animated.timing(pan, {
            toValue: { x: 0, y: 0 },
            duration: 300,
            useNativeDriver: false,
          }).start()
        }
      },
    }),
  ).current

  const range = [-140, 0, 155]
  const clampedY = pan.y.interpolate({
    inputRange: range,
    outputRange: range,
    extrapolate: 'clamp',
  })

  const animatedStyle = {
    transform: [{ translateY: clampedY }],
  }
  return (
    <Animated.View style={!stoped ? animatedStyle : {}} {...panResponder.panHandlers}>
      <TypeButton title={word} key={Math.random().toString()} />
    </Animated.View>
  )
}
export default AnimatedCircle
