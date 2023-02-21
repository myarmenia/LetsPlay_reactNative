import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import { ICON, WHITE } from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'
import style from '@/screens/Profile/Preference/style'
import pStyles from '@/screens/Profile/style'
import Button from '@/assets/imgs/Button'
import { setToken } from '@/store/Slices/AuthSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addAsyncStorage } from '@/helpers/asyncStore'

const Preferences = () => {
  const list = [
    { id: 1, text: 'Футбол', checked: false },
    { id: 2, text: 'Навес', checked: false },
    { id: 3, text: 'Триста', checked: false },
    { id: 4, text: 'Баскетбол', checked: false },
    { id: 5, text: 'Волейбол', checked: false },
    { id: 6, text: 'Пионербол', checked: false },
    { id: 7, text: 'Хоккей', checked: false },
    { id: 8, text: 'Элиас', checked: false },
    { id: 9, text: 'Покер', checked: false },
    { id: 10, text: 'Монополия', checked: false },
    { id: 11, text: 'Крокодил', checked: false },
    { id: 12, text: 'Мафия', checked: false },
    { id: 13, text: 'Своя игра', checked: false },
  ]

  const [game, setGame] = useState([])
  const dispatch = useDispatch()
  const { expired_token } = useSelector(({ auth }) => auth)
  const PreferenceItem = ({ item }) => {
    const handlerActiveUser = () => {
      if (game.includes(item.id)) {
        const temp = game.filter((ev, i) => ev !== item.id)
        setGame(temp)
      } else {
        setGame([...game, item.id])
      }
    }
    return (
      <TouchableOpacity
        onPress={handlerActiveUser}
        style={game.includes(item.id) ? style.nameButton : style.nameButtonTwo}
      >
        <Text style={pStyles.linkText}>{item.text}</Text>
      </TouchableOpacity>
    )
  }
  const renderItem = ({ item }) => <PreferenceItem item={item} />

  return (
    <ScreenMask>
      <Text style={[styles.title, styles.mt60]}>Введите ваши предпочтения</Text>
      <Text style={[styles.subTitle, styles.mt40]}>Выбрать предпочтения</Text>
      <View style={style.flatListBlock}>
        <FlatList
          columnWrapperStyle={style.flatList}
          numColumns={3}
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.next}>
        <Button
          label={'Далее>>'}
          size={{ width: 171, height: 36 }}
          onPress={() => {
            dispatch(setToken(expired_token))
            addAsyncStorage('token', expired_token)
          }}
        />
      </View>
    </ScreenMask>
  )
}

export default Preferences

const styles = StyleSheet.create({
  mt60: {
    marginTop: RH(60),
  },
  mt40: {
    marginTop: RH(40),
    fontStyle: 'normal',
    marginBottom: RH(13),
  },
  title: {
    ...font('medium', 24, ICON, 32),
  },
  subTitle: {
    fontStyle: 'italic',
    ...font('medium', 18, WHITE, 28),
  },
  next: {
    right: RW(8),
    bottom: RH(44),
    position: 'absolute',
  },
})
