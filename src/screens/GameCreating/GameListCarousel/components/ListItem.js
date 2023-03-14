import React, { useState } from 'react'
import { Image, StyleSheet, Text, View, Animated, Pressable } from 'react-native'
// import { styles } from '@/screens/GameCreatingScreens/GameListCarousel/components/style'
import BgGamesLiner from '@/assets/imgs/games/BgGamesLiner'
import Border from '@/assets/imgs/games/Border'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import { RH, RW, font } from '@/theme/utils'
import { _storageUrl } from '@/constants'
import { BLACK, WHITE } from '@/theme/colors'

function ListItem({ game, pressable, qrGame }) {
  const [active, setActive] = useState(false)
  const [back, setBack] = useState(false)
  const navigation = useNavigation()
  return (
    <Animated.View>
      <Pressable
        onPressIn={() => setBack(true)}
        onPressOut={() => setBack(false)}
        onPress={() => {
          if (pressable) {
            setActive(true)
            if (qrGame) {
              navigation.navigate('MafiaNavigation', { qrGame: qrGame })
            } else {
              game.name ? navigation.navigate('GameCreating', { params: { game } }) : null
            }

            setActive(false)
          }
        }}
        style={styles.bgFon}
      >
        {back ? (
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
        ) : (
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
              opacity: 0.1,
            }}
          ></LinearGradient>
        )}

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

const styles = StyleSheet.create({
  bgFon: {
    marginLeft: 'auto',
    marginRight: 'auto',
    // marginTop: RH(40),
    width: RW(335),
    height: RH(707),
    borderWidth: RW(2),
    borderRadius: RW(20),
    borderColor: WHITE,
    overflow: 'hidden',
    zIndex: -1,
    backgroundColor: 'rgba(217, 217, 217, 0.2)',
    paddingBottom: RH(80),
  },
  btnText: {
    ...font('bold', 20, BLACK),
  },
  border: {
    position: 'absolute',
    zIndex: 1,
  },
  leftBorder: {
    top: RH(13.5),
    left: RW(12.87),
  },
  rightBorder: {
    bottom: RH(13.5),
    right: RW(12.87),
    transform: [{ rotate: '180deg' }],
  },
  bgGamesLiner: {
    position: 'absolute',
  },
  title: {
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: 1,
    marginTop: RH(190),
  },
  btn: {
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: 10,
  },

  image: {
    width: RW(300),
    height: RH(300),
    resizeMode: 'contain',
  },
})

export default ListItem
