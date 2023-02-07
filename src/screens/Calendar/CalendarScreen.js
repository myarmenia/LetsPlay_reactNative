import React from 'react'
import CalendarComponent from './CalendarComponent'
import ScreenMask from '@/components/wrappers/screen'

const CalendarScreen = () => {
  return (
    <ScreenMask>
      <CalendarComponent />
    </ScreenMask>
  )
}

export default CalendarScreen
