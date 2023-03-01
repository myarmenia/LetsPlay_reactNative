import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import style from '@/screens/Chat/style'
import ChatItem from '@/screens/Chat/ChatItem'
import { useSelector } from 'react-redux'

const ChatScreen = () => {
  const user = useSelector(({ auth }) => auth.user)
  console.log(user.took_part_games[0])
  const testchat = {
    __v: 1,
    _id: '63f8c4b1aa1784e50084c899',
    age_restrictions_from: 15,
    age_restrictions_to: 20,
    clicked_end_players: [],
    confirmed_players: [],
    createdAt: '2023-02-24T10:05:14.863Z',
    end_date: '2023-03-24T08:58:16.069Z',
    game: {
      _id: '63ec913e338f6ba3d35e9eeb',
      category: { _id: '63ec8d46338f6ba3d35e9ee1', name: 'active' },
      description: null,
      img: '/game_imgs/навес.png',
      name: 'Навес',
      rules: '',
    },
    id: '63f88bdae6ba04e316662a74',
    number_of_players_from: 2,
    number_of_players_to: 4,
    organizer_in_the_game: true,
    players: ['63f60b2d0ed591f87344de91'],
    players_gender: 'm',
    start_date: '2023-02-24T08:58:16.069Z',
    ticket_price: 0,
    updatedAt: '2023-02-24T10:05:14.878Z',
    user: '63f60b2d0ed591f87344de91',
  }
  return (
    <ScreenMask>
      <View style={style.container}>
        <Text style={style.title}>Чат</Text>
        <ScrollView style={{ width: '100%' }}>
          {/* {user?.took_part_games.map((item) => (
            <ChatItem
              id={item._id}
              key={item._id + Math.random()}
              img={item.game.img}
              name={item.game.name}
              updatedAt={item.game.updatedAt}
            />
          ))} */}
          <ChatItem
            id={testchat._id}
            key={testchat._id + Math.random()}
            img={testchat.game.img}
            name={testchat.game.name}
            updatedAt={testchat.game.updatedAt}
          />
        </ScrollView>
      </View>
    </ScreenMask>
  )
}

export default ChatScreen
