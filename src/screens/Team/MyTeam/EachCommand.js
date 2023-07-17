import { Pressable, Text, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import style from './style'
import { RH, RW } from '@/theme/utils'
import { _storageUrl } from '@/constants'
import { useNavigation } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'

const EachCommand = ({ command, data }) => {
  const [back, setBack] = useState(false)
  const navigation = useNavigation()
  return (
    <Pressable
      style={style.homeBlock}
      onPressIn={() => {
        setBack(true)
      }}
      onPressOut={() => {
        if (data?.fromTournament) {
          navigation.replace('TournamentNavigator', {
            screen: 'SelectMembers',
            params: { command: command, data: data },
          })
          setBack(false)
        } else {
          setBack(false)
          navigation.navigate('MyTeamInfo', { command })
        }
      }}
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
            width: RW(395),
            height: RH(111),
            zIndex: -1,
            position: 'absolute',
            opacity: 0.5,
            borderRadius: RW(10),
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
            width: RW(395),
            height: RH(111),
            zIndex: -1,
            position: 'absolute',
            opacity: 0.3,
            borderRadius: RW(10),
          }}
        ></LinearGradient>
      )}
      <View
        style={{
          zIndex: 1,
          marginLeft: RW(10),
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View style={style.imageBlock}>
          <FastImage
            style={style.image}
            source={{ uri: _storageUrl + command?.img }}
            resizeMode="cover"
          />
        </View>
        <View style={style.textBlock}>
          <Text style={style.text}>{command.name}</Text>
          <Text style={style.text}>{command.address_name}</Text>
          <Text style={style.text}>{command.id}</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default EachCommand
