import React, { useEffect, useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { Text, TouchableOpacity, View } from 'react-native'
import style from './style'
import styles from '../style'
import { RH, RW } from '@/theme/utils'
import { ACTIVE, INACTIVE } from '@/theme/colors'
import { getGames } from '@/store/Slices/GamesSlice'
import { useDispatch } from 'react-redux'

function Index(props) {
  const dispatch = useDispatch()
  const [activeGames, setActiveGames] = useState([
    { id: 1, text: 'Футбол', checked: false },
    { id: 2, text: 'Навес', checked: false },
    { id: 3, text: 'Триста', checked: false },
    { id: 4, text: 'Баскетбол', checked: false },
    { id: 5, text: 'Волейбол', checked: false },
    { id: 6, text: 'Пионербол', checked: false },
    { id: 7, text: 'Хоккей', checked: false },
  ])
  const [boardGames, setBoardGames] = useState([
    { id: 8, text: 'Элиас', checked: false },
    { id: 9, text: 'Покер', checked: false },
    { id: 10, text: 'Монополия', checked: false },
    { id: 11, text: 'Крокодил', checked: false },
    { id: 12, text: 'Мафия', checked: false },
    // { id: 13, text: 'Своя игра', checked: false },
  ])
  // useEffect(() => {
  //   dispatch(getGames('active'), getGames('desktop'))
  // }, [])
  const checkItem = (id, type) => {
    type == 'active'
      ? setActiveGames([
          ...activeGames.map(elm => (elm.id == id ? { ...elm, checked: !elm.checked } : elm)),
        ])
      : setBoardGames([
          ...boardGames.map(elm => (elm.id == id ? { ...elm, checked: !elm.checked } : elm)),
        ])
  }

  return (
    <ScreenMask>
      <View style={style.container}>
        <Text style={styles.title}>Мои предпочтения</Text>
        <View style={style.gameNamesBlock}>
          <Text style={style.gameNamesTitle}>Предпочтения в играх</Text>
          <Text style={style.gameNamesTitle}>Настольные игры</Text>
          <View style={style.gamesBox}>
            {boardGames.map(elm => {
              return (
                <TouchableOpacity
                  onPress={() => checkItem(elm.id, 'board')}
                  style={[style.gameBtn, { backgroundColor: elm.checked ? ACTIVE : INACTIVE }]}
                >
                  <Text style={styles.linkText}>{elm.text}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
          <Text style={style.gameNamesTitle}>Активные игры</Text>
          <View style={style.gamesBox}>
            {activeGames.map(elm => {
              return (
                <TouchableOpacity
                  onPress={() => checkItem(elm.id, 'active')}
                  style={[style.gameBtn, { backgroundColor: elm.checked ? ACTIVE : INACTIVE }]}
                >
                  <Text style={styles.linkText}>{elm.text}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
          <View style={style.flatListBlock}></View>
          <Text style={{ ...style.gameNamesTitle, marginBottom: RH(23) }}>
            Мои подписки на организаторов
          </Text>
          {/* здесь будут подписки пользавательей */}
        </View>
      </View>
    </ScreenMask>
  )
}

export default Index
