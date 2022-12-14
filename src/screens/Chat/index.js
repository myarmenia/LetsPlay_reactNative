import React from 'react'
import { Text, View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import style from '@/screens/Chat/style'
import ChatItem from '@/screens/Chat/ChatItem'

const ChatScreen = () => {
  return (
    <ScreenMask>
      <View style={style.container}>
        <Text style={style.title}>Чат</Text>
        <ChatItem />
      </View>
    </ScreenMask>
  )
}

export default ChatScreen
