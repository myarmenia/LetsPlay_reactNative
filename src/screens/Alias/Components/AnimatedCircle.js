import React, { useEffect, useRef, useState } from 'react'
import TypeButton from '@/screens/Game/components/TypeButton'
import { PanResponder, Animated } from 'react-native'
import { useSelector } from 'react-redux'

const AnimatedCircle = ({  answers, setAnswers, stoped }) => {
  const [step, setStep] = useState(0)
  const { words } = useSelector(({alias})=> alias)
  //animation =====================================
  const pan = useRef(new Animated.ValueXY()).current
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dy: pan.y }]),
    onPanResponderRelease: (e, gestureState) => {
      pan.flattenOffset()
      if (gestureState.moveY < 233) {
        stoped == false ? setAnswers({ ...answers, true: ++answers.true }) : null
        setStep(step+1)
        Animated.timing(pan, {
          toValue: { x: 0, y: 0 },
          duration: 300,
          useNativeDriver: false,
        }).start()
      } else if (gestureState.moveY > 555) {
        stoped == false ? setAnswers({ ...answers, false: ++answers.false }) : null
        setStep(step+1)
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
  })
  useEffect(()=>{
    console.log("step  ----------" , step, words?.[step]?.name);
  },[step])
  const range = [-140, 0, 155]
  const clampedY = pan.y.interpolate({
    inputRange: range,
    outputRange: range,
    extrapolate: 'clamp',
  })

  const animatedStyle = {
    transform: [{ translateY: clampedY }],
  }
  console.log("words", words);
  return (
    <Animated.View style={!stoped ? animatedStyle : {}} {...panResponder.panHandlers}>
      <TypeButton title={words?.[step]?.name} key={Math.random().toString()} />
    </Animated.View>
  )
}
export default AnimatedCircle
