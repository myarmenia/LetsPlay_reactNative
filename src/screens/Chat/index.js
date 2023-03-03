import React, { useEffect } from 'react'
import { ScrollView, Text, View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import style from '@/screens/Chat/style'
import ChatItem from '@/screens/Chat/ChatItem'
import { useDispatch, useSelector } from 'react-redux'
import { getTeams } from '@/store/Slices/TeamSlice'
// const testchat = {
//   __v: 1,
//   _id: '63f8c4b1aa1784e50084c899',
//   age_restrictions_from: 15,
//   age_restrictions_to: 20,
//   clicked_end_players: [],
//   confirmed_players: [],
//   createdAt: '2023-02-24T10:05:14.863Z',
//   end_date: '2023-03-24T08:58:16.069Z',
//   game: {
//     _id: '63ec913e338f6ba3d35e9eeb',
//     category: { _id: '63ec8d46338f6ba3d35e9ee1', name: 'active' },
//     description: null,
//     img: '/game_imgs/навес.png',
//     name: 'Навес',
//     rules: '',
//   },
//   id: '63f88bdae6ba04e316662a74',
//   number_of_players_from: 2,
//   number_of_players_to: 4,
//   organizer_in_the_game: true,
//   players: ['63f60b2d0ed591f87344de91'],
//   players_gender: 'm',
//   start_date: '2023-02-24T08:58:16.069Z',
//   ticket_price: 0,
//   updatedAt: '2023-02-24T10:05:14.878Z',
//   user: '63f60b2d0ed591f87344de91',
// }
const ChatScreen = () => {
  const user = useSelector(({ auth }) => auth.user)
  const { teamChatsList } = useSelector(({ teams }) => teams)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTeams())
  }, [])

  // useEffect(() => {
  //   dispatch(getTeams())
  // }, [teamChatsList])

  return (
    <ScreenMask>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={style.container}>
          <Text style={style.title}>Чат</Text>
          {teamChatsList.length ? (
            teamChatsList.map((eachChat) => {
              return <ChatItem item={eachChat} key={eachChat?._id} />
            })
          ) : (
            <Text style={style.emptyText}>Пусто</Text>
          )}
          {user?.took_part_games.map((eachChat) => {
            console.log(eachChat)
            return <ChatItem item={eachChat} key={eachChat?._id} />
          })}
        </View>
      </ScrollView>
    </ScreenMask>
  )
}

export default ChatScreen
