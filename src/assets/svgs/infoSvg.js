import * as React from 'react'
import Svg, { LinearGradient, Stop, Circle, Path } from 'react-native-svg'

import { memo } from 'react'
import { RW } from '@/theme/utils'

const infoSvg = (props) => (
  <Svg
    id="\u0421\u043B\u043E\u0439_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    width={RW(40)}
    height={RW(40)}
    viewBox="0 0 40 40.1"
    style={{
      enableBackground: 'new 0 0 40 40.1',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <LinearGradient
      id="SVGID_1_"
      gradientUnits="userSpaceOnUse"
      x1={0.017}
      y1={20.06}
      x2={40.017}
      y2={20.045}
    >
      <Stop
        offset={0}
        style={{
          stopColor: '#7dce8a',
        }}
      />
      <Stop
        offset={1}
        style={{
          stopColor: '#4d7cfe',
        }}
      />
    </LinearGradient>
    <Circle
      cx={20}
      cy={20.1}
      r={20}
      style={{
        fill: 'url(#SVGID_1_)',
      }}
    />
    <Circle className="st1" cx={20} cy={12.6} r={2.5} />
    <Path
      className="st1"
      d="M23.8 30.1h-7.5c-.7 0-1.2-.6-1.2-1.2 0-.7.6-1.2 1.2-1.2h1.2v-7.5h-1.2c-.7 0-1.2-.6-1.2-1.2 0-.7.6-1.2 1.2-1.2h5c.7 0 1.2.6 1.2 1.2v8.8h1.2c.7 0 1.2.6 1.2 1.2.1.5-.4 1.1-1.1 1.1z"
    />
  </Svg>
)

export default memo(infoSvg)
