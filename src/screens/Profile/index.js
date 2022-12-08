import React from 'react'
import { Text } from 'react-native'

import ScreenMask from '@/components/wrappers/screen'

const ProfileScreen = () => {
  return (
    <ScreenMask>
      <Text style={{ marginTop: 100, color: 'white' }}>Profile</Text>
    </ScreenMask>
  )
}

export default ProfileScreen
