import React from 'react'
import { Text, TextInput, View } from 'react-native'
import style from './style'
import { ICON } from '@/theme/colors'

function InputBlock(props) {
  const { text, placeholder, disable = true, value, setValue, editable } = props
  return (
    <View style={style.inputBlock}>
      <Text style={style.inputTitle}>{text}</Text>
      <TextInput

        style={style.input}
        editable={disable}

        style={style.input}
        value={value}
        onChangeText={setValue}

        placeholder={placeholder}
        placeholderTextColor={ICON}
      />
    </View>
  )
}

export default InputBlock
