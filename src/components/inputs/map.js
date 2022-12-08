import React from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native'
import styles from '@/components/inputs/styles'
import { ICON } from '@/theme/colors'
import { RW } from '@/theme/utils'
import MapSvg from '@/assets/svgs/mapSvg'

function Map(props) {
  const { placeholder } = props
  return (
    <View style={styles.mapInputBlock}>
      <TextInput style={styles.mapInput} placeholder={placeholder} placeholderTextColor={ICON} />
      <TouchableOpacity>
        <MapSvg />
      </TouchableOpacity>
    </View>
  )
}

export default Map
