import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import Row from '@/components/wrappers/row'
import { _storageUrl } from '@/constants'
import { RH, RW, font } from '@/theme/utils'
import { ICON, WHITE } from '@/theme/colors'
import SchemeUsers from './components/SchemeUsers'
import User from '@/components/User/user'

const ViewSchemes = ({ route }) => {
  const [replacementPlayers, setReplacementPlayers] = useState([
    {
      xPercent: 152.0899919128418,
      yPercent: 340.105,
    },
  ])
  const [initialCordinates, setInitialCordinates] = useState({ x: 0, y: 0 })
  const props = route.params.replacementPlayers

  const data = {
    players: ['64219136e3a868ee5e71a799'],
    schemaImg: '/game_schema_img/Group 1805.png',
    teamImg: '/team/image/a64e7664-9a78-42c3-bff7-b02a92c40c0a.jpg',
    teamName: 'Test2',
  }
  const fieldSize = useRef()

  useEffect(() => {
    setReplacementPlayers([{ xPercent: props[0].xPercent, yPercent: props[0].yPercent }])
  }, [props])
  return (
    <ScreenMask>
      <Row wrapper={styles.teamNameRow}>
        <Image style={styles.teamImg} source={{ uri: _storageUrl + data?.teamImg }} />
        <Text style={styles.teamName}>{data?.teamName}</Text>
      </Row>
      <View style={styles.schemaImgContainer}>
        {/* <Image
          onLayout={(e) => {
            // console.log('e width', (e.nativeEvent.layout.width / 100) * 81.5)
            // console.log('e height', (e.nativeEvent.layout.height / 100) * 85.1)
            fieldSize.current = {
              width: (e.nativeEvent.layout.width / 100) * 81.5,
              height: (e.nativeEvent.layout.height / 100) * 85.1,
            }
          }}
          style={styles.schemaImg}
          source={{ uri: _storageUrl + data?.schemaImg }}
        /> */}
        <ImageBackground
          onLayout={(e) => {
            // console.log('e width', (e.nativeEvent.layout.width / 100) * 81.5)
            // console.log('e height', (e.nativeEvent.layout.height / 100) * 85.1)
            fieldSize.current = {
              width: (e.nativeEvent?.layout?.width / 100) * 81.5,
              height: (e.nativeEvent?.layout?.height / 100) * 85.1,
            }

            setInitialCordinates({
              x: e.nativeEvent.layout.x + (e.nativeEvent.layout.width / 100) * 10.25,
              y:
                initialCordinates.y +
                e.nativeEvent.layout.y +
                (e.nativeEvent.layout.height / 100) * 7.85,
            })
          }}
          style={styles.schemaImg}
          source={{ uri: _storageUrl + data?.schemaImg }}
        >
          {replacementPlayers.map((user) => {
            return (
              <View
                style={{
                  paddingVertical: RW(21.05),
                  paddingHorizontal: RW(20.15),
                  position: 'absolute',
                  // backgroundColor: 'red',
                  // left: user.xPercent, // * (fieldSize.current?.width / 100)
                  // top: user.yPercent, //* (fieldSize.current?.height / 100)
                  // transform: [
                  //   {
                  //     translateX: user.xPercent + initialCordinates.x,
                  //   },
                  //   {
                  //     translateY: user.yPercent + initialCordinates.y,
                  //   },
                  // ],
                }}
              >
                <User size={RW(45)} />
              </View>
            )
          })}
        </ImageBackground>
      </View>
      <View style={{ zIndex: 999 }}>
        <Text style={styles.playersTitle}>Запасные игроки:</Text>
        {/* <SchemeUsers fieldSize={fieldSize.current} replacementPlayers={replacementPlayers} /> */}
      </View>
    </ScreenMask>
  )
}

export default ViewSchemes

const styles = StyleSheet.create({
  teamNameRow: {
    alignSelf: 'center',
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
  },
  playersTitle: {
    ...font('regular', 16, ICON, 24),
    marginTop: RH(28),
    marginBottom: RH(16),
  },
})
