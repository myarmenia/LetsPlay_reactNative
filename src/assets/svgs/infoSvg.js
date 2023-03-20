import * as React from 'react'
import Svg, { G, Path, Defs, LinearGradient, Stop, ClipPath } from 'react-native-svg'
import { RH, RW } from '@/theme/utils'

function InfoSvg({ size = RW(40) }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#clip0_1517_19480)">
        <Path
          d="M20.107.88c-11.045 0-20 8.955-20 20 0 11.047 8.955 20 20 20 11.046 0 20-8.953 20-20 0-11.045-8.954-20-20-20zm0 10a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm3.75 20h-7.5a1.25 1.25 0 110-2.5h1.25v-7.5h-1.25a1.25 1.25 0 110-2.5h5c.69 0 1.25.56 1.25 1.25v8.75h1.25a1.25 1.25 0 010 2.5z"
          fill="url(#paint0_linear_1517_19480)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1517_19480"
          x1={0.107422}
          y1={24.214}
          x2={40.1076}
          y2={24.2295}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#7DCE8A" />
          <Stop offset={1} stopColor="#4D7CFE" />
        </LinearGradient>
        <ClipPath id="clip0_1517_19480">
          <Path fill="#fff" transform="translate(.107 .88)" d="M0 0H40V40H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default InfoSvg
