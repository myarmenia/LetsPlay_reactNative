import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { memo } from 'react'
import { font } from '@/theme/utils'
import { RED, WHITE } from '@/theme/colors'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { setEndRound } from '@/store/Slices/AliasSlice'

const Timer = ({
  stoped,
  modalVisible,
  setModalVisible,
  timerStart,
  setUserModalVisible,
  userModalVisible,
  secModalVisible,
  setSecModalVisible,
}) => {
  const [selectedTime, setSelectedTime] = useState({ seconds: 8 })
  const { minutesInGame,explainYou } = useSelector(({ alias }) => alias)
  const dispatch = useDispatch()
  const isFocused = useIsFocused()
  const navigation = useNavigation()
  useEffect(() => {
    if (timerStart) {
      setSelectedTime({ seconds: 8 + 0 })
    }
  }, [timerStart])

  useEffect(() => {
    if (selectedTime.seconds == 0 && !userModalVisible) {
      setSelectedTime({ seconds: 0 })
      dispatch(setEndRound(true))
      setSecModalVisible(true)
    }
  }, [selectedTime.seconds])
  useEffect(() => {
    const timer = setInterval(() => {
      if (!stoped) {
        if (selectedTime.seconds !== 0) {
          if (selectedTime.seconds > 0 && !modalVisible && !userModalVisible){
            setSelectedTime((prev) => ({
              seconds: selectedTime.seconds - 1,
            }))
          } else if(selectedTime.seconds > 0 && !userModalVisible){
            setSelectedTime((prev) => ({
              seconds: selectedTime.seconds - 1,
            }))
          }
          if (selectedTime.seconds == 1) {
            setSelectedTime({ seconds: 0 })
            setSecModalVisible(true)
            clearInterval(timer)
          }
        }
      } else {
        setSelectedTime((prev) => ({ ...prev, seconds: prev.seconds }))
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [selectedTime.seconds, modalVisible || stoped, explainYou, userModalVisible])

  const displayMinutes = Math.floor(selectedTime.seconds / 60)
    .toString()
    .padStart(2, '0')
  const displaySeconds = (selectedTime.seconds % 60).toString().padStart(2, '0')

  return (
    <>
      <Text style={styles.timer}>Оставшееся время</Text>
      <Text style={[styles.timerClock, {color: selectedTime.seconds > 5 ? WHITE : RED}]}>
        {displayMinutes}:{displaySeconds}
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
