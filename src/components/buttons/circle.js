import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Main from '@/assets/imgs/main'
import styles from './styles'

const CircleButton = ({ isHome, setIsHome, tabBarHidden }) => {
  const navigation = useNavigation()

  const press = () => {
    navigation.navigate(isHome ? 'Game' : 'Home')
    !isHome && setIsHome(!isHome)
  }

  return (
    <View style={{...styles.circleContainer, display:tabBarHidden?'none':'flex'}}>
      <TouchableOpacity activeOpacity={0.8} onPress={press}>
        <Main isAdd={isHome} />
      </TouchableOpacity>
    </View>
  )
}

export default CircleButton
