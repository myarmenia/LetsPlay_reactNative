import React from 'react'
import { View, Text } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import LightButton from '@/assets/imgs/Button'
// import { NavigationContainer } from '@react-navigation/native'

const Index = ({navigation}) => {
  return (
    <ScreenMask>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <LightButton onPress={() => {navigation.navigate('Organize')}} label={'Создать турнир'} size={{ width: 284, height: 48 }} />
        </View>
        <View style={{marginTop:20}}>
          <LightButton label={'Принять участие в турнире'} size={{ width: 284, height: 48 }} />
        </View>
      </View>
    </ScreenMask>
  )
}

export default Index
