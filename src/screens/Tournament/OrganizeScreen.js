<<<<<<< HEAD
import React from 'react'
import { View, Text } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import LightButton from '@/assets/imgs/Button'
import GestureRecognizer from 'react-native-swipe-gestures'

const Organize = ({navigation}) => {
  return (
    <ScreenMask>
    <GestureRecognizer
        onSwipeRight={state => navigation.goBack()}
        style={{
          flex: 1,
        }}
      >
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
      </GestureRecognizer>
    </ScreenMask>
  )
}

export default Organize
=======
import React from 'react'
import { View, Text } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import LightButton from '@/assets/imgs/Button'
import GestureRecognizer from 'react-native-swipe-gestures'

const Organize = ({navigation}) => {
  return (
    <ScreenMask>
    <GestureRecognizer
        onSwipeRight={state => navigation.goBack()}
        style={{
          flex: 1,
        }}
      >
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
      </GestureRecognizer>
    </ScreenMask>
  )
}

export default Organize
>>>>>>> a6bf9b1f955cf66f812a859938c3c3fcf62b5f1b
