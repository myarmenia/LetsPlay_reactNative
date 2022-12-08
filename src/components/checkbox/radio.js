import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { LIGHT_LABEL, RADIO } from '@/theme/colors'
import { useState } from 'react'
import style from './style'
import { useEffect } from '@types/react'

const Radio = (props) => {
  const { data, margin, setFlag, type } = props
  const [value, setValue] = useState('')
  return data.map((ev) => (
    <TouchableOpacity
      style={{ ...style.radioBlock, marginLeft: margin }}
      onPress={() => {
        setValue(ev[0])
        if (ev[1] === 'Платно' && type === 'priceView') {
          setFlag(true)
        } else if (ev[1] === 'Бесплатно' && type === 'priceView') {
          setFlag(false)
        }
      }}
      key={ev[0]}
    >
      <View style={style.radio}>
        <View
          style={
            value === ev[0]
              ? { ...style.circle, backgroundColor: RADIO }
              : { ...style.circle, backgroundColor: LIGHT_LABEL }
          }
        ></View>
      </View>
      <Text style={style.radioText}>{ev[1]}</Text>
    </TouchableOpacity>
  ))
}

export default Radio
