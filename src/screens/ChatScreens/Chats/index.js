import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import ChatItem from '@/screens/ChatScreens/Chats/components/ChatItem'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import { RH, RW, font } from '@/theme/utils'
import { LIGHT_GRAY, WHITE } from '@/theme/colors'
import { getMyTeams, getMyJoinedTeams } from '@/store/Slices/TeamSlice'
import { getTourneyChats } from '@/store/Slices/TournamentReducer/TournamentApies'
import { getAllGameChats, getAllTeamChats } from '@/store/Slices/ChatsSlice'
import { getAllChats } from '@/store/Slices/TournamentReducer/TournamentApies'
import ScreenMask2 from '@/components/wrappers/screen2'

const ChatScreen = () => {
  const { chats } = useSelector(({ tournament }) => tournament)
  const dispatch = useDispatch()
  const isFocused = useIsFocused()

  useEffect(() => {
    dispatch(getAllChats())
    dispatch(getMyTeams())
    dispatch(getMyJoinedTeams())
  }, [isFocused])

  return (
    <ScreenMask2>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.title}>Чат</Text>
          {chats?.length ? (
            <View>
              {chats?.map((singleChat) => {
                let type = singleChat?.hasOwnProperty('team_tourney')
                  ? 'tournament'
                  : singleChat?.hasOwnProperty('team')
                    ? 'team'
                    : 'game'

                return (
                  <ChatItem
                    item={singleChat}
                    playersLength={singleChat?.players?.length}
                    key={singleChat?._id}
                    type={type}
                  />
                )
              })}
            </View>
          ) : (
            <Text style={styles.emptyText}>Пусто</Text>
          )}
        </View>
      </ScrollView>
    </ScreenMask2>
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

