import * as React from 'react'
import Svg, { Rect, Defs, Stop, LinearGradient } from 'react-native-svg'
import { ImageBackground, Platform, Text, View } from 'react-native'
import { font, RH, RW } from '@/theme/utils'
import { BLACK } from '@/theme/colors'
function UserLine({ size }) {

  const textStyle = {
    ...font('bold', undefined, BLACK),
    fontSize: size * 10 / 270,
    
  }


  return (

    <ImageBackground
      source={require('../images/Rectangle.png')}
      style={{
        width: size * 164 / 270,
        height: size * 20 / 270,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
      }}

    >
      {size > 50 ? (
        <>
          <Text
            style={textStyle}
          >
            ОРГАНИЗАТОР
          </Text>
          <Text
            style={textStyle}
          >
            |
          </Text>
          <Text
            style={textStyle}
          >
            УЧАСТНИК
          </Text>
        </>
      ) : null}
    </ImageBackground>
  )
}

export default UserLine
