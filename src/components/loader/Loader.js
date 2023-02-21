import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RH, RW } from '@/theme/utils'
import { LIGHT_GRAY } from '@/theme/colors'

const Loader = () => {
  return (
    <ActivityIndicator
      size="large"
      style={{ height: RH(60), width: RW(60), borderRadius: RW(20) }}
      color={LIGHT_GRAY}
    />
  )
}

export default Loader

const styles = StyleSheet.create({})
