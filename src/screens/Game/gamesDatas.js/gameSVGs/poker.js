import { RH, RW } from '@/theme/utils'
import * as React from 'react'
import { Image } from 'react-native'
// import Poker from "@/assets/imgs/games/poker.png";
import Svg, { Path, Defs, RadialGradient, Stop, LinearGradient } from 'react-native-svg'

function Poker(props) {
  return (
    <Image
      source={require('@/assets/imgs/games/poker.png')}
      resizeMode="contain"
      // style={{ width: RW(60), height: RH(40), top: RH(8), left:RW(-5) }}
      style={{ width: props.width, height: props.height, top: props.top }}
    />
  )
}

export default Poker
