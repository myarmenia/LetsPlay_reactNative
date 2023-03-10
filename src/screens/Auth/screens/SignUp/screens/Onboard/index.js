import React from 'react'
import { StyleSheet, View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import DarkButton from '@/assets/imgs/DarkButton'
import { RH, RW } from '@/theme/utils'
import OnBoardingItem from './components/item'
import Logo from '@//assets/imgs/Logo'
import SignUpLogoSvg from '@/assets/svgs/SignUpLogoSvg'
import Button from "@/assets/imgs/Button";

const ITEMS = [
  {
    image: require('@/assets/imgs/registrSlide/loginSlideImageSearch.png'),
    description:'Хотите поиграть, но не можете найти себе компанию?'},
  {
    image: require('@/assets/imgs/registrSlide/loginSlideImageBall.png'),
    description:
        'Ваши друзья не готовы сорваться и приехать через час поиграть с Вами в футбол?',
  },
  {
    image: require('@/assets/imgs/registrSlide/loginSlideImageEvent.png'),
    description:
        'Вы собрались компанией в кафе и внезапно решили поиграть в мафию?',
  },
  {
    image: require('@/assets/imgs/registrSlide/loginSlideImageEssy.png'),
    description:
        'Что может быть проще?',
  },
  {
    image:'',
    description:
        '',
    svg: <SignUpLogoSvg/>
  },
]

const Onboard = ({ navigation }) => {
  return (

      <ScreenMask>
        <View style={styles.logo}>
          <Logo/>
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
