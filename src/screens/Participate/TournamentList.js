import ScreenMask from '@/components/wrappers/screen'
import React, { useMemo, useState } from 'react'
import { styles } from '../Game/gamesList/style'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import GestureRecognizer from 'react-native-swipe-gestures'
import { _gamesData } from '../Game/gamesDatas.js/gamesData'
import { RH, RW } from '@/theme/utils'
import Button from '@/assets/imgs/Button'
import { useNavigation } from '@react-navigation/native'

function GamesList() {
  const navigation = useNavigation()
  const [prop, setProp] = useState()
  const gameData = useMemo(() => {
    return _gamesData
  }, [])
  const handleSubmit = (elm) => {
    if (elm !== undefined) {
      setProp({ ...elm, clicked: true })
    } else {
      return null
    }
  }
  const passIdGameItem = (id) => {
    gameData.map((elem) =>
      elem.data.map((elm) => {
        if (elm.id === id) {
          return (
            { ...elm, clicked: true },
            // console.log(elem),
            // if (elm !== undefined) {
            setProp({ ...elm, clicked: true }),
            navigation.navigate('TournamentTicket')
            // }
          )
        } else {
          return null
        }
      }),
    )
  }
  return (
    <ScreenMask>
      <ScrollView>
        <GestureRecognizer
          onSwipeLeft={(state) => navigation.goBack()}
          style={{
            flex: 1,
          }}
        >
          {gameData.map((elm) => {
            return (
              <View style={styles.gameListContainer} key={elm.id}>
                <Text style={styles.gameTitle}>{elm.title}</Text>
                <>
                  {elm.data.map((elem) => {
                    return (
                      <TouchableOpacity
                        key={elem.id + 10}
                        style={styles.gameBox}
                        onPress={() => {
                          passIdGameItem(elem.id)
                        }}
                      >
                        <View style={styles.iconComponent}>{elem?.component}</View>
                        <View style={styles.gameMiddleContainer}>
                          <View style={styles.gameItemTop}>
                            <Text style={styles.gameItemTopText}>
                              {[elem.date, elem.time, elem.location]}
                            </Text>
                          </View>
                          <View style={styles.gameItemBottom}>
                            <Text style={styles.gameItemTopText}>{elem.addres}</Text>
                            <View style={styles.distanceBox}>
                              {elem.wave}
                              <Text style={[styles.gameItemTopText, { paddingLeft: RW(10) }]}>
                                {elem.distantion}
                              </Text>
                            </View>
                          </View>
                          <View style={styles.line} />
                        </View>
                        <View style={styles.gameItemRight}>
                          <Text style={styles.gameItemRightText}>{elem.playersText}</Text>
                          <Text style={styles.gameItemRightText}>{elem.players}</Text>
                          {elem.availablePlayers ? (
                            <View style={styles.gameItemCircle}>
                              <Text style={styles.circleText}>{elem.availablePlayers}</Text>
                            </View>
                          ) : (
                            <Text style={styles.playersIn}>{elem.playersIn}</Text>
                          )}
                        </View>
                      </TouchableOpacity>
                    )
                  })}
                </>
              </View>
            )
          })}
        </GestureRecognizer>
        <View style={{ alignSelf: 'center', paddingTop: RH(99), paddingBottom: RH(48) }}>
          <Button label={'Обновить'} size={{ width: 375, height: 48 }} />
        </View>
      </ScrollView>
    </ScreenMask>
  )
}

export default GamesList
