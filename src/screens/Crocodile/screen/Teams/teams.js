import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import { font, RH, RW } from '@/theme/utils'
import { RADIO, WHITE } from '@/theme/colors'
import LightButton from '@/assets/imgs/Button'
import Index from '@/components/modal'
import { useNavigation } from '@react-navigation/native'

const Teams = () => {
  const [modalRules, setModalRules] = useState(true)
  const navigation = useNavigation()
  return (
    <ScreenMask>
      <View style={styles.common}>
        <View style={styles.team}>
          <Text style={styles.teamText}>Каманда 1</Text>
        </View>
        <View style={styles.btnTimer}>
          <View style={styles.btn}>
            <LightButton label={'Стоп'} size={{ width: 98, height: 36 }} />
          </View>
          <View style={styles.timerView}>
            <Text style={styles.timerText}>Оставшееся время</Text>
            <Text style={styles.timerTextTwo}>2:00</Text>
          </View>
        </View>
      </View>
      <Index
        modalVisible={modalRules}
        setIsVisible={setModalRules}
        item={
          <View style={styles.modal}>
            <View>
              <Text style={styles.showStyle}>Показывает</Text>
            </View>
            <View>
              <Image source={require('@/assets/imgs/detail.png')} />
            </View>
            <View style={styles.btnStart}>
              <LightButton
                label={'Начать'}
                size={{ width: 281, height: 48 }}
                onPress={() => navigation.navigate('Words')}
              />
            </View>
          </View>
        }
      />
    </ScreenMask>
  )
}
const styles = StyleSheet.create({
  common: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  team: {
    marginVertical: RH(50),
  },
  teamText: {
    ...font('inter', 24, RADIO, 24),
    fontWeight: '400',
  },
  btnTimer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: RH(40),
  },
  btn: {
    marginRight: RW(150),
  },
  timerView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerText: {
    ...font('inter', 10, WHITE, 24),
    fontWeight: '400',
  },
  timerTextTwo: {
    ...font('inter', 24, WHITE, 24),
    fontWeight: '700',
  },
  modal: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  showStyle: {
    marginBottom: RH(53),
    ...font('inter', 20, WHITE, 20),
    fontWeight: '400',
  },
  btnStart: {
    marginTop: RH(186),
  },
})

export default Teams
