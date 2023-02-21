import React from 'react'
import { Text, TextInput, View } from 'react-native'
import style from './style'
import { ICON } from '@/theme/colors'

function InputBlock(props) {
  const { text, placeholder, disable = true } = props
  return (
    <View style={style.inputBlock}>
      <Text style={style.inputTitle}>{text}</Text>
      <TextInput
        style={style.input}
        editable={disable}
        placeholder={placeholder}
        placeholderTextColor={ICON}
      />
    </View>
  )
}

export default InputBlock
