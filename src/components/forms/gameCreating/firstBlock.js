import React from 'react'
import { Text, View } from 'react-native'
import style from './style'
import DateTime from '@/services/DateTime'

const FirstBlock = (props) => {
  const { title, margin } = props
  return (
    <View style={{ marginTop: margin }}>
      <Text style={style.titles}>{title}</Text>
      <View style={style.dateBlock}>
        <DateTime type={'date'} />
        <DateTime type={'time'} />
      </View>
    </View>
  )
}
export default FirstBlock
