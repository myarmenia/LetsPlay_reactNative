import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'

const WaitPlayers = () => {
  return (
    <ScreenMask>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={'#fff'} />
        <Text style={{ color: '#fff', fontSize: 20, textAlign: 'center' }}>
          Не все игроки готовы. Ждем остальных!
        </Text>
      </View>
    </ScreenMask>
  )
}
export default WaitPlayers
