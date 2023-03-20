import React from 'react'
import { View } from 'react-native'
import { styles } from '@/screens/Game/Play/style'
import { useNavigation } from '@react-navigation/native'
import ScreenMask from '@/components/wrappers/screen'
import LightButton from '@/assets/imgs/Button'

function JoinGameTypes() {
  const navigation = useNavigation()
  return (
    <ScreenMask>
      <View style={styles.btnBlock}>
        <View style={styles.btnActiveGames}>
          <LightButton
            onPress={() => {
              navigation.navigate('JoinGameQr')
            }}
            label={'через QR'}
            size={{ width: 281, height: 50 }}
          />
        </View>
        <View>
          <LightButton
            onPress={() => {
              navigation.navigate('JoinGame')
            }}
            label={'поиск игры'}
            size={{ width: 281, height: 50 }}
          />
        </View>
      </View>
    </ScreenMask>
  )
}

export default JoinGameTypes
