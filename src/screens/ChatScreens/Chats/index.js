import React, { useEffect } from 'react'
import { ScrollView, Text, View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import style from '@/screens/ChatScreens/Chats/style'
import ChatItem from '@/screens/ChatScreens/Chats/components/ChatItem'
import { useDispatch, useSelector } from 'react-redux'
import { getTeams } from '@/store/Slices/TeamSlice'
import { useIsFocused } from '@react-navigation/native'

const ChatScreen = () => {
  const { user } = useSelector(({ auth }) => auth)
  const { teamChatsList } = useSelector(({ teams }) => teams)

  const dispatch = useDispatch()

  const isFocused = useIsFocused()

  useEffect(() => {
    dispatch(getTeams())
  }, [isFocused])

  return (
    <ScreenMask>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={style.container}>
          <Text style={style.title}>Чат</Text>
          {teamChatsList?.length || user?.took_part_games?.length ? (
            <>
              <View>
                {teamChatsList?.map(eachChat => {
                  return <ChatItem item={eachChat} key={eachChat?._id} type="Организатор" />
                })}
              </View>
              <View>
                {user?.took_part_games?.map(eachChat => {
                  return <ChatItem item={eachChat} key={eachChat?._id} type="Участник" />
                })}
              </View>
            </>
          ) : (
            <Text style={style.emptyText}>Пусто</Text>
          )}
        </View>
      </ScrollView>
    </ScreenMask>
  )
}

export default ChatScreen
