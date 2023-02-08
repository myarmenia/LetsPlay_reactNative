import React, { memo, useRef } from 'react'
import { ScrollView, View } from 'react-native'
import Game from '@/components/game'
import ScreenMask from '@/components/wrappers/screen'
import { RW } from '@/theme/utils'

const Index = ({ route }) => {
  const { list } = route.params

  const scrollViewRef = useRef()
  const isCloseToRight = ({ layoutMeasurement, contentOffset, contentSize }) => {
    return layoutMeasurement.width + contentOffset.x >= contentSize.width
  }
  return (
    <ScreenMask style={{ paddingHorizontal: 0 }}>
      <ScrollView
        onScroll={({ nativeEvent }) => {
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
                marginHorizontal: RW(50),
                alignSelf: 'center',
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
