import React, { useEffect, useMemo, useRef, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import Modal from '@/components/modal'
import Button from '@/assets/imgs/Button'
import Elias from '@/assets/imgs/games/Elias.png'
import Poker from '@/assets/imgs/games/poker.png'
import Monopoly from '@/assets/imgs/games/monopolia.png'
import Crocodile from '@/assets/imgs/games/krokodil.png'
import MyGame from '@/assets/imgs/games/MyownGame.png'
import Mafia from '@/assets/imgs/games/mafia.png'
import Game from '@/components/game'
import { styles } from './style'
import { WHITE } from '@/theme/colors'
import DarkButton from '@/assets/imgs/DarkButton'
import { font } from '@/theme/utils'
import BtnCloseModal from '@/assets/imgs/btnCloseModal'
import ModalItem from '@/screens/Team/GameCategory/ModalItem'

const data = [
  {
    // type:'',
    // id:'',
    gadget: true,
    title: 'Элиас',
    image: Elias,
  },
  {
    // type:'',
    // id:'',
    gadget: false,
    title: 'Покер',
    image: Poker,
  },
  {
    // type:'',
    // id:'',
    gadget: false,
    title: 'Монополия',
    image: Monopoly,
  },
  {
    // type:'',
    // id:'',
    gadget: true,
    title: 'Крокодил',
    image: Crocodile,
  },
  {
    // type:'',
    // id:'',
    gadget: true,
    title: 'Мафия',
    image: Mafia,
  },
  {
    // type:'',
    // id:'',
    gadget: false,
    title: 'Своя игра',
    image: MyGame,
  },
]

function Index({ route }) {
  const game = route.params

  const [isModalVisible, setModalVisible] = useState(false)

  const scrollRef = useRef()

  const onPressTouch = scroll => {
    scrollRef.current.scrollTo({
      x: scroll,
      behavior: 'auto',
      animated: false,
    })
  }

  return (
    <ScreenMask>
      <ScrollView
        ref={scrollRef}
        onScrollEndDrag={event =>
          +event.nativeEvent.contentOffset.x > +data.length * 290
            ? onPressTouch(0)
            : +event.nativeEvent.contentOffset.x === 0
            ? onPressTouch(data.length * 302)
            : null
        }
        horizontal={true}
        contentContainerStyle={{ width: `${100 * data.length}%` }}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={200}
        decelerationRate="fast"
        pagingEnabled
      >
        {data.map((item, i) => (
          <Game
            onPress={() => {
              setModalVisible(true)
            }}
            key={i}
            data={item}
          />
        ))}
      </ScrollView>
      <Modal
        modalClose={true}
        modalVisible={isModalVisible}
        setIsVisible={setModalVisible}
        item={<ModalItem game={game} setModalVisible={setModalVisible} />}
      />
    </ScreenMask>
  )
}

export default Index
