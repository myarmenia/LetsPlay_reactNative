import React from 'react'
import { View } from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'

const Toggle = () => {
  return (
    <View>
      <ToggleSwitch
        isOn={false}
        onColor="green"
        offColor="red"
        label="Example label"
        labelStyle={{ color: 'black', fontWeight: '900' }}
        size="large"
        onToggle={(isOn) => console.log('changed to : ', isOn)}
      />
    </View>
  )
}

export default Toggle
