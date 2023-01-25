import React, { useState } from 'react'
import { TextInput } from 'react-native'
import styles from './styles'
import { ICON } from '@/theme/colors'
import { RW } from '@/theme/utils'

const Count = (props) => {
  const { placeholder, width, data, setData, type, countType } = props
  const [value, setValue] = useState('')
  return (
    <>
      <TextInput
        value={value}
        onChangeText={(number) => {
          setValue(number)
          if (type === 'player') {
            countType === 'from'
              ? setData({ ...data, playerCountFrom: number })
              : setData({ ...data, playerCountTo: number })
          } else if (type === 'age') {
            countType === 'from'
              ? setData({ ...data, ageFrom: number })
              : setData({ ...data, ageTo: number })
          }
        }}
        keyboardType={'numeric'}
        style={{ ...styles.countInput, width: width || RW(124) }}
        placeholder={placeholder}
        placeholderTextColor={ICON}
      />
    </>
  )
}

export default Count
