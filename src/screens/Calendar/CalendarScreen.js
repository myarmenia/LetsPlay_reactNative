import React from 'react'
import { View, Text, Platform } from 'react-native'
import CalendarComponent from './CalendarComponent'
import ScreenMask from '@/components/wrappers/screen'
import { ScrollView } from 'react-native-gesture-handler'
import GestureRecognizer from 'react-native-swipe-gestures'
import TournamentScreen from '@/screens/Calendar/TournamentScreen'

const CalendarScreen = ({ navigation }) => {
  const customStyle = {
    controlButtonText: {
      color: 'blue',
    },
  }

  const Component = Platform.OS == 'ios' ? View : GestureRecognizer
  return (
    <ScreenMask>
      <Component
        onSwipeRight={(state) => navigation.goBack()}
        style={{
          flex: 1,
        }}
      >
          <CalendarComponent />
      </Component>
    </ScreenMask>
  )
}

export default CalendarScreen
