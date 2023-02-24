import React from 'react'
import { View, Text } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import { RW } from '@/theme/utils'
import ToggleSwitch from '@/components/ToggleSwitch'

const SettingsScreen = ({ navigation }) => {
  return (
    <ScreenMask>
      <Text
        style={{
          color: '#FFFFFF',
          textAlign: 'center',
          fontSize: RW(24),
          fontWeight: 'bold',
          marginTop: RW(20),
        }}
      >
        Настройки
      </Text>

      <Text style={{ color: '#B3B7C2', fontSize: 16, marginTop: 30 }}>Отображение</Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 20,
        }}
      >
        <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Индивидуальные игры</Text>
        <ToggleSwitch />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 20,
        }}
      >
        <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Командные игры</Text>
        <ToggleSwitch />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 20,
        }}
      >
        <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Турниры</Text>
        <ToggleSwitch />
      </View>
    </ScreenMask>
  )
}

export default SettingsScreen
