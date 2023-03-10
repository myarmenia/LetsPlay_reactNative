import ScreenMask from '@/components/wrappers/screen'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { styles } from '../gamesList/style'
import {ScrollView, View, Text, TouchableOpacity, Image} from 'react-native'
import GestureRecognizer from 'react-native-swipe-gestures'
import { _gamesData } from '../gamesDatas.js/gamesData'
import { RH, RW } from '@/theme/utils'
import Button from '@/assets/imgs/Button'
import { useNavigation } from '@react-navigation/native'

function GamesList() {
  const navigation = useNavigation()
  const [prop, setProp] = useState(null)
  const gameData = useMemo(() => {
    return _gamesData
  }, [])

  const passIdGameItem = (id) => {
    gameData.map((elem) => {
      elem.data.forEach((elm) => {
        if (elm.id === id) {
          navigation.navigate('GameItem', { item: { ...elm, clicked: true } })
        } else {
          return null
        }
      })
    })
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
              <View style={styles.gameListContainer} key={Math.random().toString()}>
                <Text style={styles.gameTitle}>{elm.title}</Text>
                <>
                  {elm.data.map((elem) => {
                    return (
                      <TouchableOpacity
                        key={Math.random().toString()}
                        style={styles.gameBox}
                        onPress={() => passIdGameItem(elem.id)}
                      >
                        <View style={{flexDirection: 'row'}}>
                        <Image style={{width: RW(40) , height: RW(40) ,resizeMode: 'contain' ,  marginTop: RH(10)}} source={elem?.image}/>
                        <View style={styles.gameMiddleContainer}>
                          <View style={styles.gameItemTop}>
                            <Text style={styles.gameItemTopText}>
                              {elem.date + ', '}
                            </Text>
                            <Text style={styles.gameItemTopText}>
                              {elem.time + ', '}
                            </Text>
                            <Text style={styles.gameItemTopText}>
                              {elem.location}
                            </Text>
                          </View>
                          <View style={styles.gameItemBottom}>
                            <Text style={styles.gameItemBottomText}>{elem.addres}</Text>
                            <View style={{...styles.distanceBox , marginLeft: 'auto'}}>
                              {elem.wave}
                              <Text style={styles.gameItemBottomText}>
                                {elem.distantion}
                              </Text>
                            </View>
                        </View>
                        </View>
                        <View style={styles.line} />
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
                        </View>
                        <View style={styles.priceTextBlock}><View style={styles.horizontalLine}/><Text style={styles.gameItemPriceText}>?????????? ??????????????-100 ??????. </Text></View>
                      </TouchableOpacity>
                    )
                  })}
                </>
              </View>
            )
          })}
        </GestureRecognizer>
        <View style={{ alignSelf: 'center', paddingTop: RH(99), paddingBottom: RH(48) }}>
          <Button label={'????????????????'} size={{ width: 375, height: 48 }} />
        </View>
      </ScrollView>
    </ScreenMask>
  )
}

export default GamesList
