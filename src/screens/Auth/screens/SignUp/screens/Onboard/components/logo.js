import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { BACKGROUND, PLACEHOLDER } from '@/theme/colors'
import { font, RH, RW, shadow } from '@/theme/utils'

const Logo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.placeholder}>Лого</Text>
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
  container: {
    ...shadow,
    width: RW(112),
    height: RW(112),
    marginTop: RH(20),
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: RH(40),
    justifyContent: 'center',
    borderRadius: RW(112 / 2),
    backgroundColor: BACKGROUND,
  },
  placeholder: {
    ...font('regular', 18, PLACEHOLDER, 22),
  },
})
