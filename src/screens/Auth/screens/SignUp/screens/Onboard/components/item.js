import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

import { font, RH, RW, shadow } from '@/theme/utils'
import { BACKGROUND, ICON } from '@/theme/colors'
import ChevronIcon from '@/assets/imgs/chevron'

import OnBoardingIndicator from './indicator'

const OnBoardingItem = ({ items = [], next, previous }) => {
  return (
    <View style={[styles.container]}>
      {items.length > 1 && (
        <View style={styles.buttons}>
          <ChevronIcon onPress={previous} />
          <ChevronIcon isRight onPress={next} />
        </View>
      )}
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        {items.map((item, idx) => {
          return (
            <View key={idx.toString()} style={styles.itemContainer}>
              <Image source={item.image} style={styles.image} />
              <Text style={[styles.description]}>{item.description}</Text>
            </View>
          )
        })}
      </ScrollView>
      <View style={styles.indicator}>
        <OnBoardingIndicator itemsCount={items.length} />
      </View>
    </View>
  )
}

export default OnBoardingItem

const styles = StyleSheet.create({
  container: {
    ...shadow,
    width: RW(382),
    height: RH(568),
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: RW(20),
    paddingVertical: RH(18),
    paddingHorizontal: RW(20),
    backgroundColor: BACKGROUND,
  },
  itemContainer: {
    height: '100%',
    width: RW(302),
    alignItems: 'center',
    flexDirection: 'column',
  },
  description: {
    maxWidth: RW(280),
    textAlign: 'center',
    letterSpacing: 0.5,
    ...font('regular', 16, ICON, 24),
  },
  buttons: {
    zIndex: 2,
    width: '100%',
    marginTop: RH(266),
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: RW(233),
    height: RH(236),
    marginTop: RH(44),
    marginBottom: RH(17),
  },
  indicator: {
    bottom: RH(18),
    position: 'absolute',
  },
})
