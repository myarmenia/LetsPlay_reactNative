import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import Row from '@/components/wrappers/row'
import { _storageUrl } from '@/constants'
import { RH, RW, font } from '@/theme/utils'
import { ICON, WHITE } from '@/theme/colors'
import SchemeUsers from './components/SchemeUsers'
import { useNavigation } from '@react-navigation/native'

const TeamSchemes = ({ route }) => {
  const [replacementPlayers, setReplacementPlayers] = useState([
    { x: 0, y: 0, moveX: 0, moveY: 0, small: false, ref: useRef(), inGame: false },
    // { x: 0, y: 0, moveX: 0, moveY: 0, small: false, ref: useRef(), inGame: false },
    // { x: 0, y: 0, moveX: 0, moveY: 0, small: false, ref: useRef(), inGame: false },
    // { x: 0, y: 0, moveX: 0, moveY: 0, small: false, ref: useRef(), inGame: false },
    // { x: 0, y: 0, moveX: 0, moveY: 0, small: false, ref: useRef(), inGame: false },
    // { x: 0, y: 0, moveX: 0, moveY: 0, small: false, ref: useRef(), inGame: false },
    // { x: 0, y: 0, moveX: 0, moveY: 0, small: false, ref: useRef(), inGame: false },
    // { x: 0, y: 0, moveX: 0, moveY: 0, small: false, ref: useRef(), inGame: false },
    // { x: 0, y: 0, moveX: 0, moveY: 0, small: false, ref: useRef(), inGame: false },
    // { x: 0, y: 0, moveX: 0, moveY: 0, small: false, ref: useRef(), inGame: false },
    // { x: 0, y: 0, moveX: 0, moveY: 0, small: false, ref: useRef(), inGame: false },
    // { x: 0, y: 0, moveX: 0, moveY: 0, small: false, ref: useRef(), inGame: false },
  ])
  const [initialCordinates, setInitialCordinates] = useState({ x: 0, y1: 0, y2: 0 })
  const fieldSize = useRef()
  const data = {
    players: ['64219136e3a868ee5e71a799'],
    schemaImg: '/game_schema_img/Group 1805.png',
    teamImg: '/team/image/a64e7664-9a78-42c3-bff7-b02a92c40c0a.jpg',
    teamName: 'Test2',
  }
  const navigation = useNavigation()

  return (
    <ScreenMask>
      <View
        onLayout={(e) => {
          setInitialCordinates({
            ...initialCordinates,
            y1: e.nativeEvent.layout.height + RH(40), // height + marginTop
          })
        }}
        style={styles.teamNameRow}
      >
        <Image style={styles.teamImg} source={{ uri: _storageUrl + data?.teamImg }} />
        <Text style={styles.teamName}>{data?.teamName}</Text>
      </View>
      <View style={[styles.schemaImgContainer]}>
        <Image
          onLayout={(e) => {
            fieldSize.current = {
              width: (e.nativeEvent.layout.width / 100) * 81.5,
              height: (e.nativeEvent.layout.height / 100) * 85.1,
            }
            setInitialCordinates({
              ...initialCordinates,
              x: e.nativeEvent.layout.x + (e.nativeEvent.layout.width / 100) * 9.25,
              y2: e.nativeEvent.layout.y + (e.nativeEvent.layout.height / 100) * 7.45,
            })
          }}
          style={styles.schemaImg}
          source={{ uri: _storageUrl + data?.schemaImg }}
        />
      </View>

      <View style={{ zIndex: 999 }}>
        <Text style={styles.playersTitle}>Запасные игроки:</Text>
        <SchemeUsers
          initialCordinates={initialCordinates}
          fieldSize={fieldSize.current}
          replacementPlayers={replacementPlayers}
          setReplacementPlayers={setReplacementPlayers}
        />
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate('ViewSchemes', { replacementPlayers })
        }}
      >
        <Text style={{ fontSize: 20, color: '#fff', alignSelf: 'center', marginTop: 50 }}>
          View Schemes
        </Text>
      </Pressable>
    </ScreenMask>
  )
}

export default TeamSchemes

const styles = StyleSheet.create({
  teamNameRow: {
    flexDirection: 'row',
    alignSelf: 'center',
    height: RH(30),
  },
  teamImg: {
    height: RW(30),
    width: RW(30),
    borderRadius: RW(15),
  },
  teamName: {
    ...font('bold', 20, WHITE, 30),
    marginLeft: RW(20),
  },
  schemaImgContainer: {
    width: '100%',
    height: RH(516),
    marginTop: RH(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  schemaImg: {
    height: RW(516),
    width: RW(370),
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  playersTitle: {
    ...font('regular', 16, ICON, 24),
    marginTop: RH(28),
    marginBottom: RH(16),
  },
})
