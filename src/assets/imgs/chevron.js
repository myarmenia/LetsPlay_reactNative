import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Svg, Path } from 'react-native-svg'

import { RW } from '@/theme/utils'

const ChevronIcon = ({ color = '#657AC5', size = 28, onPress, isRight = false }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress && onPress}
      style={[isRight && styles.right]}
    >
      <Svg
        width={RW(size)}
        height={RW(size)}
        viewBox="0 0 17 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M14.9999 26.2937L2.99988 14.2937L14.9999 2.2937"
          stroke={color}
          strokeWidth={3}
          strokeLinecap="round"
        />
      </Svg>
    </TouchableOpacity>
  )
}

export default ChevronIcon

const styles = StyleSheet.create({
  right: {
    transform: [{ rotate: '180deg' }],
  },
})
