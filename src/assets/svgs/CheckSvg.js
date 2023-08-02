import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { memo } from 'react'
const CheckSvg = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={48} height={1} {...props}>
    <Path fill="#063855" fillRule="evenodd" d="M0 0h48v1H0z" />
  </Svg>
)

export default memo(CheckSvg)
