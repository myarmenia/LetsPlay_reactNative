import React, { useState, useEffect, useRef } from 'react'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Timer = () => {
  const Ref = useRef(null)
  const [timer, setTimer] = useState('00:00')
  const navigate = useNavigation()
  const getTimeRemaining = e => {
    const total = Date.parse(e) - Date.parse(new Date())
    const seconds = Math.floor((total / 1000) % 60)
    const minutes = Math.floor((total / 1000 / 60) % 60)
    return {
      total,
      minutes,
      seconds,
    }
  }

  const startTimer = e => {
    let { total, minutes, seconds } = getTimeRemaining(e)
    if (total >= 0) {
      setTimer(
        (minutes > 9 ? minutes : '0' + minutes) + ':' + (seconds > 9 ? seconds : '0' + seconds),
      )
    }
  }

  const clearTimer = e => {
    setTimer('02:00')
    if (Ref.current) clearInterval(Ref.current)
    const ID = setInterval(() => {
      startTimer(e)
    }, 1000)
    Ref.current = ID
  }

  const getDeadTime = () => {
    let deadline = new Date()

    deadline.setSeconds(deadline.getSeconds() + 60)
    return deadline
  }

  useEffect(() => {
    clearTimer(getDeadTime())
  }, [])

  if (timer === '00:00') {
    navigate.navigate('PlaceMan')
  }
  return <Text>{timer}</Text>
}

export default Timer
