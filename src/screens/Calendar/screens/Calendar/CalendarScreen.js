import React from 'react'
import { View, Text } from 'react-native'
import CalendarComponent from './CalendarComponent';
import ScreenMask from '@/components/wrappers/screen';
import { ScrollView } from 'react-native-gesture-handler';

const CalendarScreen = () => {
  const customStyle = {
    controlButtonText: {
      color: 'blue',
    },
  }
  return (
<ScreenMask>
<ScrollView>
<CalendarComponent/>
</ScrollView>
  </ScreenMask>
  )
 
 
  
}

export default CalendarScreen

// headerStyle