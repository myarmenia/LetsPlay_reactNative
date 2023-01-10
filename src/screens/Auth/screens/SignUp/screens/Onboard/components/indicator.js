import React from 'react'
import { View, StyleSheet } from 'react-native'

import { ICON } from '@/theme/colors'
import { RW } from '@/theme/utils'

const OnBoardingIndicator = ({ itemsCount, activeIndex = 0 }) => {

  return (
    <View style={[styles.indicatorContainer]}>
      {Array.from(Array(itemsCount).keys()).map(key => (
        <View style={[styles.dot, key === activeIndex?styles.activeDot:null]} key={key} />
      ))}
    </View>
  )
}

export default OnBoardingIndicator

const styles = StyleSheet.create({
  indicatorContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: RW(10),
    height: RW(10),
    borderColor: ICON,
    borderWidth: RW(1),
    borderRadius: RW(5),
    marginHorizontal: RW(8),
  },
  activeDot: {
    backgroundColor: ICON,
  },
})
