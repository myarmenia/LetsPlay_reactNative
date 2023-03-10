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
import Select from '@/components/buttons/select'
import LightButton from '@/assets/imgs/Button'
import User from '@/assets/imgs/user/user'
import Modal from '@/components/modal'

function Index(props) {
  const dispatch = useDispatch()
  const { nameOfGames } = useSelector(gameSlice => gameSlice.games)
  const { preferences } = useSelector(({ auth }) => auth.user)
  const { token, user } = useSelector(({ auth }) => auth)

  const [modalVisible, setModalVisible] = useState(false)

  useLayoutEffect(() => {
    !nameOfGames.length && dispatch(getGamesOnlyNames())
  }, [])
  useEffect(() => {
    dispatch(
      setNames(
        nameOfGames.map(elm => {
          let changed = elm
          preferences.forEach(id => {
            if (id === elm.id) {
              changed = { ...elm, checked: !elm.checked }
            }
          })
          return changed
        }),
      ),
    )
  }, [nameOfGames.length])
  const checkItem = useCallback(
    id => {
      dispatch(
        setNames([
          ...nameOfGames.map(elm => (elm.id == id ? { ...elm, checked: !elm.checked } : elm)),
        ]),
      )
    },
    [nameOfGames],
  )
  const savePreferences = () => {
    dispatch(
      changeUserPreferences(
        nameOfGames.filter(elm => elm.checked).map(el => el.id),
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
            {nameOfGames?.slice(7, nameOfGames.length).map(elm => {
              return (
                <TouchableOpacity
                  key={elm?.id}
                  onPress={() => checkItem(elm?.id, 'board')}
                  style={[
                    style.gameBtn,
                    {
                      backgroundColor: elm.checked ? ACTIVE : INACTIVE,
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
            {nameOfGames?.slice(0, 7).map(elm => {
              return (
                <TouchableOpacity
                  key={elm.id}
                  onPress={() => checkItem(elm.id, 'active')}
                  style={[
                    style.gameBtn,
                    {
                      backgroundColor: elm.checked ? ACTIVE : INACTIVE,
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
      <View style={style.submitBtn}>
        <LightButton label={token ? 'Сохранить' : 'Продолжить'} onPress={savePreferences} />
      </View>
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
      <View>{/* <User user={user} size={80} onPressImg={false} /> */}</View>
    </ScreenMask>
  )
}

export default memo(Index)
