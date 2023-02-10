import React, { memo, useRef, useState } from 'react'
import { Dimensions, ScrollView, View } from 'react-native'
import Game from '@/components/game'
import ScreenMask from '@/components/wrappers/screen'
import { RW } from '@/theme/utils'

const Index = ({ route }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { list } = route.params
  const { width } = Dimensions.get('window')

  const scrollViewRef = useRef()
  const isCloseToRight = ({ layoutMeasurement, contentOffset, contentSize }) => {
    return layoutMeasurement.width + contentOffset.x >= contentSize.width
  }
  return (
    <ScreenMask style={{ paddingHorizontal: 0 }}>
      <ScrollView
        onScroll={({ nativeEvent }) => {
          // const { offset } = scrollViewRef.current._listRef._getScrollMetrics()
          // setCurrentIndex(Math.round(offset / RW(382)))
          if (isCloseToRight(nativeEvent)) {
            scrollViewRef.current.scrollTo({ animated: true, offset: 0 })
          }
        }}
        ref={scrollViewRef}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        bounces={true}
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        alwaysBounceHorizontal={false}
        horizontal
      >
        {list.map((elem, index) => {
          return (
            <View
              key={Math.random().toString()}
              style={{
                // paddingHorizontal: RW(50),
                // justifyContent: 'center',
                width: width,
                // alignSelf: 'center',
              }}
            >
              <Game game={list[index]} pressable={true} />
            </View>
          )
        })}
      </ScrollView>
    </ScreenMask>
  )
}

export default memo(Index)
