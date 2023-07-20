import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RW, font } from '@/theme/utils'
import { LIGHT_LABEL, WHITE } from '@/theme/colors'

const ErrorModal = ({message}) => {
  return (
    <View style={styles.modal}>
      <Text style={styles.text}>{message}</Text>
    </View>
  )
}

export default ErrorModal

const styles = StyleSheet.create({
  modal: {
    width: RW(306),
    backgroundColor: LIGHT_LABEL,
    borderRadius: RW(20),
    padding: RW(20),
    marginHorizontal: RW(30.5),
  },
  text: {
    ...font('inter', 16, "#FF0000", 20),
    textAlign: 'center',
  },
})