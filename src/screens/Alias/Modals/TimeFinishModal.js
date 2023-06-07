import { Animated, Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { font } from '@/theme/utils'
import { setYouGuesser } from '@/store/Slices/AliasSlice'

const TimeFinishModal = ({ timeIsFinished, setTimeIsFinished, userExplainedWordsCount }) => {
  const dispatch = useDispatch()
  const isFocused = useIsFocused()
  const navigation = useNavigation()
  const height = Dimensions.get('window').height
  const animatedValue = useRef(new Animated.Value(height)).current

  useEffect(() => {
    setTimeIsFinished('timeDontFinished')
  }, [isFocused])
  useLayoutEffect(() => {
    if (!isFocused) {
      setTimeout(() => {
        animatedValue.setValue(height)
      }, 1000)
      setTimeIsFinished('timeDontFinished')
    }
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 230,
      useNativeDriver: true,
    }).start()
  }, [isFocused])
  return (
    <Animated.View
      style={{
        transform: [{ translateY: animatedValue }],
        width: '100%',
        display: timeIsFinished == 'timeFinish' ? 'flex' : 'none',
        height: '120%',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99999,
        backgroundColor: timeIsFinished && 'rgba(0,0,0,0.8)',
        position: 'absolute',
      }}
    >
      <Pressable
        onPress={() => {
          setTimeIsFinished('timeDontFinished')
          dispatch(setYouGuesser(null))
          navigation.navigate('ResultsOfAnswers', userExplainedWordsCount)
        }}
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ ...font('medium', 32, '#F73934') }}>Время истекло!</Text>
      </Pressable>
    </Animated.View>
  )
}

export default TimeFinishModal

const styles = StyleSheet.create({})
