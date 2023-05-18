import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { memo } from 'react'
import { font } from '@/theme/utils'
import { RED, WHITE } from '@/theme/colors'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused, useNavigation, useLayoutEffect } from '@react-navigation/native'
import { setStoping, setTime } from '@/store/Slices/AliasSlice'

const Timer = ({ modalState, timeIsFinished, setTimeIsFinished }) => {
  const { explainYou, stoping, time, staticTime } = useSelector(({ alias }) => alias)
  const dispatch = useDispatch()
  const isFocused = useIsFocused()
  const navigation = useNavigation()
  const [selectedTime, setSelectedTime] = useState({ seconds: staticTime })

  useEffect(() => {
    if (!isFocused && selectedTime.seconds == 0) {
      setTimeout(() => {
        dispatch(setStoping(true))
      }, 2000)
    } else {
      setSelectedTime({ seconds: staticTime + 1 })
      // setSelectedTime({ seconds: staticTime })
    }
  }, [stoping, staticTime, isFocused])

  useEffect(() => {
    if (selectedTime.seconds == 0) {
      setTimeIsFinished('timeFinish')
    }
  }, [selectedTime.seconds])

  useEffect(() => {
    let timer
    if (!stoping) {
      timer = setInterval(() => {
        if (selectedTime.seconds > 0 && selectedTime.seconds !== 0) {
          if (!modalState?.state && explainYou) {
            setSelectedTime({
              seconds: selectedTime.seconds - 1,
            })
            dispatch(setTime(selectedTime.seconds - 1))
          }
          if (!explainYou && !stoping) {
            setSelectedTime({
              seconds: selectedTime.seconds - 1,
            })
            dispatch(setTime(selectedTime.seconds - 1))
          }
        } else if (time == 0) {
          dispatch(setTime(selectedTime.seconds - 1))
        }
      }, 1000)
    }

    return () => clearInterval(timer)
  }, [selectedTime.seconds, stoping, explainYou, timeIsFinished])

  const displayMinutes = Math.floor(selectedTime.seconds / 60)
    .toString()
    .padStart(2, '0')
  const displaySeconds = (selectedTime.seconds % 60).toString().padStart(2, '0')

  return (
    <>
      <Text style={styles.timer}>Оставшееся время</Text>
      <Text style={[styles.timerClock, { color: selectedTime.seconds > 5 ? WHITE : RED }]}>
        {time < 0 ? 0 : time}
      </Text>
    </>
  )
}

export default Timer
const styles = StyleSheet.create({
  timer: {
    ...font('regular', 12, WHITE),
  },
  timerClock: {
    ...font('medium', 24, WHITE),
  },
})
