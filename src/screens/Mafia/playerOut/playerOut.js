import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import VectorIcon from '@/assets/svgs/vectorSvg'
import { font, RH, RW } from '@/theme/utils'
import { GRAY, ICON, WHITE } from '@/theme/colors'
import LightButton from '@/assets/imgs/Button'
import Index from '@/components/modal'
import { useNavigation } from '@react-navigation/native'
import { Players } from '@/assets/TestData'
import User from '@/components/User/user'

const PlayerOut = () => {
  const [modalVisible, setIsVisible] = useState(true)
  const [user, setUser] = useState([])

  const handlerActiveUser = (id) => {
    if (user.includes(id)) {
      const temp = user.filter((item, i) => item !== id)
      setUser(temp)
    } else {
      setUser([...user, id])
    }
  }

  const navigation = useNavigation()

  return (
    <ScreenMask>
      <View style={styles.common}>
        <View style={styles.youPlaceMen}>
          <View>
            <Image source={require('@/assets/mafiaPng/PLeaceMen.png')} style={styles.img} />
          </View>
          <View style={styles.infoMafia}>
            <Text style={styles.textPlaceMen}>Вы мирный житель</Text>
            <Text style={styles.text}>Мафия 5/5</Text>
            <Text style={styles.text}>Мирные жители 7/7</Text>
          </View>
          <View>
            <VectorIcon />
          </View>
        </View>
        <View style={styles.morning}>
          <Text style={styles.morningText}>Ночь</Text>
          <Text style={styles.morningText}>{/*<Timer/>*/}</Text>
        </View>
        <ScrollView>
          <View style={styles.peopleInfo}>
            {Players.map((item, index) => (
              <TouchableOpacity
                onPress={() => handlerActiveUser(item.id)}
                key={index}
                style={user.includes(item.id) ? styles.activeItem : styles.item}
              >
                <User user={item} />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <View style={{ paddingBottom: 38 }}>
          <LightButton
            size={{ width: 281, height: 48 }}
            labelStyle={styles.invitePlayers}
            label={'Ночь'}
            onPress={() => navigation.navigate('Ratings')}
          />
        </View>
      </View>
      <Index
        modalVisible={modalVisible}
        setIsVisible={setIsVisible}
        item={
          <View style={styles.modals}>
            <View sty style={styles.icon}>
              <VectorIcon />
            </View>
            <View style={styles.Texts}>
              <Text style={styles.night}>Ночь</Text>
              <Text style={styles.playerOut}>Игрок выбыл</Text>
            </View>
            <View style={styles.detailGray}>
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'black',
                  opacity: 0.5,
                  position: 'absolute',
                  zIndex: 1,
                }}
              ></View>
              <View
                style={{
                  zIndex: -4,
                }}
              >
                <User user={Players[0]} size={370} />
              </View>
            </View>
            <View style={styles.detailGray}>
              <Text style={styles.placeMan}>Мирный житель</Text>
            </View>
          </View>
        }
      />
    </ScreenMask>
  )
}
const styles = StyleSheet.create({
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
  common: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  youPlaceMen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: RH(36),
    paddingHorizontal: RW(20),
    borderBottomWidth: RW(1),
    borderBottomColor: GRAY,
    width: '100%',
  },
  infoMafia: {
    paddingRight: RW(90),
    paddingLeft: RW(10),
  },
  text: {
    ...font('inter', 14, WHITE, 24),
    fontWeight: '700',
    letterSpacing: 0.01,
  },
  textPlaceMen: {
    ...font('inter', 20, ICON, 24),
    fontWeight: '700',
    letterSpacing: 0.01,
    paddingBottom: RH(5.83),
  },
  morning: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: RH(15.84),
  },
  morningText: {
    ...font('inter', 24, WHITE, 24),
    fontWeight: '700',
    letterSpacing: 0.01,
    paddingVertical: RH(5),
  },
  peopleInfo: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderRadius: {
    borderRadius: RW(20),
    borderWidth: 1,
    borderColor: '#7DCE8A',
    paddingHorizontal: RW(10.29),
    margin: RW(10),
    paddingVertical: RH(20),
  },
  modals: {
    flexDirection: 'column',
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  Texts: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: WHITE,
  },
  night: {
    ...font('inter', 24, ICON, 24),
    fontWeight: '700',
    letterSpacing: 0.01,
    marginVertical: RH(24.33),
  },
  playerOut: {
    ...font('inter', 24, WHITE, 24),
    fontWeight: '700',
    letterSpacing: 0.01,
    marginBottom: RH(24.33),
  },
  detailGray: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeMan: {
    ...font('inter', 24, WHITE, 24),
    fontWeight: '700',
    letterSpacing: 0.01,
    marginTop: RH(46.72),
  },
})
export default PlayerOut
