import { RH, RW } from '@/theme/utils'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function LeftArrow() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={RH(17)}
      height={RH(33)}
      viewBox="0 0 17 33"
      fill="none"
    >
      <Path
        d="M15.267 1.79L2.662 18.23l12.605 12.606"
        stroke="#657AC5"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default LeftArrow
