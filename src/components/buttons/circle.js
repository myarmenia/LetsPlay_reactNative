import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Main from '@/assets/imgs/main'
import styles from './styles'
import Type from "@/assets/imgs/type";
import AddSvg from "@/assets/svgs/addSvg";
import HomeSvg from "@/assets/svgs/homeSvg";

const CircleButton = ({ isHome, setIsHome, tabBarHidden }) => {
  const navigation = useNavigation()

  const press = () => {
    navigation.navigate(isHome ? 'Game' : 'Home')
    !isHome && setIsHome(!isHome)
  }

  return (
    <View style={{ ...styles.circleContainer, display: tabBarHidden ? 'none' : 'flex' }}>
      <TouchableOpacity activeOpacity={0.8} onPress={press}>
        <Main size={64} label={
         isHome?<AddSvg/>:<HomeSvg/>
        } />
          {/*<Main  size={64} isAdd={isHome} />*/}
      </TouchableOpacity>
    </View>
  )
}

export default CircleButton
