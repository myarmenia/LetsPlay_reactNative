import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgComponent(props) {
  return (
    <Svg
      width={27}
      height={26}
      viewBox="0 0 27 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.373.929l24 24M25.373.929l-24 24"
        stroke="#B3B7C2"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default SvgComponent
