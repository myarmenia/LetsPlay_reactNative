import ScreenMask from '@/components/wrappers/screen'
import React, { useEffect, useMemo } from 'react'
import { styles } from './styles'
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native'
import { _gamesData } from '../gamesDatas/gamesData'
import { RH, RW } from '@/theme/utils'
import Button from '@/assets/imgs/Button'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { _storageUrl } from '@/constants'
import Wave from '@/assets/svgs/wave'

function GamesList() {
  const navigation = useNavigation()
  const { findedGames } = useSelector(({ teams }) => teams)

  const passIdGameItem = id => {
    findedGames.map(elem => {
      elem.data.forEach(elm => {
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
        {findedGames?.map(elm => {
          return (
            <View style={styles.gameItemContainer}>
              <View style={styles.image}>
                <Image
                  style={{
                    width: RW(50),
                    height: RH(50),
                    resizeMode: 'contain',
                    borderRadius: RW(30),
                  }}
                  source={{ uri: _storageUrl + elm.game?.img }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '92%',
                  width: '60%',
                  justifyContent: 'space-evenly',
                }}
              >
                <Text style={styles.midText}>
                  {new Date(elm?.updatedAt).toLocaleDateString()},{' '}
                  {new Date(elm?.updatedAt).toLocaleTimeString().slice(0, 5)}, Пресненская наб. 25
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    // alignSelf: 'center',
                    width: '100%',
                    alignItems: 'center',
                    // backgroundColor: '#ccc',
                    justifyContent: 'space-between',
                  }}
                >
                  <View style={styles.horizontalLine}></View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '30%',
                    }}
                  >
                    <Wave />
                    <Text style={styles.midText}>1.6 км</Text>
                  </View>
                </View>
                <Text style={styles.priceText}>{`Сумма участия- ${elm.ticket_price}.`}</Text>
              </View>
              <View style={styles.line}></View>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: '80%',
                  justifyContent: 'space-evenly',
                }}
              >
                <View>
                  <Text style={styles.playersText}>Игроки</Text>
                  <Text style={styles.playersText}>
                    {elm.number_of_players_from}-{elm.number_of_players_to}
                  </Text>
                </View>
                <View style={styles.countCircle}>
                  <Text style={styles.countOfPlayersText}>{elm.players.length}</Text>
                </View>
              </View>
            </View>
          )
        })}
        <View style={{ alignSelf: 'center', paddingTop: RH(99), paddingBottom: RH(48) }}>
          <Button label={'Обновить'} size={{ width: 375, height: 48 }} />
        </View>
      </ScrollView>
    </ScreenMask>
  )
}

export default GamesList
