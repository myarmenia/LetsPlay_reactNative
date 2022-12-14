import React from 'react'
import { Text, View } from 'react-native'
import style from './style'
import Count from '@/components/inputs/count'

const SecondBlock = props => {
  const { title, data, setData, type } = props
  return (
    <View>
      <Text style={style.titles}>{title}</Text>
      <View style={style.countBlock}>
        <Count type={type} countType={'from'} data={data} setData={setData} placeholder={'От'} />
        <View style={style.dash}></View>
        <Count type={type} countType={'to'} data={data} setData={setData} placeholder={'До'} />
      </View>
    </View>
  )
}
export default SecondBlock
