import ScreenMask from '@/components/wrappers/screen'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { styles } from './styles'
import { ScrollView, View, Text, TouchableOpacity, Image, Pressable } from 'react-native'
import { _gamesData } from '../gamesDatas/gamesData'
import { RH, RW } from '@/theme/utils'
import Button from '@/assets/imgs/Button'
import { useNavigation, useScrollToTop } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { _storageUrl } from '@/constants'
import Wave from '@/assets/svgs/wave'
import LinearGradient from 'react-native-linear-gradient'
import LightButton from '@/assets/imgs/Button'

function GamesList() {
  const navigation = useNavigation()
  const { findedGames } = useSelector(({ teams }) => teams)
  const [forUpdate, setForUpdate] = useState(false)
  const ref = useRef(null)
  const scrollToTop = () =>
    ref.current?.scrollTo({
      y: 10,
      animated: true,
    })
  const passIdGameItem = id => {
    findedGames.map(elem => {
      // elem.data.forEach(elm => {
      if (elem._id === id) {
        navigation.navigate('GameItem', { item: { ...elem, clicked: true } })
      } else {
        return null
      }
      // })
    })
  }

  const EatchItem = ({ elm }) => {
    const [back, setBack] = useState(false)
    return (
      <Pressable
        style={styles.gameItemContainer}
        onPressIn={() => setBack(true)}
        onPressOut={() => setBack(false)}
        onPress={() => passIdGameItem(elm._id)}
      >
        {!back ? (
          <LinearGradient
            colors={['#7DCE8A', '#4D7CFE']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 0 }}
            useAngle={true}
            angle={105}
            angleCenter={{ x: 0.5, y: 0.5 }}
            style={{
              width: '100%',
              height: '100%',
              zIndex: -1,
              alignSelf: 'center',
              opacity: 0.3,
              position: 'absolute',
              borderRadius: RW(10),
            }}
          ></LinearGradient>
        ) : (
          <LinearGradient
            colors={['#7DCE8A', '#4D7CFE']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 0 }}
            useAngle={true}
            angle={105}
            angleCenter={{ x: 0.5, y: 0.5 }}
            style={{
              width: '100%',
              height: '100%',
              zIndex: -1,
              alignSelf: 'center',
              position: 'absolute',
              opacity: 0.5,
              borderRadius: RW(10),
            }}
          ></LinearGradient>
        )}
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
            width: '57%',
            marginHorizontal: RW(20),
            justifyContent: 'space-evenly',
          }}
        >
          <Text style={styles.midText}>
            {new Date(elm?.updatedAt).toLocaleDateString()},{' '}
            {new Date(elm?.updatedAt).toLocaleTimeString().slice(0, 5)}, {elm?.address_name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              // alignSelf: 'center',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View style={styles.horizontalLine}></View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '28%',
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
      </Pressable>
    )
  }

  return (
    <ScreenMask>
      <ScrollView
        style={{ flex: 1, paddingTop: RH(15) }}
        showsVerticalScrollIndicator={false}
        ref={ref}
      >
        {!findedGames.length && <Text style={styles.topLoading}>Загрузка...</Text>}
        {/* <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
          }}
        > */}
        {findedGames?.map((elm, i) => {
          return <EatchItem elm={elm} key={i} />
        })}
        {/* </View> */}
        {findedGames.length && (
          <View style={{ alignSelf: 'center', paddingTop: RH(99), paddingBottom: RH(48) }}>
            <LightButton
              label={'Обновить'}
              size={{ width: 375, height: 48 }}
              onPress={() => {
                setForUpdate(!forUpdate), scrollToTop()
              }}
            />
          </View>
        )}
      </ScrollView>
    </ScreenMask>
  )
}

export default GamesList
