import React from 'react'
import { View, Text } from 'react-native'
import CalendarComponent from './CalendarComponent'
import ScreenMask from '@/components/wrappers/screen'
import { ScrollView } from 'react-native-gesture-handler'
import GestureRecognizer from 'react-native-swipe-gestures'

const CalendarScreen = ({navigation}) => {
  const customStyle = {
    controlButtonText: {
      color: 'blue',
    },
  }
  return (
    <ScreenMask>
       <GestureRecognizer
        onSwipeRight={state => navigation.goBack()}
        style={{
          flex: 1,
        }}
      >
      <ScrollView>
        <CalendarComponent />
      </ScrollView>
      </GestureRecognizer>
    </ScreenMask>
  )
}

export default CalendarScreen
