import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TypeButton from '@/screens/Game/components/TypeButton'
import { PanResponder } from 'react-native'
import { Animated } from 'react-native'
import { useSelector } from 'react-redux'

const AnimatedCircle = ({
  word,
  answers,
  setAnswers,
  stoped,
  setStoped,
  setInstructionModal,
  setAnswerVisible,
}) => {
  const increment = e => {
    if (!stoped && e) {
      setAnswers({ false: answers.false, true: ++answers.true })
    } else if (!stoped && !e) {
      setAnswers({ true: answers.true, false: ++answers.false })
    }
  }
  const { explainYou } = useSelector(({ alias }) => alias)
  //animation =====================================
  const pan = useRef(new Animated.ValueXY()).current
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dy: pan.y }]),
    onPanResponderRelease: (e, gestureState) => {
      if (explainYou) {
        pan.flattenOffset()
        if (gestureState.moveY < 233) {
          increment(true)
          setAnswerVisible({ visible: true, answerTruthy: true })
          Animated.timing(pan, {
            toValue: { x: 0, y: 0 },
            duration: 300,
            useNativeDriver: false,
          }).start()
        } else if (gestureState.moveY > 555) {
          increment(false)
          setAnswerVisible({ visible: true, answerTruthy: false })
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
      }
    },
  })

  const range = [-140, 0, 155]
  const clampedY = pan.y.interpolate({
    inputRange: range,
    outputRange: range,
    extrapolate: 'clamp',
  })

  const animatedStyle = {
    transform: [{ translateY: stoped == false ? clampedY : 0 }],
  }

  return (
    <Animated.View style={explainYou ? animatedStyle : {}} {...panResponder.panHandlers}>
      <TypeButton
        title={word}
        key={Math.random().toString()}
        onPress={() => {
          setInstructionModal(true), setStoped(true)
        }}
      />
    </Animated.View>
  )
}

export default memo(AnimatedCircle)
