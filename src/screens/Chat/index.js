import React from 'react'
import { Text } from 'react-native'

import ScreenMask from '@/components/wrappers/screen'

const ChatScreen = () => {
  return (
    <ScreenMask>
      <Text style={{ marginTop: 100, color: 'white' }}>Chat</Text>
    </ScreenMask>
  )
}

export default ChatScreen
