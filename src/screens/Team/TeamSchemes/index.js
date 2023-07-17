import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import Row from '@/components/wrappers/row'
import { _storageUrl } from '@/constants'
import { RH, RW, font } from '@/theme/utils'
import { ICON, WHITE } from '@/theme/colors'
import SchemeUsers from './components/SchemeUsers'
import { useNavigation } from '@react-navigation/native'
import LightButton from '@/assets/imgs/Button'
import FastImage from 'react-native-fast-image'

const TeamSchemes = ({ route }) => {
  const [replacementPlayers, setReplacementPlayers] = useState([
    {
      x: 0,
      y: 0,
      moveX: 0,
      moveY: 0,
      small: false,
      ref: useRef(),
      inGame: false,
      pageX: 0,
      pageY: 0,
    },
    {
      x: 0,
      y: 0,
      moveX: 0,
      moveY: 0,
      small: false,
      ref: useRef(),
      inGame: false,
      pageX: 0,
      pageY: 0,
    },
    {
      x: 0,
      y: 0,
      moveX: 0,
      moveY: 0,
      small: false,
      ref: useRef(),
      inGame: false,
      pageX: 0,
      pageY: 0,
    },
    {
      x: 0,
      y: 0,
      moveX: 0,
      moveY: 0,
      small: false,
      ref: useRef(),
      inGame: false,
      pageX: 0,
      pageY: 0,
    },
    {
      x: 0,
      y: 0,
      moveX: 0,
      moveY: 0,
      small: false,
      ref: useRef(),
      inGame: false,
      pageX: 0,
      pageY: 0,
    },
    {
      x: 0,
      y: 0,
      moveX: 0,
      moveY: 0,
      small: false,
      ref: useRef(),
      inGame: false,
      pageX: 0,
      pageY: 0,
    },
    {
      x: 0,
      y: 0,
      moveX: 0,
      moveY: 0,
      small: false,
      ref: useRef(),
      inGame: false,
      pageX: 0,
      pageY: 0,
    },
    {
      x: 0,
      y: 0,
      moveX: 0,
      moveY: 0,
      small: false,
      ref: useRef(),
      inGame: false,
      pageX: 0,
      pageY: 0,
    },
    {
      x: 0,
      y: 0,
      moveX: 0,
      moveY: 0,
      small: false,
      ref: useRef(),
      inGame: false,
      pageX: 0,
      pageY: 0,
    },
    {
      x: 0,
      y: 0,
      moveX: 0,
      moveY: 0,
      small: false,
      ref: useRef(),
      inGame: false,
      pageX: 0,
      pageY: 0,
    },
  ])
  const [initialCordinates, setInitialCordinates] = useState({ x: 0, y1: 0, y2: 0 })
  const fieldSize = useRef()
  const data = {
    players: ['64219136e3a868ee5e71a799'],
    footbal: {
      schemaImg: '/game_schema_img/Group 1805.png',
      fieldSizePracnt: {
        width: 81.5,
        height: 85.1,
        x: 9.25,
        y: 7.45,
      },
    },
    basketball: {
      schemaImg: '/game_schema_img/Group 1808.png',
      fieldSizePracnt: {
        width: 87,
        height: 91,
        x: 6.5,
        y: 4.5,
      },
    },
    teamImg: '/team/image/a64e7664-9a78-42c3-bff7-b02a92c40c0a.jpg',
    teamName: 'Test2',
  }
  const gameName = 'basketball'
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
        <FastImage style={styles.teamImg} source={{ uri: _storageUrl + data?.teamImg }} />
        <Text style={styles.teamName}>{data?.teamName}</Text>
      </View>
      <View style={[styles.schemaImgContainer]}>
        <FastImage
          onLayout={(e) => {
            console.log(e.nativeEvent.layout.height)
            fieldSize.current = {
              width: (e.nativeEvent.layout.width / 100) * data?.[gameName]?.fieldSizePracnt.width,
              height:
                (e.nativeEvent.layout.height / 100) * data?.[gameName]?.fieldSizePracnt.height,
            }
            setInitialCordinates({
              ...initialCordinates,
              x:
                e.nativeEvent.layout.x +
                (e.nativeEvent.layout.width / 100) * data?.[gameName]?.fieldSizePracnt.x,
              y2:
                e.nativeEvent.layout.y +
                (e.nativeEvent.layout.height / 100) * data?.[gameName]?.fieldSizePracnt.y,
            })
          }}
          style={styles.schemaImg}
          resizeMode='contain'
          source={{ uri: _storageUrl + data?.[gameName]?.schemaImg }}
        />
        {/* <View
          style={{
            backgroundColor: 'red',
            width: (337.33331298828125 / 100) * data?.[gameName]?.fieldSizePracnt.width,
            height: (470 / 100) * data?.[gameName]?.fieldSizePracnt.height,
            position: 'absolute',
            alignSelf: 'center',
          }}
        /> */}
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
      <LightButton
        onPress={() => {
          navigation.navigate('ViewSchemes', { replacementPlayers })
        }}
        style={{ alignSelf: 'flex-end', position: 'absolute', bottom: RH(30) }}
        label="Сохранить"
      />
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
    justifyContent: 'center',
  },
  playersTitle: {
    ...font('regular', 16, ICON, 24),
    marginTop: RH(28),
    marginBottom: RH(16),
  },
})
