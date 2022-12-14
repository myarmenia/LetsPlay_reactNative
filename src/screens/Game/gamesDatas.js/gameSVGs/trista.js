import { RH, RW } from '@/theme/utils'
import * as React from 'react'
import { Image } from 'react-native'
import Svg, { Path, Defs, Pattern, Use } from 'react-native-svg'
function Trista(props) {
  return (
    <Image
      source={require('../gamePics/Триста.png')}
      resizeMode="contain"
      // style={{ width: RW(40), height: RH(40), top: RH(8), left:RW(9) }}
      style={{ width: props.width, height: props.height, top: props.top, left: props.left }}
    />
  )
}
export default Trista
