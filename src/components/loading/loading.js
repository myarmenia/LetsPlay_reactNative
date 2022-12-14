import React from 'react'
import { View, Text } from 'react-native'
import AnimatedLottieView from 'lottie-react-native'

const Loading = () => {
  return (
    <View>
      <AnimatedLottieView source={require('@/assets/json/loading.json')} />
    </View>
  )
}

export default Loading
