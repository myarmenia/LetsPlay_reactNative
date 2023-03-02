import React, { useEffect } from 'react'
import { ScrollView, Text, View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import style from '@/screens/Chat/style'
import ChatItem from '@/screens/Chat/ChatItem'
import { useDispatch, useSelector } from 'react-redux'
import { getTeams } from '@/store/Slices/TeamSlice'

const ChatScreen = () => {
  const { teamChatsList } = useSelector(({ teams }) => teams)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTeams())
  }, [])
  useEffect(() => {
    dispatch(getTeams())
  }, [teamChatsList])

  return (
    <ScreenMask>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={style.container}>
          <Text style={style.title}>Чат</Text>
          {teamChatsList.length ? (
            teamChatsList.map(eachChat => {
              return <ChatItem item={eachChat} key={eachChat?._id} />
            })
          ) : (
            <Text style={style.emptyText}>Пусто</Text>
          )}
          {/* {user?.took_part_games.map((id) => ( */}
        </View>
      </ScrollView>
    </ScreenMask>
  )
}

export default ChatScreen
