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
  setModalVisible,
  // timerStart,
  setUserModalVisible,
  userModalVisible,
  secModalVisible,
  setSecModalVisible,
}) => {
  const { explainYou, stoping, time, staticRoundTime, startAgain } = useSelector(({ alias }) => alias)
  console.log("time", time)
  const [selectedTime, setSelectedTime] = useState({ seconds: staticRoundTime })
  const dispatch = useDispatch()
  const isFocused = useIsFocused()
  const navigation = useNavigation()
  // useEffect(() => {
  //   console.log('timerStart useEffect', timerStart)
  //   if (timerStart) {

  //     setSelectedTime({ seconds: selectedTime.seconds + 0 })
  //     dispatch(setStoping(false))
  //     dispatch(setTime(selectedTime.seconds))
  //   }
  // }, [timerStart])
  useEffect(()=>{
  console.log("startAgain", startAgain);
    if(selectedTime.seconds == 0 ){
      setSelectedTime({seconds: staticRoundTime})
    }
  },[startAgain])
  useEffect(() => {
    if (selectedTime.seconds == 0) {
      // setSelectedTime({ seconds: 0 })
      // dispatch(setStoping(true))
      // dispatch(setTime(selectedTime.seconds))
      setSecModalVisible(true)
    }
    // else  if (selectedTime.seconds == 0 && !explainYou && endRound) {
    //   setSecModalVisible(true)
    // }
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
              // dispatch(setStoping(false))
              dispatch(setTime(selectedTime.seconds - 1))
            } 
            if (!userModalVisible && !explainYou) {
              setSelectedTime({
                seconds: selectedTime.seconds - 1,
              })
              // dispatch(setStoping(false))
              dispatch(setTime(selectedTime.seconds -1))
            }
            
          } else if (time == 0) {
            // setSelectedTime({ seconds: 0 })
            dispatch(setStoping(true))
            dispatch(setTime(selectedTime.seconds))
            // dispatch(setStoping(true))
            // dispatch(setTime(selectedTime.seconds))
            // setSecModalVisible(true)
            // clearInterval(timer)
          }

      }, 1000)
  } else {
    console.log("useEffect timer else")
    // setSelectedTime((prev) => ({ seconds: prev.seconds }))
    // dispatch(setStoping(false))
    // dispatch(setTime(selectedTime.seconds))
    // clearInterval(timer)
  }


    return () => clearInterval(timer)
  }, [selectedTime.seconds, stoping, explainYou, userModalVisible])

  const displayMinutes = Math.floor(selectedTime.seconds / 60)
    .toString()
    .padStart(2, '0')
  const displaySeconds = (selectedTime.seconds % 60).toString().padStart(2, '0')
useEffect(()=>{
  console.log("selectedTime.seconds =================", selectedTime.seconds);
},[selectedTime.seconds])
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
