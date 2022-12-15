import React from 'react'
import { View, Text } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import LightButton from '@/assets/imgs/Button'

const Organize = ({navigation}) => {
  return (
    <ScreenMask>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <LightButton onPress={() => {
              navigation.navigate('CreateActiveGame')
          }} label={'Активные игры'} size={{ width: 284, height: 48 }} />
        </View>
        <View style={{marginTop:20}}>
          <LightButton label={'Настольные игры'} size={{ width: 284, height: 48 }} />
        </View>
      </View>
    </ScreenMask>
  )
}

export default Organize
