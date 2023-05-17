import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import Row from '@/components/wrappers/row'
import { _storageUrl } from '@/constants'
import { RH, RW, font } from '@/theme/utils'
import { ICON, WHITE } from '@/theme/colors'
import User from '@/components/User/user'
import SchemeUsers from './components/SchemeUsers'
import SchemeUsers2 from './components/SchemeUsers2'

const TeamSchemes = ({ route }) => {
  const [replacementPlayers, setReplacementPlayers] = useState([
    { x: 0, y: 0, small: false, ref: useRef(), inGame: false },
    { x: 0, y: 0, small: false, ref: useRef(), inGame: false },
    { x: 0, y: 0, small: false, ref: useRef(), inGame: false },
    { x: 0, y: 0, small: false, ref: useRef(), inGame: false },
    { x: 0, y: 0, small: false, ref: useRef(), inGame: false },
    { x: 0, y: 0, small: false, ref: useRef(), inGame: false },
    { x: 0, y: 0, small: false, ref: useRef(), inGame: false },
    { x: 0, y: 0, small: false, ref: useRef(), inGame: false },
    { x: 0, y: 0, small: false, ref: useRef(), inGame: false },
    { x: 0, y: 0, small: false, ref: useRef(), inGame: false },
  ])

  // const data = route.params
  const data = {
    players: ['64219136e3a868ee5e71a799'],
    schemaImg: '/game_schema_img/Group 1805.png',
    teamImg: '/team/image/a64e7664-9a78-42c3-bff7-b02a92c40c0a.jpg',
    teamName: 'Test2',
  }

  //
  // let containerLayout, imgLayout
  // const [containerLayout, setContainerLayout] = useState()
  // const [imageLayout, setImageLayout] = useState()

  return (
    <ScreenMask>
      <Row wrapper={styles.teamNameRow}>
        <Image style={styles.teamImg} source={{ uri: _storageUrl + data?.teamImg }} />
        <Text style={styles.teamName}>{data?.teamName}</Text>
      </Row>
      <View
        style={styles.schemaImgContainer}
        // onLayout={(e) => {
        //   setContainerLayout(e.nativeEvent.layout)
        // }}
      >
        <Image
          // onLayout={(e) => {
          //   setImageLayout(e.nativeEvent.layout)
          // }}
          style={styles.schemaImg}
          source={{ uri: _storageUrl + data?.schemaImg }}
        />
      </View>
      <View style={{ zIndex: 999 }}>
        <Text style={styles.playersTitle}>Запасные игроки:</Text>
        <SchemeUsers
          replacementPlayers={replacementPlayers}
          setReplacementPlayers={setReplacementPlayers}
          // dragUser={(user) => {
          //   setReplacementPlayers((prevState) => {
          //     c`onst updatedState = prevState.filter((item) => item != user)
          //     return updatedState
          //   })

          //   setDragedUser(user)
          //   setPlayingPlayers([...playingPlayers, user])
          // }}
        />

        {/* <DraggableComponent
          dragedUser={dragedUser}
          playingPlayers={playingPlayers}
          setPlayingPlayers={setPlayingPlayers}
        /> */}
      </View>
    </ScreenMask>
  )
}

export default TeamSchemes

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
