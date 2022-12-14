import * as React from 'react'
import Svg, { Circle, Defs, LinearGradient, Rect, Stop } from 'react-native-svg'
import { Text, View } from 'react-native'
import { font, RW } from '@/theme/utils'
import { BLACK } from '@/theme/colors'

function SvgComponent({ isMax, count, status }) {
  const width = isMax ? RW(29) : RW(9)
  const height = isMax ? RW(30) : RW(8)
  if (status === 'GOLD') {
    return (
      <Svg
        width={width}
        height={height}
        viewBox="0 0 23 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Circle
          cx={11.4639}
          cy={11.9869}
          r={10.6298}
          fill="url(#paint0_linear_863_4469)"
          stroke="url(#paint1_linear_863_4469)"
        />
        <View
          style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}
        >
          <Text
            style={
              isMax
                ? { ...font('bold', RW(10), BLACK), textAlign: 'center' }
                : { ...font('bold', RW(2), BLACK), textAlign: 'center' }
            }
          >
            {count}
          </Text>
        </View>
        <Defs>
          <LinearGradient
            id="paint0_linear_863_4469"
            x1={0.334106}
            y1={4.60347}
            x2={22.5938}
            y2={4.60347}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#A37A1E" />
            <Stop offset={0.119792} stopColor="#D3A84C" />
            <Stop offset={0.276042} stopColor="#FFEC95" />
            <Stop offset={0.485208} stopColor="#E6BE69" />
            <Stop offset={0.708333} stopColor="#FFD67A" />
            <Stop offset={0.859375} stopColor="#B58F3E" />
            <Stop offset={1} stopColor="#956E13" />
          </LinearGradient>
          <LinearGradient
            id="paint1_linear_863_4469"
            x1={0.334106}
            y1={4.60347}
            x2={22.5938}
            y2={4.60347}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#A37A1E" />
            <Stop offset={0.119792} stopColor="#D3A84C" />
            <Stop offset={0.276042} stopColor="#FFEC95" />
            <Stop offset={0.485208} stopColor="#E6BE69" />
            <Stop offset={0.708333} stopColor="#FFD67A" />
            <Stop offset={0.859375} stopColor="#B58F3E" />
            <Stop offset={1} stopColor="#956E13" />
          </LinearGradient>
        </Defs>
      </Svg>
    )
  }

  if (status === 'SILVER') {
    return (
      <Svg
        width={width}
        height={height}
        viewBox="0 0 23 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Circle cx={11.5107} cy={11.1478} r={11.1298} fill="url(#paint0_linear_861_3829)" />
        <View
          style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}
        >
          <Text
            style={
              isMax
                ? { ...font('bold', RW(10), BLACK), textAlign: 'center' }
                : { ...font('bold', RW(2), BLACK), textAlign: 'center' }
            }
          >
            {count}
          </Text>
        </View>
        <Defs>
          <LinearGradient
            id="paint0_linear_861_3829"
            x1={0.380859}
            y1={13.0028}
            x2={22.6406}
            y2={13.0114}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#A0A0A0" />
            <Stop offset={0.130208} stopColor="#E6E6E6" />
            <Stop offset={0.276042} stopColor="#BABABA" />
            <Stop offset={0.510417} stopColor="#AAA" />
            <Stop offset={0.791667} stopColor="#CECECE" />
            <Stop offset={1} stopColor="#797979" />
          </LinearGradient>
        </Defs>
      </Svg>
    )
  }

  if (status === 'BRONZE') {
    return (
      <Svg
        width={width}
        height={height}
        viewBox="0 0 23 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Circle
          cx={11.4387}
          cy={11.9869}
          r={10.6298}
          fill="url(#paint0_linear_864_4364)"
          stroke="url(#paint1_linear_864_4364)"
        />
        <View
          style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}
        >
          <Text
            style={
              isMax
                ? { ...font('bold', RW(10), BLACK), textAlign: 'center' }
                : { ...font('bold', RW(2), BLACK), textAlign: 'center' }
            }
          >
            {count}
          </Text>
        </View>
        <Defs>
          <LinearGradient
            id="paint0_linear_864_4364"
            x1={-0.465684}
            y1={4.60341}
            x2={23.2744}
            y2={4.60341}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#873B23" />
            <Stop offset={0.0582217} stopColor="#A66842" />
            <Stop offset={0.276042} stopColor="#E5BA8C" />
            <Stop offset={0.485208} stopColor="#E8D2AE" />
            <Stop offset={0.708333} stopColor="#C09067" />
            <Stop offset={1} stopColor="#A05E2E" />
          </LinearGradient>
          <LinearGradient
            id="paint1_linear_864_4364"
            x1={-0.465684}
            y1={4.60341}
            x2={23.2744}
            y2={4.60341}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#873B23" />
            <Stop offset={0.0582217} stopColor="#A66842" />
            <Stop offset={0.276042} stopColor="#E5BA8C" />
            <Stop offset={0.485208} stopColor="#E8D2AE" />
            <Stop offset={0.708333} stopColor="#C09067" />
            <Stop offset={1} stopColor="#A05E2E" />
          </LinearGradient>
        </Defs>
      </Svg>
    )
  }
}

export default SvgComponent
