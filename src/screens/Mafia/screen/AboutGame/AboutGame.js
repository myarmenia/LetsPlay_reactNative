import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import ScreenMask from '@/components/wrappers/screen'
import { font, RH, RW } from '@/theme/utils'
import { BLACK, LIGHT_LABEL, MAFIA_BACKGROUND, WHITE } from '@/theme/colors'
import MafiaData from '@/screens/Mafia/screen/AboutGame/data'
import LightButton from '@/assets/imgs/Button'
import { useNavigation } from '@react-navigation/native'
import Modal from '@/components/modal'

const AboutGame = () => {
  const [modalVisible, setModalVisible] = useState(true)
  const navigate = useNavigation()

  return (
    <ScreenMask>
      <ScrollView>
        <View style={styles.common}>
          <View>
            <Text style={styles.aboutMe}>Словарь игроков</Text>
          </View>
          <View>
            {MafiaData.map((item, i) => (
              <View key={i}>
                <LinearGradient
                  colors={['#7DCE8A', '#4D7CFE']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  useAngle={true}
                  angle={105}
                  angleCenter={{ x: 0.5, y: 0.5 }}
                  style={styles.rules}
                  key={item.id}
                >
                  <View style={{ margin: RW(15) }}>
                    <Image source={item.img} />
                  </View>
                  <View style={{ width: RW(200) }}>
                    <Text style={styles.text}>{item.title}</Text>
                    <Text style={styles.textDecretion}>{item.text}</Text>
                  </View>
                </LinearGradient>
              </View>
            ))}
          </View>
          <View style={{ paddingVertical: 38, marginHorizontal: 'auto' }}>
            <LightButton
              size={{ width: 281, height: 48 }}
              labelStyle={styles.countinue}
              label={'Продолжить'}
              white={'white'}
              background={'#7DCE8A'}
              bgColor={'#4D7CFE'}
              onPress={() => navigate.navigate('PlaceMan')}
            />
          </View>
        </View>
        <Modal
          modalVisible={modalVisible}
          setIsVisible={setModalVisible}
          item={
            <View style={styles.backgroundModal}>
              <View style={styles.aboutGames}>
                <Text style={styles.aboutGamesText}>Об игре</Text>
                <Text style={styles.mafiaText}>
                  Мафия захватывает мирный город, и честные жители больше не могут спать спокойно:
                  им нужно вычислить кто есть кто и выгнать всю мафию, чтобы спастись. Если им не
                  удастся это сделать, мафия захватит город, и мирные жители будут обречены.
                </Text>
                <Text style={{ ...styles.mafiaText, marginTop: RH(20) }}>
                  Игра делится на два периода: утро и ночь. В утреннем обсуждении — участвуют все
                  игроки, а ночью… у каждого персонажа своя роль. Весь игровой процесс используется
                  при помощи мобильного устройства.
                </Text>
                <Text style={styles.luckyGames}>Удачной игры!</Text>
              </View>
            </View>
          }
        />
      </ScrollView>
    </ScreenMask>
  )
}

const styles = StyleSheet.create({
  common: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  aboutMe: {
    ...font('inter', 24, WHITE, 24),
    fontWeight: '700',
    letterSpacing: RW(0.01),
  },
  rules: {
    width: RW(350),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 24,
    marginHorizontal: 24,
    // backgroundColor:MAFIA_BACKGROUND,
    borderRadius: RW(20),
  },
  text: {
    ...font('inter', 18, BLACK, 24),
    fontWeight: '700',
    letterSpacing: RW(0.01),
    marginVertical: RH(15),
  },
  textDecretion: {
    ...font('inter', 16, BLACK, 20),
    fontWeight: '400',
    letterSpacing: RW(0.01),
    marginBottom: RH(10),
  },
  countinue: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...font('inter', '18', LIGHT_LABEL, 24),
    fontWeight: '700',
    letterSpacing: 0.01,
  },
  aboutGames: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutGamesText: {
    ...font('inter', 24, WHITE, 24),
    fontWeight: '700',
    letterSpacing: 0.01,
    paddingVertical: RH(38),
  },
  mafiaText: {
    textAlign: 'center',
    ...font('inter', 16, WHITE, 24),
    paddingHorizontal: RW(24),
  },
  gamesText: {
    alignItems: 'center',
    ...font('inter', 16, WHITE, 24),
    paddingHorizontal: RW(24),
    paddingVertical: RH(24),
  },
  luckyGames: {
    ...font('inter', 16, WHITE, 24),
    paddingHorizontal: RW(24),
    paddingVertical: RH(24),
  },
  backgroundModal: {
    backgroundColor: LIGHT_LABEL,
    borderRadius: RW(20),
  },
})

export default AboutGame
