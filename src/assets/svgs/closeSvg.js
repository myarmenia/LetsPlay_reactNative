import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function CloseSvg(props) {
  return (
    <Svg
      width={17}
      height={16}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.42 1.006l14 14M15.42 1.006l-14 14"
        stroke="#B3B7C2"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default CloseSvg
