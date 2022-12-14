import { RH, RW } from '@/theme/utils'
import * as React from 'react'
import { Image } from 'react-native'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

function Quest(props) {
  return (
    <Image
      source={require('../gamePics/свояИгра.png')}
      resizeMode="contain"
      // style={{ width: RW(50), height: RH(50), top:RH(5)}}
      style={{ width: props.width, height: props.height, top: props.top }}
    />
  )
}

export default Quest
