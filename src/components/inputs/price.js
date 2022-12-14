import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import styles from './styles'
import { ICON, RED } from '@/theme/colors'
import { font, RW } from '@/theme/utils'

const Price = props => {
  const { width, data, setData, errorText } = props
  const [value, setValue] = useState('')

  return (
    <View style={{ ...styles.priceBlock, width: width || RW(124) }}>
      <Text style={styles.priceText}>Сумма оплаты </Text>
      <TextInput
        style={styles.priceInput}
        value={value}
        onChangeText={ev => {
          setValue(ev)
          setData({ ...data, priceValue: ev })
        }}
        keyboardType={'numeric'}
      />
    </View>
  )
}

export default Price
