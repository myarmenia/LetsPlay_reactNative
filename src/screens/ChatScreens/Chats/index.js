import React, { useEffect } from 'react'
import { ScrollView, Text, View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import style from '@/screens/ChatScreens/Chats/style'
import ChatItem from '@/screens/ChatScreens/Chats/components/ChatItem'
import { useDispatch, useSelector } from 'react-redux'
import { getMyTeams } from '@/store/Slices/TeamSlice'
import { useIsFocused } from '@react-navigation/native'
import { getProfileInfo } from '@/store/Slices/AuthSlice'

const ChatScreen = () => {
  const { user } = useSelector(({ auth }) => auth)
  const { teamChatsList } = useSelector(({ teams }) => teams)

  const dispatch = useDispatch()

  const isFocused = useIsFocused()

  useEffect(() => {
    dispatch(getMyTeams())
    dispatch(getProfileInfo())
  }, [isFocused])
  return (
    <ScreenMask>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={style.container}>
          <Text style={style.title}>Чат</Text>
          {teamChatsList?.length || user?.took_part_games?.length ? (
            <>
              <View>
                {teamChatsList?.map((eachChat) => {
                  return <ChatItem item={eachChat} key={eachChat?._id} type="Организатор" />
                })}
                {/* {user?.inside_teams?.map((eachChat) => {
                  return <ChatItem item={eachChat} key={eachChat?._id} type="Участник" />
                })} */}
              </View>
              <View>
                {user?.took_part_games?.map((eachChat) => {
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
