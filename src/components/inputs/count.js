import React from 'react'
import { TextInput } from 'react-native'
import styles from './styles'
import { ICON } from '@/theme/colors'
import { RW } from '@/theme/utils'

const Count = (props) => {
  const { placeholder, width } = props
  return (
    <TextInput
      keyboardType={'numeric'}
      style={{ ...styles.countInput, width: width || RW(124) }}
      placeholder={placeholder}
      placeholderTextColor={ICON}
    />
  )
}

export default Count
