import { Animated, PanResponder, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import AliasBackground from '../assets/Background'
import ScreenMask from '@/components/wrappers/screen'
import { RH, RW } from '@/theme/utils'

const GameStart = () => {
  const [animation] = useState(new Animated.Value(350))
  const [swipeDirection, setSwipeDirection] = useState(null)
  const [deleting, setDeleting] = useState(null)

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,

      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dy > 86) {
          setSwipeDirection('right')
        } else {
          setSwipeDirection('left')
        }
        animation.setValue(gestureState.dy)
      },
      onPanResponderRelease: (evt, gestureState) => {
        // if (gestureState.moveY < 160) {
        //   setDeleting(true)
        //   Animated.timing(animation, {
        //     toValue: 0,
        //     duration: 200,
        //     useNativeDriver: true,
        //   }).start()
        // } else {
        Animated.timing(animation, {
          toValue: 350,
          duration: 200,
          useNativeDriver: true,
        }).start()
        // }
      },
    }),
  ).current
  return (
    <AliasBackground>
      <Animated.View
        style={[styles.circle, { transform: [{ translateY: animation }] }]}
        {...panResponder.panHandlers}
      ></Animated.View>
    </AliasBackground>
  )
}

export default GameStart

const styles = StyleSheet.create({
  circle: {
    width: RW(150),
    height: RH(150),
    borderRadius: RW(75),
    backgroundColor: '#fff',
  },
})
