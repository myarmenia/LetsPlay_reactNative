import React, { useState } from 'react'
import { Image, Text, View, Slider } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import Button from '@/assets/imgs/Button'
import styles from '@/screens/Elias/Settings/styles'
import { RH } from '@/theme/utils'

function Index({ navigation }) {
  return (
    <ScreenMask>
      <Text style={styles.title}>Настройки</Text>
      <View>
        <View>
          <Text style={styles.time}>Количество слов</Text>
          <Slider />
        </View>
        <View>
          <Text style={styles.time}>Время раунда</Text>
          <Slider />
        </View>
      </View>
      <View style={{ marginLef: 'auto', marginTop: RH(20), alignItems: 'center' }}>
        <Button
          onPress={() => navigation.navigate('DifficultyLevel')}
          size={styles.btn}
          label={'Продолжить'}
        />
      </View>
    </ScreenMask>
  )
}

export default Index
