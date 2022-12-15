import React from 'react'
import { Text, View } from 'react-native'
import style from './style'
import Count from '@/components/inputs/count'

const SecondBlock = props => {
  const { title } = props
  return (
    <View>
      <Text style={style.titles}>{title}</Text>
      <View style={style.countBlock}>
        <Count placeholder={'От'} />
        <View style={style.dash}></View>
        <Count placeholder={'До'} />
      </View>
    </View>
  )
}
export default SecondBlock
