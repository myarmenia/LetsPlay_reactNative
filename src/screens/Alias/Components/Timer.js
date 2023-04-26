import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { memo } from 'react'
import { font } from '@/theme/utils'
import { RED, WHITE } from '@/theme/colors'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { setEndRound, setStoping, setTime } from '@/store/Slices/AliasSlice'

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
  const {  explainYou, stoping, time } = useSelector(({ alias }) => alias)
  const [selectedTime, setSelectedTime] = useState({seconds : time})
  const dispatch = useDispatch()
  const isFocused = useIsFocused()
  const navigation = useNavigation()
  useEffect(() => {
    if (timerStart) {
      setSelectedTime({ seconds: selectedTime.seconds+ 0 })
      dispatch(setStoping(false))
      dispatch(setTime(selectedTime.seconds))
    }
  }, [timerStart])

  useEffect(() => {
    if (selectedTime.seconds == 0 && !userModalVisible) {
      setSelectedTime({ seconds: 0 })
      dispatch(setStoping(false))
      dispatch(setTime(selectedTime.seconds))
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
            dispatch(setStoping( false))
            dispatch(setTime(selectedTime.seconds))
          } else if(selectedTime.seconds > 0 && !userModalVisible){
            setSelectedTime((prev) => ({
              seconds: selectedTime.seconds - 1,
            }))
            dispatch(setStoping(false))
            dispatch(setTime(selectedTime.seconds))
          }
          if (selectedTime.seconds == 1) {
            setSelectedTime({ seconds: 0 })
            dispatch(setStoping( false))
            dispatch(setTime(selectedTime.seconds))
            setSecModalVisible(true)
            clearInterval(timer)
          }
        }
      } else {
        setSelectedTime((prev) => ({ ...prev, seconds: prev.seconds }))
        dispatch(setStoping( false))
            dispatch(setTime(selectedTime.seconds))
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
