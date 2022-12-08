import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import ScreenMask from '@/components/wrappers/screen'
import DarkButton from '@/assets/imgs/DarkButton'
import Select from '@/components/buttons/select'
import { ICON, WHITE } from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'
import { useAuth } from '@/hooks'

const GAMES = [
  'Футбол',
  'Соккер',
  'Триста',
  'Крокодил',
  'Баскетбол',
  'Волейбол',
  'Квест',
  'Навес',
  'Пионербол',
  'Алиас',
  'Своя игра',
]

const Preferences = () => {
  const { setAuthenticated } = useAuth()
  const [selecteds, setSelecteds] = React.useState(new Set())

  const select = React.useCallback((item) => {
    setSelecteds((prevState) => new Set([...prevState, item]))
  }, [])

  const unselect = React.useCallback((item) => {
    setSelecteds((prevState) => {
      prevState.delete(item)
      return new Set([...prevState])
    })
  }, [])

  return (
    <ScreenMask>
      <Text style={[styles.title, styles.mt60]}>Введите ваши предпочтения</Text>
      <Text style={[styles.subTitle, styles.mt60]}>
        Первая выбранная игра, является предпочтением в играх
      </Text>
      <Text style={[styles.subTitle, styles.mt40]}>Выбрать предпочтения</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {GAMES.map((game) => {
          return (
            <Select
              key={game}
              label={game}
              isActive={selecteds.has(game)}
              onPress={() => (selecteds.has(game) ? unselect(game) : select(game))}
            />
          )
        })}
      </View>
      <View style={styles.next}>
        <DarkButton label={'Далее>>'} onPress={() => selecteds.size && setAuthenticated(true)} />
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
