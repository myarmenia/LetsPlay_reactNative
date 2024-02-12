import * as React from 'react'
import { ImageBackground, Text, } from 'react-native'
import { font, } from '@/theme/utils'
import { BLACK } from '@/theme/colors'

function SvgComponent({ count, size }) {


  return (
    <ImageBackground
      source={require('../images/circle.png')}
      style={{
        width: size * 22 / 270,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >


      <Text
        style={{
          ...font('bold', undefined, BLACK),
          textAlign: 'center',
          fontSize: size * 10 / 270
        }}
      >
        {count}
      </Text>
    </ImageBackground>


  )
}

export default SvgComponent
