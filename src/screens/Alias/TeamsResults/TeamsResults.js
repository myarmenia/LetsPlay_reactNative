import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { RH, RW, font } from '@/theme/utils'
import { ICON, WHITE } from '@/theme/colors'
import LightButton from '@/assets/imgs/Button'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setEndRound, startAliasAgain } from '@/store/Slices/AliasSlice'

const TeamsResults = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(setEndRound(true))
    dispatch(startAliasAgain(true))
    navigation.navigate('GameStart')
  }
  return (
    <ScreenMask>
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <View style={styles.commandOne}>
            <Text style={styles.commandName}>Команда 1</Text>

            <Text style={styles.points}>Очки: 13</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.commandSec}>
            <Text style={styles.commandName}>Команда 2</Text>
            <Text style={styles.points}>Очки: 0</Text>
          </View>
        </View>
      </View>
      <View style={styles.btnBox}>
        <LightButton
          label={'Продолжить'}
          size={{ width: 288, height: 48 }}
          onPress={handleClick}
        />
      </View>
    </ScreenMask>
  )
}

export default TeamsResults

const styles = StyleSheet.create({
  mainContainer: {
    flex: 0.6,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  line: {
    width: RW(277),
    height: RH(1.5),
    backgroundColor: ICON,
  },
  commandName: {
    ...font('bold', 48, ICON),
    textAlign: 'center',
  },
  points: {
    ...font('bold', 48, WHITE),
    textAlign: 'center',
    paddingTop: RH(10),
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnBox: {
    alignSelf: 'center',
    paddingBottom: RH(30),
  },
})
