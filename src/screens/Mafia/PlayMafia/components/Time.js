import { setLoader, setWaitNight } from '@/store/Slices/MafiaSlice'
import { font } from '@/theme/utils'
import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import { useDispatch } from 'react-redux'

const Timer = ({ voteTime, answer, night, setAnswer, endTime }) => {
  const [seconds, setSeconds] = useState(voteTime * 60)

  const dispatch = useDispatch()
  useEffect(() => {
    setSeconds(voteTime * 60)
  }, [voteTime])
  useEffect(() => {
    let interval = null

    interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((seconds) => seconds - 1)
      } else if (night && answer == 0) {
        setSeconds(187) // 7
        // setAnswer(1)
      } else if (night && answer > 0) {
        // dispatch(setLoader(true))
        // dispatch(setWaitNight(false))
      } else {
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [seconds, night, answer])
  useEffect(() => {
    console.log('night', answer)
    if (night && answer == 0) {
      setSeconds(188) // 8
    }
  }, [night, answer])

  let minute =
    Math.floor(seconds / 60).toString().length == 1
      ? '0' + Math.floor(seconds / 60)
      : Math.floor(seconds / 60)
  let second = (seconds % 60).toString().length == 1 ? '0' + (seconds % 60) : seconds % 60
  return (
    <Text style={[font('bold', 18, '#fff'), seconds == 0 && { color: 'red' }]}>
      {minute + ':' + second}
    </Text>
  )
}

export default Timer
