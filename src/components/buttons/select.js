import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from './styles'

const Select = ({ onPress, label, wrapper, isActive, labelStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.selectContainer, wrapper, isActive && styles.containerActive]}
      onPress={onPress && onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  )
}

export default Select
