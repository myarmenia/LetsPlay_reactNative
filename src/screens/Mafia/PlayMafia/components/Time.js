import { setWaitNight } from '@/store/Slices/MafiaSlice'
import { font } from '@/theme/utils'
import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

const Timer = ({ voteTime, firstNightQuestion, night, setAnswer, endTime }) => {
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
      } else if (night && firstNightQuestion) {
        setSeconds(150) //7
        // setAnswer(1)
      } else if (night && !firstNightQuestion) {
        // dispatch(setWaitNight(false))
      } else {
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [seconds, night, firstNightQuestion])
  useEffect(() => {
    if (night && firstNightQuestion) {
      setSeconds(200) //8
    }
  }, [night, firstNightQuestion])

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
