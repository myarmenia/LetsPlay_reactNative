import * as React from 'react'
import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg'
import { Text, View } from 'react-native'
import { font, RH, RW } from '@/theme/utils'
import { BLACK } from '@/theme/colors'

function SvgComponent({ count, status, size }) {
  const width = size / RW(17)
  const height = size / RW(20)
  const fontSize = size / RW(45)
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx={11.4639} cy={11.9869} r={10.6298} fill="url(#bronze)" stroke="url(#bronze)" />
      <View
        style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}
      >
        <Text style={{ ...font('bold', fontSize, BLACK), textAlign: 'center' }}>{count}</Text>
      </View>
      <Defs>
        <LinearGradient
          id="gold"
          x1={0.048}
          y1={70.048}
          x2={269.494}
          y2={70.048}
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
          x1={0.215}
          y1={241.473}
          x2={269.662}
          y2={241.541}
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
          x1={-8.993}
          y1={70.048}
          x2={278.372}
          y2={70.048}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#873B23" />
          <Stop offset={0.058} stopColor="#A66842" />
          <Stop offset={0.276} stopColor="#E5BA8C" />
          <Stop offset={0.485} stopColor="#E8D2AE" />
          <Stop offset={0.708} stopColor="#C09067" />
          <Stop offset={1} stopColor="#A05E2E" />
        </LinearGradient>
        <LinearGradient
          id="blue"
          x1={4.048}
          y1={190.533}
          x2={258.048}
          y2={188.033}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#157185" />
          <Stop offset={0.249} stopColor="#87C4CC" />
          <Stop offset={0.518} stopColor="#1568A7" />
          <Stop offset={0.83} stopColor="#7BADE6" />
          <Stop offset={1} stopColor="#024ABA" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
