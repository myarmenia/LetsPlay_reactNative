import * as React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'
import { RH, RW } from '@/theme/utils'
import { View } from 'react-native'

function SvgComponent({size}) {
  return (
    <View
      style={{
        overflow: 'hidden',
        borderRadius: size/RW(3),
          width: '93%',
          height: '93%',
        backgroundColor: '#B3B7C2',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Svg
        width={size/RW(5)}
        height={size/RW(5)}
        viewBox="0 0 139 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Circle cx={69.8834} cy={39.3978} r={38.9093} fill="#DBDDE6" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M138.882 159.757H.884c0-38.107 30.892-68.999 69-68.999 38.107 0 68.998 30.892 68.998 68.999z"
          fill="#DBDDE6"
        />
      </Svg>
    </View>
  )
}

export default SvgComponent
