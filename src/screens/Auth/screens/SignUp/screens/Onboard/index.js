import React from 'react'
import { StyleSheet, View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import DarkButton from '@/assets/imgs/DarkButton'
import { RH, RW } from '@/theme/utils'
import OnBoardingItem from './components/item'
import Logo from './components/logo'
import SignUpLogoSvg from '@/assets/svgs/SignUpLogoSvg'
import Button from "@/assets/imgs/Button";

const ITEMS = [
  {
    image: require('@/assets/imgs/onboard.png'),
    description:
        '1С помощью этого приложения вы можете организовать игры․ Повседневная практика показывает, что укрепление и развитие структуры играет важную роль',
  },
  {
    image: require('@/assets/imgs/onboard.png'),
    description:
        '2С помощью этого приложения вы можете организовать игры․ Повседневная практика показывает, что укрепление и развитие структуры играет важную роль',
  },
  {
    image: require('@/assets/imgs/onboard.png'),
    description:
        '3С помощью этого приложения вы можете организовать игры․ Повседневная практика показывает, что укрепление и развитие структуры играет важную роль',
  },
  {
    image: require('@/assets/imgs/onboard.png'),
    description:
        '4С помощью этого приложения вы можете организовать игры․ Повседневная практика показывает, что укрепление и развитие структуры играет важную роль',
  },
  {
    image: require('@/assets/imgs/onboard.png'),
    description:
        '5С помощью этого приложения вы можете организовать игры․ Повседневная практика показывает, что укрепление и развитие структуры играет важную роль',
  },
]

const Onboard = ({ navigation }) => {
  return (

      <ScreenMask>
        <View style={styles.logo}>
          <SignUpLogoSvg/>
        </View>
        <OnBoardingItem items={ITEMS}/>
        <View style={styles.next}>
          <Button size={{width: 171 , height: 36}} label={'Далее>>'} onPress={() => navigation.push('Preferences')} />
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
  logo:{
    alignItems:'center',
    marginTop:RH(20),
    marginBottom:RH(30)
  },

})
