import { StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { _storageUrl } from '@/constants'
import { RH, RW, font } from '@/theme/utils'
import { ICON, WHITE } from '@/theme/colors'
import SchemeUsers from './components/SchemeUsers'
import { useNavigation } from '@react-navigation/native'
import LightButton from '@/components/buttons/Button'
import FastImage from 'react-native-fast-image'
import { useSelector, useDispatch } from 'react-redux'
import { addSchemeToTeam } from '@/store/Slices/TeamSlice'

const TeamSchemes = ({ route }) => {
  const players = route.params
  const dispatch = useDispatch()
  const { savedTeam, createGameInfo } = useSelector(({ teams }) => teams)



  const [replacementPlayers, setReplacementPlayers] = useState(
    new Array(players?.length).fill({
      x: 0,
      y: 0,
      moveX: 0,
      moveY: 0,
      small: false,
      inGame: false,
      pageX: 0,
      pageY: 0,
    }),
  )
  const [initialCordinates, setInitialCordinates] = useState({ x: 0, y1: 0, y2: 0 })

  const fieldSize = useRef()

  const data = {
    Футбол: {
      schemaImg: require('../../../assets/images/football.png'),
      fieldSizePracnt: {
        width: 81.5,
        height: 85.1,
        x: 9.25,
        y: 7.45,
      },
    },
    Хоккей: {
      schemaImg: require('../../../assets/images/hockey.png'),
      fieldSizePracnt: {
        width: 100,
        height: 81,
        x: 0,
        y: 9.5,
      },
    },
    Баскетбол: {
      schemaImg: require('../../../assets/images/basketball.png'),
      fieldSizePracnt: {
        width: 87,
        height: 91,
        x: 0,
        y: 9.5,
      },
    },
    Волейбол: {
      schemaImg: require('../../../assets/images/volleyball.png'),
      fieldSizePracnt: {
        width: 87,
        height: 91,
        x: 0,
        y: 9.5,
      },
    },
    Пионербол: {
      schemaImg: require('../../../assets/images/pionerball.png'),
      fieldSizePracnt: {
        width: 86,
        height: 91,
        x: 0,
        y: 9.5,
      },
    },
  }

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
        <FastImage style={styles.teamImg} source={{ uri: _storageUrl + savedTeam?.img }} />
        <Text style={styles.teamName}>{savedTeam?.name}</Text>
      </View>
      <View style={[styles.schemaImgContainer]}>
        <FastImage
          onLayout={(e) => {
            fieldSize.current = {
              width: (e.nativeEvent.layout.width / 100) * data?.[createGameInfo.game.name]?.fieldSizePracnt.width,
              height:
                (e.nativeEvent.layout.height / 100) * data?.[createGameInfo.game.name]?.fieldSizePracnt.height,
            }
            setInitialCordinates({
              ...initialCordinates,
              x:
                e.nativeEvent.layout.x +
                (e.nativeEvent.layout.width / 100) * data?.[createGameInfo.game.name]?.fieldSizePracnt.x,
              y2:
                e.nativeEvent.layout.y +
                (e.nativeEvent.layout.height / 100) * data?.[createGameInfo.game.name]?.fieldSizePracnt.y,
            })
          }}
          style={styles.schemaImg}
          resizeMode="contain"
          source={data[createGameInfo.game.name].schemaImg}
        />
      </View>

      <View style={{ zIndex: 999 }}>
        <Text style={styles.playersTitle}>Запасные игроки:</Text>
        <SchemeUsers
          initialCordinates={initialCordinates}
          fieldSize={fieldSize.current}
          replacementPlayers={replacementPlayers}
          setReplacementPlayers={setReplacementPlayers}
          players={players}
        />
      </View>
      <LightButton
        onPress={() => {
          dispatch(addSchemeToTeam(replacementPlayers))
          navigation.navigate('EditTeamPlayers')
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
    marginTop: RH(10)
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
