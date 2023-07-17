import React, { useEffect } from 'react'
import { ScrollView, Text, View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import style from '@/screens/ChatScreens/Chats/style'
import ChatItem from '@/screens/ChatScreens/Chats/components/ChatItem'
import { useDispatch, useSelector } from 'react-redux'
import { getMyJoinedTeams, getMyTeams } from '@/store/Slices/TeamSlice'
import { useIsFocused } from '@react-navigation/native'
import { getProfileInfo } from '@/store/Slices/AuthSlice'

const ChatScreen = () => {
  const { user } = useSelector(({ auth }) => auth)
  const { myTeams, myJoinedTeams } = useSelector(({ teams }) => teams)

  const dispatch = useDispatch()

  const isFocused = useIsFocused()

  useEffect(() => {
    dispatch(getMyTeams())
    dispatch(getMyJoinedTeams())
    dispatch(getProfileInfo())
  }, [isFocused])
  return (
    <ScreenMask>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={style.container}>
          <Text style={style.title}>Чат</Text>
          {myTeams?.length || user?.took_part_games?.length || myJoinedTeams.length ? (
            <>
              <View>
                {myTeams?.map((eachChat) => {
                  return <ChatItem item={eachChat} key={eachChat?._id} type="Командный" />
                })}
                {myJoinedTeams?.map((eachChat) => {
                  return <ChatItem item={eachChat} key={eachChat?._id} type="Командный" />
                })}
              </View>
              <View>
                {/* {console.log(JSON.stringify(user, null, 4))} */}
                {user?.took_part_games?.map((eachChat) => {
                  return <ChatItem item={eachChat} key={eachChat?._id} type="Игра" />
                })}
                {/* {user?.create_games?.map((eachChat) => {
                  return <ChatItem item={eachChat} key={eachChat?._id} type="Игра" />
                })} */}
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
