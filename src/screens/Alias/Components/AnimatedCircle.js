import React, { memo, useEffect, useRef, useState } from 'react'
import TypeButton from '@/screens/Game/components/TypeButton'
import { PanResponder, Animated } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setAnswersInGame, setCommandsInGame, setStep } from '@/store/Slices/AliasSlice'
import { font } from '@/theme/utils'
import { LIGHT_LABEL } from '@/theme/colors'

const AnimatedCircle = () => {
  const dispatch = useDispatch()
  const { words, stoping, explainYou, step, answersInGame, commandsInGame, explainerTeam } =
    useSelector(({ alias }) => alias)
  let changer = () => {
    let newArr = commandsInGame?.map((elm) => {
      if (elm.value == explainerTeam) {
        let count = elm.points + 1
        return {
          ...elm,
          points: count,
        }
      } else {
        return { ...elm }
      }
    })
    dispatch(setCommandsInGame(newArr))
  }
  //animation =====================================
  const pan = useRef(new Animated.ValueXY()).current
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dy: pan.y }]),
    onPanResponderRelease: (e, gestureState) => {
      if (explainYou && !stoping) {
        pan.flattenOffset()
        if (gestureState.moveY < 233) {
          dispatch(
            setAnswersInGame({
              ...answersInGame,
              true: ++answersInGame.true,
              trueWords: [...answersInGame.trueWords, words?.[step]?.name],
            }),
          )
          dispatch(setStep(step + 1))
          changer()

          Animated.timing(pan, {
            toValue: { x: 0, y: 0 },
            duration: 300,
            useNativeDriver: false,
          }).start()
        } else if (gestureState.moveY > 555) {
          dispatch(
            setAnswersInGame({
              ...answersInGame,
              false: ++answersInGame.false,
              falseWords: [...answersInGame.falseWords, words?.[step]?.name],
            }),
          )
          dispatch(setStep(step + 1))

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
    transform: [{ translateY: clampedY }],
  }

  return (
    <Animated.View
      style={!stoping && explainYou ? animatedStyle : {}}
      {...panResponder.panHandlers}
    >
      <TypeButton
        labelStyle={{ ...font('bold', 22, LIGHT_LABEL, 24) }}
        title={words?.[step]?.name}
        key={Math.random().toString()}
      />
    </Animated.View>
  )
}
export default memo(AnimatedCircle)
