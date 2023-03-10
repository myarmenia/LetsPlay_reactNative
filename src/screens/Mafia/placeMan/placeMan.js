import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import VectorIcon from '@/assets/svgs/vectorSvg'
import { font, RH, RW } from '@/theme/utils'
import { BACKGROUND, GRAY, ICON, WHITE } from '@/theme/colors'
import LightButton from '@/assets/imgs/Button'
import { useNavigation } from '@react-navigation/native'
import { Players } from '@/assets/TestData'
import User from '@/components/User/user'

const PlaceMan = () => {
  const navigation = useNavigation()
  const [user, setUser] = useState([])

  const handlerActiveUser = (id) => {
    if (user.includes(id)) {
      const temp = user.filter((item, i) => item !== id)
      setUser(temp)
    } else {
      setUser([...user, id])
    }
  }

  return (
    <ScreenMask>
      <View>
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

          <Text style={styles.morningText}>Утро</Text>
          <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              {Players.map((item, i) => (
                <TouchableOpacity
                  onPress={() => handlerActiveUser(item.id)}
                  key={i}
                  style={user.includes(item.id) ? styles.activeItem : styles.item}
                >
                  <User user={item} />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          <View style={{ marginTop: RH(38) }}>
            <LightButton
              size={{ width: RW(281), height: RH(48) }}
              labelStyle={styles.invitePlayers}
              label={'Ночь'}
              white={'white'}
              background={'#7DCE8A'}
              bgColor={'#4D7CFE'}
              onPress={() => navigation.navigate('Vote')}
            />
          </View>
        </View>
      </View>
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
  container: {
    backgroundColor: BACKGROUND,
    borderRadius: 10,
    width: RW(330),
    height: RH(600),
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
  img: {
    width: RW(46),
    height: RW(55),
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
    paddingVertical: RH(15),
  },
  imgView: {
    paddingHorizontal: RW(10.29),
    margin: RW(10),
    paddingVertical: RH(20),
  },
  imgData: {
    width: 76,
    height: 150,
    resizeMode: 'contain',
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
})
export default PlaceMan
