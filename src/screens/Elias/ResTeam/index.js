import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import { styles } from '@/screens/Elias/ResTeam/styles'
import Button from '@/assets/imgs/Button'
import { RH } from '@/theme/utils'

const guessed = ['Слово', 'Слово', 'Слово', 'Слово', 'Слово', 'Слово', 'Слово', 'Слово']
const missed = ['Слово', 'Слово', 'Слово', 'Слово', 'Слово', 'Слово']
const ProfileScreen = ({ navigation }) => {
  return (

    <ScreenMask>
      <ScrollView>
        <Text style={styles.title}>Команда 1</Text>
        <View style={{ marginLeft: RH(15) }}>
          <View>
            <Text style={styles.team}>Отгадано {guessed.length}</Text>
            <View style={styles.itemBlock}>
              {guessed.map((item, i) => (
                <View key={i}>
                  <Text key={i} style={styles.items}>
                    {i + 1 + '. '}
                    {item}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        <View style={styles.team}>
          <View style={{ marginLeft: RH(15) }}>
            <Text style={styles.team}>Отгадано {missed.length}</Text>
            {missed.map((item, i) => (
              <View key={i}>
                <Text style={styles.items}>
                  {i + 1 + '. '}
                  {item}
                </Text>
              </View>
            ))}
          </View>
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Button
              onPress={() => navigation.navigate('ResTeamsElias')}
              size={styles.btn}
              label={'Продолжить'}
            />
          </View>
        </View>
      </ScrollView>
    </ScreenMask>
  )
}

export default ProfileScreen
