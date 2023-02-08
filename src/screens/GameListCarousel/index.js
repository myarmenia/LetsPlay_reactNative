import React, { memo, useState } from 'react'
import { Animated, View } from 'react-native'
import Game from '@/components/game'
import ScreenMask from '@/components/wrappers/screen'
import { RW } from '@/theme/utils'

const Index = ({ navigation, route }) => {
  const { list } = route.params
  const [data, setData] = useState([...list])
  const [offset, setOffset] = useState(3557)
  const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    if (offset <= contentOffset.x + layoutMeasurement.width * 4) {
      setOffset(offset + 3557)
      return true
    }
  }
  return (
    <ScreenMask style={{ paddingHorizontal: 0 }}>
      <Animated.ScrollView
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            console.log('true')
            setData([...data, ...list])
          }
        }}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        horizontal
      >
        {data.map((elem, index) => {
          return (
            <View
              key={Math.random().toString()}
              style={{
                // flex: 1,
                marginHorizontal: RW(50),
                alignSelf: 'center',
                // justifyContent: 'center',
              }}
            >
              <Game game={data[index]} pressable={true} />
            </View>
          )
        })}
      </Animated.ScrollView>
    </ScreenMask>
  )
}

export default memo(Index)
