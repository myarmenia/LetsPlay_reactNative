import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import Loading from '@/components/loading/loading'

const WaitPlayer = () => {
  return (
    <ScreenMask>
      <View>
        <Loading />
      </View>
    </ScreenMask>
  )
}
export default WaitPlayer
