import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import Button from '@/assets/imgs/Button'
import styles from '@/screens/Elias/Settings/styles'
import { RH, RW } from '@/theme/utils'
import Slider from '@/components/range'
import ToggleSwitch from '@/components/ToggleSwitch'

function Index({ navigation }) {
  const [valWord, setValWord] = useState(0)
  const [valTime, setTimeVal] = useState(0)

  return (
    <ScreenMask>
      <Text style={styles.title}>Настройки</Text>
      <View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '95%',
              alignSelf: 'center',
            }}
          >
            <Text style={styles.time}>Время до голосования</Text>
            <Text style={styles.time}>{valWord}</Text>
          </View>
          <Text style={styles.timeTitle}>продолжительность в менутах</Text>
          <Slider step={4} maxValue={20} val={valWord} setVal={setValWord} />
        </View>
        <Text
          style={{
            ...styles.time,
            fontSize: 14,
            color: '#B3B7C2',
            marginVertical: 40,
            paddingHorizontal: RW(5),
          }}
        >
          Дополнительные персoнажы участвующие в игре
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '91%',
          alignSelf: 'center',
          justifyContent: 'space-around',
        }}
      >
        <View>
          <Text style={{ ...styles.time, marginTop: RH(20), marginBottom: 5 }}>Шпион и Дон</Text>
          <Text style={{ ...styles.timeTitle, marginVertical: 2, fontSize: 10 }}>
            (Количество игроков должно быть не менее 7 человек)
          </Text>
        </View>
        <View
          style={{
            top: '-4%',
          }}
        >
          <ToggleSwitch />
        </View>
      </View>
      <View style={{ marginLef: 'auto', marginVertical: RH(80), alignItems: 'center' }}>
        <Button
          onPress={() => navigation.navigate('playNow')}
          size={styles.btn}
          label={'Продолжить'}
        />
      </View>
    </ScreenMask>
  )
}

export default Index
