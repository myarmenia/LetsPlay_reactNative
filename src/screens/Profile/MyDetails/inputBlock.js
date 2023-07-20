import React from 'react'
import { Text, TextInput, View } from 'react-native'
import style from './style'
import { ICON } from '@/theme/colors'

function InputBlock(props) {
  const { text, placeholder, editable, value, setValue } = props
  return (
    <View style={style.inputBlock}>
      <Text style={style.inputTitle}>{text}</Text>
      <TextInput
        style={style.input}
        editable={editable}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor={ICON}
        maxLength={20}
      />
    </View>
  )
}

export default InputBlock
