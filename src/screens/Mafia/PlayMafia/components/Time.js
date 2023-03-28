import { font } from '@/theme/utils'
import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import { useSelector } from 'react-redux'

const Timer = () => {
  const voteTime = useSelector(({ mafia }) => mafia.voteTime)
  const [seconds, setSeconds] = useState(voteTime * 60)

  useEffect(() => {
    let interval = null

    interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((seconds) => seconds - 1)
      } else {
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [seconds])
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
