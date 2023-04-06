import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import MafiaLoader from '../PlayMafia/components/MafiaLoader'

const WaitPlayers = () => {
  return (
    <ScreenMask>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <MafiaLoader background={false} />
      </View>
    </ScreenMask>
  )
}
export default WaitPlayers
