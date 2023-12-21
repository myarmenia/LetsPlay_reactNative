import React, { useCallback, useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import { ACTIVE, ICON, INACTIVE, WHITE } from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'
import Button from '@/components/buttons/Button'
import { changeUserPreferences, setToken } from '@/store/Slices/AuthSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addAsyncStorage } from '@/helpers/asyncStore'
import { getGames, setGames } from '@/store/Slices/GamesSlice'

const Preferences = () => {

  const dispatch = useDispatch()
  const { expired_token } = useSelector(({ auth }) => auth)
  console.log(expired_token, 'expired_token');
  const { games } = useSelector((gameSlice) => gameSlice.games)

  useLayoutEffect(() => {
    !games?.length && dispatch(getGames())
  }, [])

  const checkItem = useCallback((id) => {
    dispatch(setGames([
      ...games?.map((elm) => (elm._id === id ? { ...elm, checked: !elm.checked } : elm)),
    ]),
    )
  },
    [games],
  )


  const savePreferences = () => {
    dispatch(
      changeUserPreferences({
        addPreferences: games.filter((elm) => elm.checked).map((el) => el._id),
        deletePreferences: [],
      }),
    )
  }

  return (
    <ScreenMask>
      <Text style={[styles.title, styles.mt60]}>Введите ваши предпочтения</Text>
      <Text style={[styles.subTitle, styles.mt40]}>Выбрать предпочтения</Text>
      <View style={styles.flatListBlock}>
        {games?.map((elm) => {
          return (
            <TouchableOpacity
              key={elm._id}
              onPress={() => checkItem(elm._id)}
              style={[
                styles.gameBtn,
                {
                  backgroundColor: elm.checked ? ACTIVE : INACTIVE,
                },
              ]}
            >
              <Text style={styles.linkText}>{elm.name}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
      <View style={styles.next}>
        <Button
          label={'Далее'}
          size={{ width: 171, height: 36 }}
          onPress={async () => {
            dispatch(setToken(expired_token))
            await addAsyncStorage('token', expired_token)
            savePreferences()
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
    fontStyle: 'regular',
    ...font('medium', 18, WHITE, 28),
  },
  linkText: {
    ...font('regular', 16, WHITE, 19),
    paddingHorizontal: RW(12),
    paddingVertical: RH(10),
  },
  gameBtn: {
    alignSelf: 'center',
    marginHorizontal: RW(4),
    borderRadius: RW(10),
    marginTop: RW(23),
  },
  next: {
    right: RW(8),
    bottom: RH(44),
    position: 'absolute',
  },
  flatListBlock: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '95%',
    alignSelf: 'center',
  },
})
