import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

import { ICON, MESSAGE_CONTAINER, RED, WHITE } from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'

const Message = ({
  secure,
  previus,
  isWrong,
  message,
  labelStyle,
  isLeft = true,
  containerStyle,
}) => {
  const Label = secure && !isLeft ? TextInput : Text
  return (
    <View
      style={[
        styles.container,
        styles[isLeft ? 'left' : 'right'],
        containerStyle,
        previus === isLeft && { marginTop: RH(5) },
      ]}
    >
      <Label style={[styles.label, labelStyle, isWrong && { color: RED }]} secureTextEntry={true}>
        {message}
      </Label>
    </View>
  )
}

export default Message

const styles = StyleSheet.create({
  container: {
    marginTop: RH(25),
    maxWidth: RW(230),
    borderRadius: RW(10),
    paddingVertical: RH(19),
    paddingHorizontal: RW(12),
  },
  left: {
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 0,
    backgroundColor: MESSAGE_CONTAINER,
  },
  right: {
    alignSelf: 'flex-end',
    backgroundColor: ICON,
    borderBottomRightRadius: 0,
  },
  label: {
    ...font('regular', 14, WHITE, 20),
  },
})
