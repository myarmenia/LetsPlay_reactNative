import React from 'react'
import style from './style'
import { Text, View } from 'react-native'
import DateTime from '@/services/DateTime'

function DateBlock(props) {
  return (
    <View style={style.inputBlock}>
      <Text style={style.inputTitle}>Дата рождения:</Text>
      <DateTime type={'date'} />
    </View>
  )
}

export default DateBlock
