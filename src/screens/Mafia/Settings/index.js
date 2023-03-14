import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import Button from '@/assets/imgs/Button'
import { RH, RW, font } from '@/theme/utils'
import Slider from '@/components/range'
import ToggleSwitch from '@/components/ToggleSwitch'
import { WHITE } from '@/theme/colors'
import Row from '@/components/wrappers/row'

function Index({ navigation }) {
  const [valWord, setValWord] = useState(5)

  return (
    <ScreenMask>
      <Text style={styles.title}>Настройки</Text>
      <Row
        wrapper={{
          justifyContent: 'space-between',
          marginBottom: RH(10),
          marginTop: RH(60),
        }}
      >
        <View>
          <Text style={styles.timeTitle}>Время до голосования</Text>
          <Text style={styles.timeSubtitle}>продолжительность в менутах</Text>
        </View>

        <Text style={styles.time}>{valWord}</Text>
      </Row>

      <Slider step={4} minVal={5} maxValue={20} val={valWord} setVal={setValWord} />

      <Text style={styles.playersDescription}>Дополнительные персoнажы участвующие в игре</Text>

      <Row
        wrapper={{
          justifyContent: 'space-between',
          marginTop: RH(30),
        }}
      >
        <View>
          <Text style={styles.timeTitle}>Шпион и Дон</Text>
          <Text style={styles.timeSubtitle}>
            (Количество игроков должно быть не менее {'\n'}7 человек)
          </Text>
        </View>
        <View
          style={{
            top: '-4%',
          }}
        >
          <ToggleSwitch />
        </View>
      </Row>
      <View style={styles.btnContainer}>
        <Button
          onPress={() => navigation.navigate('QrCode')}
          size={styles.btn}
          label={'Продолжить'}
        />
      </View>
    </ScreenMask>
  )
}
const styles = StyleSheet.create({
  title: {
    ...font('bold', 24, WHITE),
    textAlign: 'center',
  },

  timeTitle: {
    ...font('bold', 20, WHITE),
    marginBottom: RH(8),
  },
  timeSubtitle: {
    ...font('regular', 12, WHITE),
  },
  time: {
    ...font('bold', 25, WHITE),
  },
  playersDescription: {
    ...font('bold', 18, '#B3B7C2'),
    marginTop: RH(65),
  },
  btnContainer: {
    position: 'absolute',
    bottom: RH(50),
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  btn: {
    width: 281,
    height: 48,
  },
})

export default Index
