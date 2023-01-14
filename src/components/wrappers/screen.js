import React from 'react'
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native'
import BGMask from '@/assets/imgs/BGMask.png'
import { SCREEN_BACKGROUND } from '@/theme/colors'
import { RH, RW } from '@/theme/utils'
import { IS_IOS } from '@/constants'

const ScreenMask = ({ children, style }) => {
  return (
    <ImageBackground
      source={BGMask}
      imageStyle={styles.bgMask}
      style={{ ...styles.container, ...style }}
    >
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
    </ImageBackground>
  )
}

export default ScreenMask

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: RW(16),
    backgroundColor: SCREEN_BACKGROUND,
  },
  bgMask: {
    top: IS_IOS ? RH(-35) : RH(-15),
    position: 'absolute',
  },
})
