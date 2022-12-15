import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import style from './style'
import Radio from '@/components/checkbox/radio'
import { RW } from '@/theme/utils'

const ThirdBlock = props => {
  const { title, type, data, setPriceInputView, setFlag } = props
  return (
    <View>
      <Text style={{ ...style.titles, marginBottom: RW(23) }}>{title}</Text>
      <Radio setFlag={setFlag} type={type} margin={RW(30)} data={data} />
    </View>
  )
}
export default ThirdBlock
