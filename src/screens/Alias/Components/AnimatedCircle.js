import React, { memo, useRef } from 'react'
import TypeButton from '@/screens/Game/components/TypeButton'
import { PanResponder, Animated } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setExplainedWords, setStep, setTeams } from '@/store/Slices/AliasSlice'
import { font } from '@/theme/utils'
import { LIGHT_LABEL } from '@/theme/colors'

const AnimatedCircle = ({
  userExplainedWordsCount,
  setUserExplainedWordsCount,
  setTruthyCount,

  setFalsyCount,
}) => {
  const dispatch = useDispatch()
  const { explainYou, stoping, step, allTeams, words, explainerTeam, explainedWords, youGuesser } =
    useSelector(({ alias }) => alias)

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
            setExplainedWords({
              ...explainedWords,
              truthy: [...explainedWords.truthy, words?.[step]?.name],
            }),
          )

          if (explainYou) {
            setUserExplainedWordsCount({
              ...userExplainedWordsCount,
              points: ++userExplainedWordsCount.points,
            })
          }

          setTruthyCount((prev) => {
            return +prev + 1
          })
          dispatch(setStep(step + 1))
          dispatch(
            setTeams([
              ...allTeams?.map((elm) => {
                if (elm.value == explainerTeam) {
                  return {
                    ...elm,
                    points: ++elm.points,
                  }
                } else return elm
              }),
            ]),
          )

          Animated.timing(pan, {
            toValue: { x: 0, y: 0 },
            duration: 300,
            useNativeDriver: false,
          }).start()
        } else if (gestureState.moveY > 555) {
          dispatch(
            setExplainedWords({
              ...explainedWords,
              falsy: [...explainedWords.falsy, words?.[step]?.name],
            }),
          )

          setFalsyCount((prev) => {
            return +prev + 1
          })

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
      style={[!stoping && explainYou ? animatedStyle : {}, { zIndex: 99999999 }]}
      {...panResponder.panHandlers}
    >
      <TypeButton
        labelStyle={{ ...font('bold', 21, LIGHT_LABEL, 21) }}
        title={words?.[step]?.name}
        key={Math.random().toString()}
      />
    </Animated.View>
  )
}
export default memo(AnimatedCircle)
