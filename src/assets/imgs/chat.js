import React from 'react'
import { Svg, Path } from 'react-native-svg'

import { RW } from '@/theme/utils'

const ChatIcon = ({ color = '#7190FF', size = 35 }) => {
  return (
    <Svg
      width={RW(size)}
      height={RW(size)}
      viewBox="0 0 28 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M16.6012 24.2473L16.6011 24.2473C13.5494 24.7113 10.6766 24.2492 7.97568 22.9142C7.70617 22.7703 7.39139 22.7462 7.10271 22.8511C6.18399 23.1528 5.26722 23.4493 4.34921 23.7462C3.73441 23.945 3.11905 24.144 2.50217 24.3449L2.5016 24.3451C2.09414 24.4783 1.81684 24.4304 1.58462 24.2222C1.45562 24.1066 1.41297 24.008 1.39951 23.9261C1.38463 23.8355 1.39685 23.7096 1.46981 23.5339L1.47023 23.5329C1.70332 22.968 1.93349 22.4054 2.16309 21.8443C2.49063 21.0438 2.81701 20.2461 3.14907 19.4485C3.2158 19.3054 3.24233 19.1473 3.22844 18.9923C3.21472 18.8392 3.16149 18.689 3.06972 18.5602C-0.957287 12.1965 2.54553 4.17695 10.5413 1.94703L10.5413 1.94702C17.8953 -0.104525 25.6765 4.06452 27.1227 10.6547L27.1228 10.655C27.2349 11.1643 27.2962 11.666 27.3606 12.1937C27.3908 12.4408 27.4217 12.6936 27.4588 12.9556C27.3833 18.486 22.8705 23.2955 16.6012 24.2473Z"
        stroke={color}
      />
    </Svg>
  )
}

export default ChatIcon
