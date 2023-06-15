import React from 'react'
import { Image, View } from 'react-native'
import MafiaLoader from '../PlayMafia/components/MafiaLoader'
import { RH, RW } from '@/theme/utils'
import ScreenMask from '@/components/wrappers/screen'

const WaitPlayers = () => {
  return (
    <ScreenMask>
      <View
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          style={{ width: '80%', resizeMode: 'contain', position: 'absolute' }}
          source={require('./assets/bgLogo.png')}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          width: RW(448),
          height: RH(946),
          left: RW(-20),
          right: RW(-20),
          top: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      >
        <MafiaLoader background={false} />
      </View>
    </ScreenMask>
  )
}
export default WaitPlayers
