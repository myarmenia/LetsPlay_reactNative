import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import styles from './styles'
import { BACKGROUND, ICON, RED } from '@/theme/colors'
import { font, RW } from '@/theme/utils'
import { useDispatch, useSelector } from 'react-redux'
import { setTicket_price } from '@/store/Slices/GameCreatingSlice'

const Price = props => {
  const { width } = props
  const initialState = useSelector(state => state.game)
  const dispatch = useDispatch()
  return (
    <View style={{ ...styles.priceBlock, width: width || RW(124) }}>
      <TextInput
        style={styles.priceInput}
        placeholder={'Сумма оплаты до'}
        placeholderTextColor={ICON}
        onChangeText={ev => {
          dispatch(setTicket_price(+ev))
        }}
        keyboardType={'numeric'}
      />
    </View>
  )
}

export default Price
