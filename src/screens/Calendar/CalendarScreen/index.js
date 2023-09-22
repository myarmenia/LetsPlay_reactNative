import { StyleSheet } from 'react-native'
import React from 'react'
import ScreenMask from '@/components/wrappers/screen'
import Calendar from './components/Calendar'


const CalendarScreen = () => {
  return (
    <ScreenMask>
      <Calendar />
    </ScreenMask>
  )
}

export default CalendarScreen

const styles = StyleSheet.create({})
