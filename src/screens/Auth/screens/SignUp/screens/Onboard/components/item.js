import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import { font, RH, RW, shadow } from '@/theme/utils'
import { ICON } from '@/theme/colors'

const OnBoardingItem = ({ item }) => {
  return (
    <View style={[styles.container, !item.svg && { paddingBottom: 40 }]}>
      {item.svg ? (
        <View
          style={{
            position: 'relative',
            top: RH(-30),
            width: '100%',
            height: RH(568),
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {item.svg}
        </View>
      ) : (
        <>
          <Image source={item.image} style={styles.image} />
          <Text style={[styles.description]}>{item.description}</Text>
        </>
      )}
    </View>
  )
}

export default OnBoardingItem

const styles = StyleSheet.create({
  container: {
    width: RW(382),
    height: RH(568),
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    maxWidth: RW(318),
    textAlign: 'center',
    // letterSpacing: 0.5,
    ...font('regular', 24, ICON, 38),
  },
  image: {
    width: RW(300),
    height: RH(300),
    resizeMode: 'contain',
  },
})
