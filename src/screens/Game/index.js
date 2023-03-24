import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import TypeButton from './components/TypeButton'
import { useDispatch } from 'react-redux'
import { saveTeamDataForCreating } from '@/store/Slices/TeamSlice'

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
    navigateTo: 'Tournament',
  },
]

const GameSelectScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(saveTeamDataForCreating(null))
  }, [])
  return (
    <ScreenMask>
      <View style={styles.container}>
        {TYPES.map(type => {
          return (
            <TypeButton
              title={type.title}
              key={type.title}
              onPress={() =>
                type.navigateTo != 'Tournament' ? navigation.navigate(type.navigateTo) : {}
              }
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
