import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import ScreenMask from '@/components/wrappers/screen'
import Type from '@/assets/imgs/type'
import { RW } from '@/theme/utils'

const TYPES = [
  {
    title: 'Играть',
    navigateTo: 'Play',
  },
  {
    title: 'Команда',
    navigateTo: 'Team',
  },
  {
    title: 'Турнир',
    navigateTo: 'Tournament',
  },
]

const GameSelectScreen = () => {
  const navigation = useNavigation()

  return (
    <ScreenMask>
      <View style={styles.container}>
        {TYPES.map((type) => {
          return (
            <TouchableOpacity
              key={type.title}
              activeOpacity={0.8}
              style={styles.button}
              onPress={() => navigation.navigate(type.navigateTo)}
            >
              <Type title={type.title} />
            </TouchableOpacity>
          )
        })}
      </View>
    </ScreenMask>
  )
}

export default GameSelectScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    borderRadius: RW(207 / 2),
  },
})
