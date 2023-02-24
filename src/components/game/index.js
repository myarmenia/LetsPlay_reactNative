import React, { useState } from 'react'
import { Image, Pressable, Text, View, Animated } from 'react-native'
import { styles } from '@/components/game/style'
import BgGamesLiner from '@/assets/imgs/games/BgGamesLiner'
import Border from '@/assets/imgs/games/Border'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import { RH, RW } from '@/theme/utils'
import { _storageUrl } from '@/constants'

function Index(props) {
  const [active, setActive] = useState(false)
  const { game, pressable } = props
  const navigation = useNavigation()

  return (
    <Animated.View>
      <Pressable
        onPress={() => {
          if (pressable) {
            // console.log(game.navigateTo, game.info)
            setActive(true)
            game.navigateTo
              ? navigation.navigate(game.navigateTo, { screen: game.screenTwo, params: { game } })
              : null
            setActive(false)
          }
        }}
        style={styles.bgFon}
      >
        {active ? (
          <LinearGradient
            colors={['#7DCE8A', '#4D7CFE']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            useAngle={true}
            angle={105}
            angleCenter={{ x: 0.5, y: 0.5 }}
            style={{
              width: RW(335),
              height: RH(707),
              zIndex: -1,
              position: 'absolute',
              opacity: 0.5,
            }}
          ></LinearGradient>
        ) : null}

        <View style={{ ...styles.border, ...styles.leftBorder }}>
          <Border />
        </View>
        <View style={{ ...styles.border, ...styles.rightBorder }}>
          <Border />
        </View>
        <View style={styles.bgGamesLiner}>
          <BgGamesLiner />
        </View>
        <View style={styles.title}>
          <Image source={{ uri: _storageUrl + game?.img }} style={styles.image} />
        </View>
        <View style={styles.btn}>
          <LinearGradient
            colors={['#16A672', '#29CEEC', '#57E5FF', '#0649F5']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            useAngle={true}
            angle={105}
            angleCenter={{ x: 0.5, y: 0.5 }}
            style={{
              borderRadius: RW(5),
              alignItems: 'center',
              justifyContent: 'center',
              width: RW(191),
              height: RH(48),
              opacity: 0.9,
            }}
          >
            <Text style={styles.btnText}>{game?.name}</Text>
          </LinearGradient>
        </View>
      </Pressable>
    </Animated.View>
  )
}

export default Index
