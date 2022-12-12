import React from 'react'
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import { font, RH, RW } from '@/theme/utils'
import { BTN_TEXT, LIGHT_LABEL, RADIO, WHITE } from '@/theme/colors'
import { data } from '@/screens/Game/Mafia/screen/PlayNow/data'
import LightButton from '@/assets/imgs/Button'
import { useNavigation } from '@react-navigation/native'
import DarkButton from "@/assets/imgs/DarkButton";

const PlayNow = () => {
  const navigate = useNavigation()
  return (
    <ScreenMask>
      <ScrollView>
        <View style={styles.common}>
          <View style={styles.games}>
            <Text style={styles.gamesText}>Игроки добавились в игру</Text>
          </View>
          <View style={styles.peopleInfo}>
            {data.map((item) => (
              <View style={styles.imgView} key={item.id}>
                <Image source={item.img} style={styles.img} />
              </View>
            ))}
          </View>
          <View>
            <View style={{ paddingVertical: 38 }}>
              <LightButton
                size={{ width: 281, height: 48 }}
                labelStyle={styles.countinue}
                label={'Продолжить'}
                white={'white'}
                background={'#7DCE8A'}
                bgColor={'#4D7CFE'}
                onPress={() => navigate.navigate('aboutGame')}
              />
            </View>
            <View style={{ paddingBottom: 38 }}>
              {/*<LightButton*/}
              {/*  size={{ width: 281, height: 48 }}*/}
              {/*  labelStyle={styles.invitePlayers}*/}
              {/*  label={'Пригласить игроков'}*/}
              {/*  white={'white'}*/}
              {/*  background={'#142A5C'}*/}
              {/*  bgColor={'#142A5C'}*/}
              {/*/>*/}
              <DarkButton
                  size={{ width: 281, height: 48 }}
                  label={'Пригласить игроков'}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenMask>
  )
}

const styles = StyleSheet.create({
  common: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  games: {
    paddingTop: RH(126),
    paddingBottom: RH(42.9),
  },
  gamesText: {
    ...font('regular', 24, WHITE, 24),
    fontWeight: '700',
    letterSpacing: 0.01,
  },
  peopleInfo: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgView: {
    paddingHorizontal: RW(24.29),
    paddingVertical: RH(20),
  },
  img: {
    width: 76,
    height: 150,
    resizeMode: 'contain',
  },
  countinue: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...font('inter', '18', LIGHT_LABEL, 24),
    fontWeight: '700',
    letterSpacing: 0.01,
  },
  invitePlayers: {
    ...font('inter', 18, BTN_TEXT, 24),
  },
})
export default PlayNow
