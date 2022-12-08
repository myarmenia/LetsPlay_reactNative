import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Svg, Defs, Text, Path, LinearGradient, Stop, G } from 'react-native-svg'

import { RH, RW } from '@/theme/utils'

const DarkButton = ({ onPress, label,size }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress && onPress}>
      <Svg
        width={RW(size?.width) || RW(172)}
        height={RH(size?.height) || RH(36)}
        viewBox="0 0 172 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M0.499883 11.4598L0.499882 11.4593C0.498513 10.0737 0.826718 8.69832 1.46962 7.41079C2.11277 6.12277 3.05951 4.94563 4.26119 3.94971C5.46301 2.95367 6.89488 2.15969 8.47678 1.61677C10.0586 1.07387 11.7566 0.793701 13.4729 0.793701H157.71V0.293701L157.71 0.793701C159.425 0.793469 161.123 1.07318 162.704 1.61545C164.285 2.15773 165.717 2.95092 166.918 3.94607C168.12 4.94111 169.067 6.11732 169.711 7.40445C170.354 8.69109 170.683 10.0656 170.683 11.4506V25.1455C170.681 27.9368 169.34 30.6372 166.915 32.6444C164.486 34.6539 161.176 35.7942 157.71 35.7937H13.4729C10.0049 35.7937 6.69373 34.6521 4.26494 32.6408C1.83886 30.6318 0.499882 27.9294 0.499882 25.1367L0.499883 11.4598Z"
          fill="#142A5C"
          stroke="url(#paint0_linear_1989_18082)"
        />
        <Path
          d="M152.855 3.25H19.1379C14.8769 3.26012 10.7939 4.66617 7.78075 7.16104C4.76756 9.65591 3.06907 13.0368 3.05627 16.5653V18.1631C3.05652 19.2019 3.20455 20.2371 3.49729 21.2473H8.91297V20.4475C8.92577 16.919 10.6243 13.538 13.6374 11.0432C16.6506 8.54829 20.7336 7.14224 24.9946 7.13212H158.719C161.074 7.13514 163.399 7.57174 165.526 8.41034C164.028 6.80763 162.108 5.50954 159.912 4.61519C157.716 3.72084 155.303 3.25389 152.855 3.25Z"
          fill="url(#paint1_linear_1989_18082)"
        />
        <Path
          d="M165.033 23.9204C163.947 26.5507 161.898 28.8352 159.171 30.4557C156.444 32.0762 153.174 32.952 149.818 32.9611H21.1067C18.0889 32.9532 15.1345 32.243 12.5806 30.9115C10.0268 29.58 7.9764 27.6807 6.66344 25.4306C6.45837 25.2717 6.24227 25.1183 6.04602 24.9503C7.18881 27.4978 9.24287 29.696 11.9339 31.2513C14.625 32.8067 17.825 33.6452 21.1067 33.655H149.822C153.179 33.646 156.449 32.7701 159.176 31.1492C161.904 29.5283 163.952 27.2433 165.037 24.6125C165.037 24.6125 166.04 22.5162 165.999 17.6243C165.943 22.0232 165.033 23.9204 165.033 23.9204Z"
          fill="white"
        />
        <G>
          <Text
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="url(#rainbow)"
            y={'50%'}
            x={'50%'}
            fontWeight={700}
            fontSize={RH(18)}
          >
            {label}
          </Text>
        </G>
        <Defs>
          <LinearGradient
            id="rainbow"
            x1="0"
            x2="0"
            y1="0"
            y2="100%"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#7DCE8A" offset="100%" />
            <Stop stopColor="#4D7CFE" offset="100%" />
          </LinearGradient>
          <LinearGradient
            id="paint0_linear_1989_18082"
            x1="-0.000121266"
            y1="21.2937"
            x2="171.183"
            y2="21.6092"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#7DCE8A" />
            <Stop offset={1} stopColor="#4D7CFE" />
          </LinearGradient>
          <LinearGradient
            id="paint1_linear_1989_18082"
            x1="127.372"
            y1="-7.21127"
            x2="128.869"
            y2="11.5687"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="white" />
            <Stop offset={1} stopColor="white" stopOpacity={0.44} />
          </LinearGradient>
        </Defs>
      </Svg>
    </TouchableOpacity>
  )
}

export default DarkButton
