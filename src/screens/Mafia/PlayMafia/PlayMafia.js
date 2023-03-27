import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import VectorIcon from '@/assets/svgs/vectorSvg'
import { font, RH, RW } from '@/theme/utils'
import { GRAY, ICON, WHITE } from '@/theme/colors'
import LightButton from '@/assets/imgs/Button'
import { useNavigation } from '@react-navigation/native'
import User from '@/components/User/user'
import MafiaModal from './components/MafiaModal'
import { useDispatch, useSelector } from 'react-redux'
import { _storageUrl } from '@/constants'
import Time from './components/Time'
import MafiaLoader from './components/MafiaLoader'
import { setNight } from '@/store/Slices/MafiaSlice'

const PlayMafia = () => {
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)
  const { mafiaRole, players, voteTime, roles, mafiaUsersId, mafiasCount, civiliansCount, night } =
    useSelector(({ mafia }) => mafia)
  const dispatch = useDispatch()
  let mafiaImgPath = roles.find((item) => (item.name = 'Мафия'))?.img

  useEffect(() => {
    setModalVisible(true)
  }, [])

  return (
    <ScreenMask>
      <MafiaLoader />
      <View style={styles.common}>
        <View style={styles.youPlaceMen}>
          <View>
            <Image source={{ uri: _storageUrl + mafiaRole?.img }} style={styles.img} />
          </View>
          <View style={styles.infoMafia}>
            <Text style={styles.textPlaceMen}>Вы {mafiaRole?.name?.toLowerCase()}</Text>
            <Text style={styles.text}>Мафия {mafiasCount}</Text>
            <Text style={styles.text}>Мирные жители {civiliansCount}</Text>
          </View>
          <Pressable onPress={() => setModalVisible(true)}>
            <VectorIcon />
          </Pressable>
        </View>
        <Text style={styles.morningText}>{night ? 'Ночь' : 'Утро'}</Text>
        <Time voteTime={voteTime} />
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: 20,
            }}
          >
            {players?.map((item, i) => (
              <View style={{ margin: RW(10) }} key={i}>
                {/* {console.log(deviceName, players?.user)} */}
                {mafiaUsersId.find((id) => id == item) ? (
                  <Image style={styles.mafiaImg} source={{ uri: _storageUrl + mafiaImgPath }} />
                ) : null}
                <User size={90} user={item} />
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={{ marginTop: RH(38) }}>
          <LightButton
            size={{ width: RW(281), height: RH(48) }}
            labelStyle={styles.invitePlayers}
            label={!night ? 'Ночь' : 'Утро'}
            white={'white'}
            background={'#7DCE8A'}
            bgColor={'#4D7CFE'}
            onPress={() => {
              dispatch(setLoader(true))
              dispatch(setNight(!night))
            }}
          />
        </View>
      </View>
      <MafiaModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
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
    paddingBottom: RH(70),
  },
  container: {
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
    resizeMode: 'contain',
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
  mafiaImg: {
    width: RW(25),
    height: RW(25),
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: 999,
    top: RW(-3),
    left: RW(-3),
  },
})
export default PlayMafia
