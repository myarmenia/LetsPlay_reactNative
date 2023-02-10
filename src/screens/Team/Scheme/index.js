import React from 'react'
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native'
import User from '@/assets/imgs/user/user'
import { Players } from '@/assets/TestData'
import ScreenMask from '@/components/wrappers/screen'
import style from '@/screens/Team/Scheme/style'
import Draggable from 'react-native-draggable'
import { RH, RW } from '@/theme/utils'

const Scheme = (props) => {
  const { team, data } = props.route.params
  const matchPLayers = Players.filter((player) => {
    return player.id <= 6
  })
  return (
    <ScreenMask>
      <View style={style.teamBlock}>
        <Image style={style.image} source={{ uri: team.image }} />
        <Text style={style.title}>{team.name}</Text>
      </View>
      <ImageBackground
        source={data.playField}
        imageStyle={style.img}
        style={style.container}
      ></ImageBackground>
      <View>
        <Text style={style.text}>Запасные игроки:</Text>
      </View>

      {matchPLayers.map((ev) => (
        <Draggable
          key={ev.id}
          minX={RW(20)}
          minY={RH(140)}
          maxX={RW(375)}
          maxY={RH(655)}
          x={ev.x}
          y={ev.y}
        >
          <User
            size={50}
            user={Players[ev.id - 1]}
            onPressItem={{
              item: <User user={Players[ev.id - 1]} size={390} />,
              modalClose: false,
            }}
          />
        </Draggable>
      ))}
    </ScreenMask>
  )
}

const styles = StyleSheet.create({
  container: {
    height: RH(600),
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: RW(14),
    lineHeight: RW(24),
    fontWeight: 'bold',
  },
  box: {
    height: RH(150),
    width: RW(150),
    backgroundColor: 'blue',
    borderRadius: 5,
  },
})

export default Scheme
