import React from 'react'
import { StyleSheet, View } from 'react-native'

import ScreenMask from '@/components/wrappers/screen'
import DarkButton from '@/assets/imgs/DarkButton'
import { RH, RW } from '@/theme/utils'

import OnBoardingItem from './components/item'
import Logo from './components/logo'

const ITEMS = [
  {
    image: require('@/assets/imgs/onboard.png'),
    description:
      'С помощью этого приложения вы можете организовать игры․ Повседневная практика показывает, что укрепление и развитие структуры играет важную роль',
  },
  {
    image: require('@/assets/imgs/onboard.png'),
    description:
      'С помощью этого приложения вы можете организовать игры․ Повседневная практика показывает, что укрепление и развитие структуры играет важную роль',
  },
  {
    image: require('@/assets/imgs/onboard.png'),
    description:
      'С помощью этого приложения вы можете организовать игры․ Повседневная практика показывает, что укрепление и развитие структуры играет важную роль',
  },
  {
    image: require('@/assets/imgs/onboard.png'),
    description:
      'С помощью этого приложения вы можете организовать игры․ Повседневная практика показывает, что укрепление и развитие структуры играет важную роль',
  },
  {
    image: require('@/assets/imgs/onboard.png'),
    description:
      'С помощью этого приложения вы можете организовать игры․ Повседневная практика показывает, что укрепление и развитие структуры играет важную роль',
  },
]

const Onboard = ({ navigation }) => {
  return (
    <ScreenMask>
      <Logo />
      <OnBoardingItem items={ITEMS} />
      <View style={styles.next}>
        <DarkButton label={'Далее>>'} onPress={() => navigation.push('Preferences')} />
      </View>
    </ScreenMask>
  )
}

export default Onboard

const styles = StyleSheet.create({
  next: {
    right: RW(8),
    bottom: RH(44),
    position: 'absolute',
  },
})
