import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import VectorIcon from '@/assets/svgs/vectorSvg'
import { font, RH, RW } from '@/theme/utils'
import { GRAY, ICON, WHITE } from '@/theme/colors'
import LightButton from '@/assets/imgs/Button'
import Index from '@/components/modal'
import { useNavigation } from '@react-navigation/native'

const PlayerOut = () => {
  const [modalVisible, setIsVisible] = useState(true)
  const [data, setData] = useState([
    { id: 1, img: require('@/assets/imgs/detail.png'), boolean: false },
    { id: 2, img: require('@/assets/imgs/detail.png'), boolean: false },
    { id: 3, img: require('@/assets/imgs/detail.png'), boolean: false },
    { id: 4, img: require('@/assets/imgs/detail.png'), boolean: false },
    { id: 5, img: require('@/assets/imgs/detail.png'), boolean: false },
    { id: 6, img: require('@/assets/imgs/detail.png'), boolean: false },
    { id: 7, img: require('@/assets/imgs/detail.png'), boolean: false },
    { id: 8, img: require('@/assets/imgs/detail.png'), boolean: false },
    { id: 9, img: require('@/assets/imgs/detail.png'), boolean: false },
    { id: 10, img: require('@/assets/imgs/detail.png'), boolean: false },
    { id: 11, img: require('@/assets/imgs/detail.png'), boolean: false },
    { id: 12, img: require('@/assets/imgs/detail.png'), boolean: false },
  ])
  const navigation = useNavigation()

  return (
    <ScreenMask>
      <ScrollView>
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
          <View style={styles.peopleInfo}>
            {data.map((item, index) => (
              <TouchableOpacity key={item.id} style={styles.imgView}>
                <Image source={item.img} style={styles.imgData} />
              </TouchableOpacity>
            ))}
          </View>
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
                <Image source={require('@/assets/imgs/GrayDetail.png')} />
              </View>
              <View style={styles.detailGray}>
                <Text style={styles.placeMan}>Мирный житель</Text>
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
    paddingVertical: RH(5),
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
