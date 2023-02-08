import React from 'react'
import { View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import LightButton from '@/assets/imgs/Button'

const Index = ({ navigation }) => {
  return (
    <ScreenMask>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <LightButton
            onPress={() => {
              navigation.navigate('OrganizeScreen')
            }}
            label={'Создать турнир'}
            size={{ width: 284, height: 48 }}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <LightButton
            onPress={() => {
              navigation.navigate('TourParticipantNavigator')
            }}
            label={'Принять участие в турнире'}
            size={{ width: 284, height: 48 }}
          />
        </View>
      </View>
    </ScreenMask>
  )
}

export default Index
