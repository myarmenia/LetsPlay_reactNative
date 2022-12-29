import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'
import ScreenMask from '@/components/wrappers/screen'
import Button from '@/assets/imgs/Button'
import {LinearGradientText} from "react-native-linear-gradient-text";

const ResTeams = ({ navigation }) => {
  return (
    <ScreenMask>
      <View>
        <View style={styles.itemBlockOne}>
            <LinearGradientText
                colors={['#7DCE8A', '#4D7CFE']}
                text="Команда 1"
                start={{ x: 0.5, y: 0 }}
                end={{ x: 1, y: 1 }}
                textStyle={styles.com}
            />
          <Text style={styles.count}>Очки: 13</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.itemBlockTwo}>
            <LinearGradientText
                colors={['#7DCE8A', '#4D7CFE']}
                text="Команда 2"
                start={{ x: 0.5, y: 0 }}
                end={{ x: 1, y: 1 }}
                textStyle={styles.com}
            />
          <Text style={styles.count}>Очки: 13</Text>
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Button
          onPress={() => navigation.navigate('ResTeamsElias')}
          size={styles.btn}
          label={'Продолжить'}
        />
      </View>
    </ScreenMask>
  )
}

export default ResTeams
