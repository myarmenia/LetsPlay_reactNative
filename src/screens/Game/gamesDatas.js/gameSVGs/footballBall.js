import { RH, RW } from '@/theme/utils'
import * as React from 'react'
import { Image } from 'react-native'
import Svg, { Path, Defs, Pattern, Use } from 'react-native-svg'
function FootballBall(props) {
  return (
    <Image
      source={require('../gamePics/Футбол.png')}
      resizeMode="contain"
      // style={{ width: RW(40), height: RH(40),top:RH(10), left:RW(7) }}
      style={{ width: props.width, height: props.height, top: props.top, left: props.left }}
    />
  )
}
export default FootballBall
