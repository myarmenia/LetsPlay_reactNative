import * as React from 'react'
import { Image, ImageBackground, SafeAreaView, View } from 'react-native'
import Background from './background.jpg'

function AliasBackground({ children }) {
  return (
    <ImageBackground
      source={Background}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
    </ImageBackground>
  )
}

export default AliasBackground
