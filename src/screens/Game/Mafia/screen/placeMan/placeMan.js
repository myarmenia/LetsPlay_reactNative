import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import VectorIcon from '@/assets/svgs/vectorSvg'
import { font, RH, RW } from '@/theme/utils'
import { GRAY, ICON, WHITE } from '@/theme/colors'
import LightButton from '@/assets/imgs/Button'

const PlaceMan = () => {
  const [choose, setChoose] = useState(false)
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

  useEffect(() => {
    let arr = data.map((item, index) => {
      item.boolean = false
      return { ...item }
    })
    setData(arr)
    console.log('arr data', arr)
  }, [choose])

  const handleSubmit = (ind) => {
    console.log(ind, 'id')
    const arr = data.map((item, index) => {
      if (ind === index) {
        if (!item.boolean) {
          item.boolean = true
        } else {
          item.boolean = false
        }
        setChoose(true)
      }
      return { ...item }
    })
    console.log('click', arr)
    setData(arr)
  }
  console.log(choose, 'choose')
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
            <Text style={styles.morningText}>Утро</Text>
            <Text style={styles.morningText}>{/*<Timer/>*/}</Text>
          </View>
          <View style={styles.peopleInfo}>
            {data.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                style={[item.boolean ? styles.borderRadius : styles.imgView]}
                onPress={() => handleSubmit(index)}
              >
                <Image source={item.img} style={styles.imgData} />
              </TouchableOpacity>
            ))}
          </View>
          <View style={{ paddingBottom: 38 }}>
            <LightButton
              size={{ width: 281, height: 48 }}
              labelStyle={styles.invitePlayers}
              label={'Ночь'}
              white={'white'}
              background={'#7DCE8A'}
              bgColor={'#4D7CFE'}
            />
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
})
export default PlaceMan
