import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import style from './style'
import { RH, RW } from '@/theme/utils'
import { _storageUrl } from '@/constants'

const EachCommand = ({ command, i }) => {
  const [back, setBack] = useState(false)
  return (
    <Pressable
      key={Math.random().toString()}
      onPressIn={() => setBack(true)}
      onPressOut={() => setBack(false)}
    >
      <View style={style.homeBlock}>
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
        <Pressable
          style={{
            zIndex: 1,
            marginLeft: RW(10),
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <View style={style.imageBlock}>
            <Image
              style={style.image}
              source={{ uri: _storageUrl + command.img }}
              resizeMode="cover"
            />
          </View>
          <View style={style.textBlock}>
            <Text style={style.text}>{command.name}</Text>
            <Text style={style.text}>{command.address_name}</Text>
            <Text style={style.text}>{command._id.substring(0, command._id.length - 1)}</Text>
          </View>
        </Pressable>
      </View>
    </Pressable>
  )
}

export default EachCommand
