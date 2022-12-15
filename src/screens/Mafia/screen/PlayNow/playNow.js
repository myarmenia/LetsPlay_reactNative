import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import { font, RH, RW } from '@/theme/utils'
import { BTN_TEXT, LIGHT_LABEL, RADIO, WHITE } from '@/theme/colors'
import LightButton from '@/assets/imgs/Button'
import { useNavigation } from '@react-navigation/native'
import DarkButton from '@/assets/imgs/DarkButton'
import { Players } from '@/assets/TestData'
import User from '@/assets/imgs/user/user'

const PlayNow = () => {
  const navigate = useNavigation()
  return (
    <ScreenMask>
      <View>
        <View style={styles.common}>
          <Text style={styles.title}>Игроки добавились в игру</Text>
          <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
            <View style={styles.container}>
              {Players.map((item, i) => (
                <View key={i} style={styles.item}>
                  <User user={item} />
                </View>
              ))}
            </View>
          </ScrollView>
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
              <DarkButton size={{ width: 281, height: 48 }} label={'Пригласить игроков'} />
            </View>
          </View>
        </View>
      </View>
    </ScreenMask>
  )
}

const styles = StyleSheet.create({
  titleBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBlock: {
    width: RW(50),
    height: RW(50),
    borderRadius: RW(50),
    marginRight: RW(15),
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: RW(50),
  },
  title: {
    textAlign: 'center',
    ...font('bold', 24, WHITE),
    marginVertical: RH(30),
  },
  scroll: {
    marginRight: 'auto',
    marginLeft: 'auto',
    width: RW(310),
    height: RH(600),
    flexGrow: 0,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  containerT: {
    backgroundColor: 'red',
  },
  centeredContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: RW(3),
    marginTop: RH(30),
  },
  activeItem: {
    padding: RW(3),
    marginTop: RH(30),
    borderWidth: 1,
    borderColor: '#7DCE8A',
    borderRadius: RW(15),
  },
  receivingZone: {
    height: 200,
    borderRadius: 10,
  },
  incomingPayload: {
    marginTop: 10,
    fontSize: 24,
  },
  received: {
    marginTop: 10,
    fontSize: 18,
  },
  palette: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  draggableBox: {
    position: 'absolute',
    // borderRadius: 10,
  },
  detail: {
    width: 50,
    height: 50,
  },
  scrollBlock: {
    height: 100,
  },
  dragging: {
    opacity: 0.01,
  },
  hoverDragging: {
    borderColor: 'black',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  stagedCount: {
    fontSize: 18,
  },
  players: {
    backgroundColor: 'red',
    marginLeft: 10,
    width: 50,
    height: 50,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  comBg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
  },
  scrollList: {
    marginTop: 'auto',
    marginBottom: 'auto',
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'black',
  },
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
