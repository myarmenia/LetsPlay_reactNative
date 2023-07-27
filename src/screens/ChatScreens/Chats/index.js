import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import ChatItem from '@/screens/ChatScreens/Chats/components/ChatItem'
import { useDispatch, useSelector } from 'react-redux'
import { getMyJoinedTeams, getMyTeams } from '@/store/Slices/TeamSlice'
import { useIsFocused } from '@react-navigation/native'
import { getProfileInfo } from '@/store/Slices/AuthSlice'
import { RH, RW, font } from '@/theme/utils'
import { LIGHT_GRAY, WHITE } from '@/theme/colors'

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
        <View style={styles.container}>
          <Text style={styles.title}>Чат</Text>
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
                {user?.took_part_games?.map((eachChat) => {
                  return (
                    <ChatItem
                      item={eachChat}
                      key={eachChat?._id}
                      playersLength={eachChat?.players?.length}
                      type="Игра"
                    />
                  )
                })}
                {/* {user?.create_games?.map((eachChat) => {
                  return <ChatItem item={eachChat} key={eachChat?._id} type="Игра" />
                })} */}
              </View>
            </>
          ) : (
            <Text style={styles.emptyText}>Пусто</Text>
          )}
        </View>
      </ScrollView>
    </ScreenMask>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: RH(56),
    alignItems: 'center',
  },

  emptyText: {
    paddingTop: '10%',
    ...font('regular', 24, WHITE, 26),
  },

  title: {
    ...font('bold', 24, LIGHT_GRAY, 29),
    marginBottom: RW(27),
  },
})

export default ChatScreen
