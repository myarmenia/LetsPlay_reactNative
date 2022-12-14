import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { RH, RW } from '@/theme/utils'
import { TouchableOpacity } from 'react-native'

function SvgComponent({ onPress, style }) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={{ zIndex: 1 }} onPress={onPress && onPress}>
      <Svg
        width={RW(27)}
        height={RH(26)}
        viewBox={`0 0 27 26`}
        {...style}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M1.373.929l24 24M25.373.929l-24 24"
          stroke="#B3B7C2"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </Svg>
    </TouchableOpacity>
  )
}

export default SvgComponent
