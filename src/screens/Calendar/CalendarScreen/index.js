import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenMask from '@/components/wrappers/screen'
import Calendar from './components/Calendar'
import { useDispatch, useSelector } from 'react-redux'

const CalendarScreen = () => {
  const dispatch = useDispatch()
  const calendarGames = useSelector(({ app }) => app.calendarGames)
  return (
    <ScreenMask>
      <Calendar dispatch={dispatch} calendarGames={calendarGames} />
    </ScreenMask>
  )
}

export default CalendarScreen

const styles = StyleSheet.create({})
