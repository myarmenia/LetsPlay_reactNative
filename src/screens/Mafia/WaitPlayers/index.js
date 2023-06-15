import React from 'react'
import { ImageBackground, SafeAreaView, View } from 'react-native'
import MafiaLoader from '../PlayMafia/components/MafiaLoader'
import { IS_IOS } from '@/constants'
import { SCREEN_BACKGROUND } from '@/theme/colors'
import { RW } from '@/theme/utils'

const WaitPlayers = () => {
  return (
    <ImageBackground
      source={require('./assets/bg.jpg')}
      imageStyle={{
        // top: IS_IOS ? RH(-35) : RH(-15),
        position: 'absolute',
      }}
      style={{
        flex: 1,
        paddingHorizontal: RW(16),
        backgroundColor: SCREEN_BACKGROUND,
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <MafiaLoader background={false} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}
export default WaitPlayers
