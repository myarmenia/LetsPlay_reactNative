import React from 'react'
import { Text, TextInput, View } from 'react-native'
import style from './style'
import { ICON } from '@/theme/colors'

function InputBlock(props) {
  const { text, placeholder } = props
  return (
    <View style={style.inputBlock}>
      <Text style={style.inputTitle}>{text}</Text>
      <TextInput style={style.input} placeholder={placeholder} placeholderTextColor={ICON} />
    </View>
  )
}

export default InputBlock
