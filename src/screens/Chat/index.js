import React from 'react'
import { Text, View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import style from '@/screens/Chat/style'
import ChatItem from '@/screens/Chat/ChatItem'
import { useSelector } from 'react-redux'

const ChatScreen = () => {
  const user = useSelector(({ auth }) => auth.user)
  console.log(user.took_part_games)
  return (
    <ScreenMask>
      <View style={style.container}>
        <Text style={style.title}>Чат</Text>
        {user?.took_part_games.map((id) => (
          <ChatItem id={id} key={id} />
        ))}
      </View>
    </ScreenMask>
  )
}

export default ChatScreen
