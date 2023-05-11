import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { memo } from 'react'
import { font } from '@/theme/utils'
import { RED, WHITE } from '@/theme/colors'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import {  setStoping, setTime } from '@/store/Slices/AliasSlice'

const Timer = ({
  modalVisible,
  fromRes,
  userModalVisible,
  secModalVisible,
  setSecModalVisible,
}) => {
  const { explainYou, stoping, time, staticTime } = useSelector(({ alias }) => alias)
  const [selectedTime, setSelectedTime] = useState({ seconds: staticTime })
  const dispatch = useDispatch()
  const isFocused = useIsFocused()
  const navigation = useNavigation()

  useEffect(() => {
    if (fromRes) {
      setSelectedTime({ seconds: staticTime })
    }
  }, [fromRes])

  useEffect(() => {
    if (selectedTime.seconds == 0) {
      setSecModalVisible(true)
    }
  }, [selectedTime.seconds])

  useEffect(() => {
    let timer
    if (!stoping) {
      timer = setInterval(() => {
        if (selectedTime.seconds > 0 && selectedTime.seconds !== 0) {
          if (!modalVisible && !userModalVisible && explainYou) {
            setSelectedTime({
              seconds: selectedTime.seconds - 1,
            })
            dispatch(setTime(selectedTime.seconds - 1))

          }
          if (!userModalVisible && !explainYou) {
            setSelectedTime({
              seconds: selectedTime.seconds - 1,
            })
            dispatch(setTime(selectedTime.seconds - 1))
          }
        } else if (time == 0) {
          dispatch(setTime(selectedTime.seconds))
        }
      }, 1000)
    }

    return () => clearInterval(timer)
  }, [selectedTime.seconds, stoping, explainYou, secModalVisible])

  const displayMinutes = Math.floor(selectedTime.seconds / 60)
    .toString()
    .padStart(2, '0')
  const displaySeconds = (selectedTime.seconds % 60).toString().padStart(2, '0')

  return (
    <>
      <Text style={styles.timer}>Оставшееся время</Text>
      <Text style={[styles.timerClock, { color: selectedTime.seconds > 5 ? WHITE : RED }]}>
        {time}
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
