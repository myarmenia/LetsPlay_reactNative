import React from 'react'
import { Text, View } from 'react-native'
import style from './style'
import Count from '@/components/inputs/count'

const SecondBlock = ({ title, type }) => {
  return (
    <View>
      <Text style={style.titles}>{title}</Text>
      <View style={style.countBlock}>
        <Count type={type} countType={'from'} placeholder={'От'} />
        <View style={style.dash}></View>
        <Count type={type} countType={'to'} placeholder={'До'} />
      </View>
    </View>
  )
}
export default SecondBlock
