import { Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GameItemBgSvg from '../assets/GameItemBgSvg'
import { RH, RW, font } from '@/theme/utils'
import Row from '@/components/wrappers/row'
import { _storageUrl } from '@/constants'
import { WHITE } from '@/theme/colors'

const CalendarGameItem = ({ img, name, startDate, onPress }) => {
  const dateTime = new Date(startDate).toTimeString().substring(0, 5)
  return (
    <Pressable
      onPress={onPress}
      style={{
        height: RH(58),
        width: '100%',
        alignSelf: 'center',
        marginVertical: RH(5),
      }}
    >
      <View style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <GameItemBgSvg />
      </View>
      <Row
        wrapper={{
          width: '80%',
          height: '100%',
          paddingHorizontal: Platform.OS == 'android' ? RW(10) : 0,
          justifyContent: 'space-between',
          position: 'absolute',
          alignSelf: 'center',
        }}
      >
        <Row>
          <Image
            style={{ height: RW(30), width: RW(30), resizeMode: 'contain', marginRight: RW(20) }}
            source={{ uri: _storageUrl + img }}
          />
          <Text style={{ ...font('bold', 16, WHITE) }}>{name}</Text>
        </Row>
        <Text style={{ ...font('bold', 16, WHITE) }}>{dateTime}</Text>
      </Row>
    </Pressable>
  )
}

export default CalendarGameItem

const styles = StyleSheet.create({})
