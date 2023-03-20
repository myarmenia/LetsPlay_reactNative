import * as React from 'react'
import Svg, { Rect, Defs, Stop, LinearGradient } from 'react-native-svg'
import { Text, View } from 'react-native'
import { font, RW } from '@/theme/utils'
import { BLACK, DARK_BLUE } from '@/theme/colors'
import Row from '../wrappers/row'
// import LinearGradient from "react-native-linear-gradient";

function SvgComponent({ status, size }) {
  const width = size * RW(0.5)
  const height = size * RW(0.07)

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 165 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect
        x={1.11194}
        y={0.795227}
        width={163.387}
        height={19}
        rx={4.5}
        fill="url(#bronze)"
        stroke="url(#bronze)"
      />
      <View
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            ...font('bold', size > 220 ? 9 : 2, BLACK),
            width: '42%',
            left: size / -RW(60),
          }}
        >
          ОРГАНИЗАТОР
        </Text>
        <Text
          style={{
            ...font('bold', size > 220 ? 9 : 4, BLACK),
            width: '3%',
            alignSelf: 'center',
            right: size / RW(100),
            // position: 'absolute',
          }}
        >
          |
        </Text>
        <Text style={{ ...font('bold', size > 220 ? 9 : 2, BLACK), width: '35%' }}>УЧАСТНИК</Text>
      </View>
      <Defs>
        <LinearGradient
          id="gold"
          // x1={0.048}
          // y1={70.048}
          // x2={269.494}
          // y2={70.048}
          x1={0}
          y1={0}
          x2={width}
          y2={height}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#A37A1E" />
          <Stop offset={0.12} stopColor="#D3A84C" />
          <Stop offset={0.276} stopColor="#FFEC95" />
          <Stop offset={0.485} stopColor="#E6BE69" />
          <Stop offset={0.708} stopColor="#FFD67A" />
          <Stop offset={0.859} stopColor="#B58F3E" />
          <Stop offset={1} stopColor="#956E13" />
        </LinearGradient>
        <LinearGradient
          id="silver"
          x1={0}
          y1={0}
          x2={width}
          y2={height}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#A0A0A0" />
          <Stop offset={0.13} stopColor="#E6E6E6" />
          <Stop offset={0.276} stopColor="#BABABA" />
          <Stop offset={0.51} stopColor="#AAA" />
          <Stop offset={0.792} stopColor="#CECECE" />
          <Stop offset={1} stopColor="#797979" />
        </LinearGradient>
        <LinearGradient
          id="bronze"
          x1={0}
          y1={0}
          x2={width}
          y2={height}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#873B23" />
          <Stop offset={0.058} stopColor="#A66842" />
          <Stop offset={0.276} stopColor="#E5BA8C" />
          <Stop offset={0.485} stopColor="#E8D2AE" />
          <Stop offset={0.708} stopColor="#C09067" />
          <Stop offset={1} stopColor="#A05E2E" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
