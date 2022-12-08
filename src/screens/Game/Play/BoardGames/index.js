import React, { useState } from 'react'
import { Text, View, Button } from 'react-native'
import Soccer from '@/assets/imgs/games/soccer.png'
import Naves from '@/assets/imgs/games/naves.png'
import Trista from '@/assets/imgs/games/trist.png'
import Basketball from '@/assets/imgs/games/Basketball.png'
import Volleyball from '@/assets/imgs/games/Volleyball.png'
import Pioneerball from '@/assets/imgs/games/Pioneerball.png'
import Hokey from '@/assets/imgs/games/Hokey.png'
import Quest from '@/assets/imgs/games/Quest.png'
import MyownGame from '@/assets/imgs/games/MyownGame.png'
import ScreenMask from '@/components/wrappers/screen'
import Modal from '@/components/modal'

const ActiveGames = [
  {
    // type:'',
    // id:'',
    title: 'Футбол',
    image: Soccer,
  },
  {
    // type:'',
    // id:'',
    title: 'Навес',
    image: Naves,
  },
  {
    // type:'',
    // id:'',
    title: 'Триста',
    image: Trista,
  },
  {
    // type:'',
    // id:'',
    title: 'Баскетбол',
    image: Basketball,
  },
  {
    // type:'',
    // id:'',
    title: 'Волейбол ',
    image: Volleyball,
  },
  {
    // type:'',
    // id:'',
    title: 'Пионербол ',
    image: Pioneerball,
  },
  {
    // type:'',
    // id:'',
    title: 'Пионербол ',
    image: Hokey,
  },
  {
    // type:'',
    // id:'',
    title: 'Квест ',
    image: Quest,
  },
  {
    // type:'',
    // id:'',
    title: 'Своя игра ',
    image: MyownGame,
  },
]

function Index(props) {
  const [isModalVisible, setModalVisible] = useState(true)

  return (
    <ScreenMask>
      <Text>asdd</Text>
      <Modal modalVisible={isModalVisible} btnClose={false} item={<Text>Vashik</Text>} />
    </ScreenMask>
  )
}

export default Index
