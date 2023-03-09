import React from 'react'
import { View, StyleSheet } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import { Text } from 'react-native'
import LightButton from '@/assets/imgs/Button'
import { RH } from '@/theme/utils'
import { useNavigation } from '@react-navigation/native'

const CreatingTeams = ({ navigation }) => {
  return (
    <ScreenMask>
      <View style={styles.common}>
        <View style={styles.btn}>
          <LightButton
            label={'Создать команду'}
            size={{ width: 270, height: 48 }}
            onPress={() => navigation.navigate('CreateTeamTitle')}
          />
        </View>
        <View style={styles.btn}>
          <LightButton
            label={'Мои команды'}
            size={{ width: 270, height: 48 }}
            onPress={() => navigation.navigate('MyTeam')}
          />
        </View>
        <View style={styles.btn}>
          <LightButton
            label={'Поиск команды'}
            size={{ width: 270, height: 48 }}
            onPress={() => navigation.navigate('SearchTeam')}
          />
        </View>
      </View>
    </ScreenMask>
  )
}
const styles = StyleSheet.create({
  common: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    marginVertical: RH(28),
  },
})
export default CreatingTeams
