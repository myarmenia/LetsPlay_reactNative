import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { LIGHT_LABEL, RADIO } from '@/theme/colors'
import { useState } from 'react'
import style from './style'
import LinearGradient from 'react-native-linear-gradient'
import { RH, RW } from '@/theme/utils'

const Radio = (props) => {
  const { list, margin, setFlag, type, data, setData } = props
  const [value, setValue] = useState('')
  const [checked, setChecked] = useState(true)
  const handleChange = (ev) => {
    setChecked(false)
    setValue(ev.id)
    if (data) {
      if (ev.text === 'Платно' && type === 'priceView') {
        setFlag(true)
      } else if (ev.text === 'Бесплатно' && type === 'priceView') {
        setFlag(false)
      }
      if (type === 'gender') {
        setData({ ...data, gender: ev.text })
      } else if (type === 'statusOrganizer') {
        setData({ ...data, statusOrganizer: ev.text })
      } else if (type === 'priceView') {
        setData({ ...data, price: ev.text })
      } else if (type === 'gameType') {
        setData({ ...data, gameValue: ev.text })
      } else if (type === 'prizeFund') {
        setData({ ...data, prizeFund: ev.text })
      }
    }
  }

  return list.map((ev) => (
    <TouchableOpacity
      style={{ ...style.radioBlock, marginLeft: margin }}
      onPress={() => {
        handleChange(ev)
      }}
      key={ev.id}
    >
      <LinearGradient
        colors={['#7DCE8A', '#4D7CFE']}
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 1.0, y: 0.0 }}
        style={{
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: RW(16),
          height: RW(16),
          borderRadius: RW(16),
        }}
      >
        {(checked && ev.checked) || value === ev.id ? (
          <LinearGradient
            colors={['#7DCE8A', '#4D7CFE']}
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.0, y: 0.0 }}
            style={{
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
              width: RW(10),
              height: RH(10),
              borderRadius: RW(10),
            }}
          ></LinearGradient>
        ) : (
          <View
            style={{
              borderWidth: 1,
              alignItems: 'center',
              backgroundColor: LIGHT_LABEL,
              justifyContent: 'center',
              width: RW(10),
              height: RH(10),
              borderRadius: RW(10),
            }}
          ></View>
        )}
      </LinearGradient>
      <Text style={style.radioText}>{ev.text}</Text>
    </TouchableOpacity>
  ))
}

export default Radio
