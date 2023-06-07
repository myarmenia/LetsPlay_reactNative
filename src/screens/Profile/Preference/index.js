import React, { memo, useCallback, useEffect, useLayoutEffect, useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { Text, TouchableOpacity, View } from 'react-native'
import style from './style'
import styles from '../style'
import { RH, RW } from '@/theme/utils'
import { ACTIVE, INACTIVE } from '@/theme/colors'
import { getGames, getGamesOnlyNames, setNames } from '@/store/Slices/GamesSlice'
import { useDispatch, useSelector } from 'react-redux'
import { changeUserPreferences } from '@/store/Slices/AuthSlice'
import LightButton from '@/assets/imgs/Button'
import Modal from '@/components/modal'
import { useIsFocused } from '@react-navigation/native'
function Index() {
  const dispatch = useDispatch()
  const { nameOfGames } = useSelector((gameSlice) => gameSlice.games)
  const { preferences } = useSelector(({ auth }) => auth.user)
  const { token } = useSelector(({ auth }) => auth)

  const [modalVisible, setModalVisible] = useState(false)

  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) {
      dispatch(getGamesOnlyNames())
    }
  }, [isFocused])

  // useEffect(() => {
  //   dispatch(
  //     setNames(
  //       nameOfGames.map(elm => {
  //         let changed = elm
  //         preferences.forEach(id => {
  //           if (id === elm.id) {
  //             changed = { ...elm, checked: !elm.checked }
  //           }
  //         })
  //         return changed
  //       }),
  //     ),
  //   )
  // }, [nameOfGames.length])

  const checkItem = (id) => {
    dispatch(
      setNames([
        ...nameOfGames.map((elm) => (elm.id == id ? { ...elm, checked: !elm.checked } : elm)),
      ]),
    )
  }

  const savePreferences = () => {
    dispatch(
      changeUserPreferences(
        nameOfGames.filter((elm) => elm.checked).map((el) => el.id),
        token,
      ),
      setModalVisible(true),
    )
  }
  return (
    <ScreenMask>
      <View style={style.container}>
        <Text style={styles.title}>Мои предпочтения</Text>
        <View style={style.gameNamesBlock}>
          <Text style={style.gameNamesTitle}>Предпочтения в играх</Text>
          <Text style={style.gameNamesTitle}>Настольные игры</Text>
          <View style={style.gamesBox}>
            {nameOfGames?.slice(7, nameOfGames.length).map((elm, i) => {
              return (
                <TouchableOpacity
                  key={elm?.id}
                  onPress={() => checkItem(elm?.id, 'board')}
                  style={[
                    style.gameBtn,
                    {
                      backgroundColor: elm.checked || preferences[i] == elm.id ? ACTIVE : INACTIVE,
                    },
                  ]}
                >
                  <Text style={styles.linkText}>{elm?.name}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
          <Text style={style.gameNamesTitle}>Активные игры</Text>
          <View style={style.gamesBox}>
            {nameOfGames?.slice(0, 7).map((elm, i) => {
              return (
                <TouchableOpacity
                  key={elm.id}
                  onPress={() => checkItem(elm.id, 'active')}
                  style={[
                    style.gameBtn,
                    {
                      backgroundColor: elm.checked || preferences[i] == elm.id ? ACTIVE : INACTIVE,
                    },
                  ]}
                >
                  <Text style={styles.linkText}>{elm?.name}</Text>
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
      <LightButton
        label={token ? 'Сохранить' : 'Продолжить'}
        onPress={savePreferences}
        style={style.submitBtn}
      />
      <Modal
        item={
          <View style={style.modal}>
            <Text style={style.successTeam}>Успешно сохранено</Text>
          </View>
        }
        modalVisible={modalVisible}
        setIsVisible={setModalVisible}
        navigationText={'Profile'}
      />
      {/* <View><User user={user} size={80} onPressImg={false} /></View> */}
    </ScreenMask>
  )
}

export default memo(Index)
