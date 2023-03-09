import ScreenMask from '@/components/wrappers/screen'
import React, { useMemo } from 'react'
import { styles } from './styles'
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native'
import { _gamesData } from '../gamesDatas/gamesData'
import { RH, RW } from '@/theme/utils'
import Button from '@/assets/imgs/Button'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { _storageUrl } from '@/constants'

function GamesList() {
  const navigation = useNavigation()
  const { findedGames } = useSelector(({ teams }) => teams)
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
        {findedGames?.map((elm) => {
          return (
            <View style={styles.gameListContainer} key={elm._id}>
              <TouchableOpacity
                key={Math.random().toString()}
                style={styles.gameBox}
                onPress={() => passIdGameItem(elm._id)}
              >
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    style={{
                      width: RW(40),
                      height: RW(40),
                      resizeMode: 'contain',
                      marginTop: RH(10),
                    }}
                    source={{ uri: _storageUrl + elm.game?.img }}
                  />
                  <View style={styles.gameMiddleContainer}>
                    <View style={styles.gameItemTop}>
                      <Text style={styles.gameItemTopText}>
                        {`${new Date(elm?.updatedAt).toLocaleDateString()} ,Z`}
                      </Text>
                      <Text style={styles.gameItemTopText}>
                        {' '}
                        {`${new Date(elm?.updatedAt).toLocaleTimeString().slice(0, 5)} ,`}
                      </Text>
                      <Text style={styles.gameItemTopText}>xxxxx</Text>
                    </View>
                    <View style={styles.gameItemBottom}>
                      <Text style={styles.gameItemBottomText}>amiryan streen</Text>
                      <View style={{ ...styles.distanceBox, marginLeft: 'auto' }}>
                        <Text style={styles.gameItemBottomText}>1,6</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.line} />
                  <View style={styles.gameItemRight}>
                    <Text style={styles.gameItemRightText}>{elm.number_of_players_from}</Text>
                    <Text style={styles.gameItemRightText}>{elm.number_of_players_to}</Text>
                    {/* {elm.availablePlayers ? ( */}
                    <View style={styles.gameItemCircle}>
                      <Text style={styles.circleText}>{elm.players.length}</Text>
                    </View>
                    {/* ) : null} */}
                  </View>
                </View>
                <View style={styles.priceTextBlock}>
                  <View style={styles.horizontalLine} />
                  <Text
                    style={styles.gameItemPriceText}
                  >{`Сумма участия- ${elm.ticket_price}.`}</Text>
                </View>
              </TouchableOpacity>
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
