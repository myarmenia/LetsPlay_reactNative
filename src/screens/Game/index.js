import React from 'react'
import { StyleSheet, View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import TypeButton from './components/TypeButton'

const TYPES = [
  {
    title: 'Играть',
    navigateTo: 'Play',
  },
  {
    title: 'Команда',
    navigateTo: 'TeamNavigator',
  },
  {
    title: 'Турнир',
    navigateTo: 'TournamentNavigator',
  },
]

const GameSelectScreen = ({ navigation }) => {
 
  return (
    <ScreenMask>
      <View style={styles.container}>
        {TYPES.map(type => {
          return (
            <TypeButton
              title={type.title}
              key={type.title}
              onPress={() => navigation.navigate(type.navigateTo)}
            />
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
})
