import React from 'react'
import { View, Text } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import LightButton from '@/assets/imgs/Button'
import GestureRecognizer from 'react-native-swipe-gestures'
// import { NavigationContainer } from '@react-navigation/native'

const Index = ({navigation}) => {
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
          <LightButton onPress={() => {navigation.navigate('OrganizeScreen')}} label={'Создать турнир'} size={{ width: 284, height: 48 }} />
        </View>
        <View style={{marginTop:20}}>
          <LightButton onPress={() => {navigation.navigate('TourParticipantNavigator')}} label={'Принять участие в турнире'} size={{ width: 284, height: 48 }} />
        </View>
      </View>
      </GestureRecognizer>
    </ScreenMask>
  )
}

export default Index
