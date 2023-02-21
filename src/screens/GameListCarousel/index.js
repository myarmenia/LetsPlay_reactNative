import React, { memo, useEffect } from 'react'
import { Dimensions, ScrollView, View } from 'react-native'
import Game from '@/components/game'
import ScreenMask from '@/components/wrappers/screen'
import { getGames } from '@/store/Slices/GamesSlice'
import { useDispatch, useSelector } from 'react-redux'

const Index = ({ route }) => {
  const { list } = route.params
  const { width } = Dimensions.get('window')
  const games = useSelector(({ games }) => games.games)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGames(list))
  }, [list])

  return (
    <ScreenMask style={{ paddingHorizontal: 0 }}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        bounces={true}
        pagingEnabled
        scrollEnabled
        decelerationRate={0.2}
        snapToAlignment="center"
        alwaysBounceHorizontal={false}
        horizontal
      >
        {games?.map((elem, index) => {
          return (
            <View
              key={elem._id}
              style={{
                width: width,
              }}
            >
              <Game game={elem} pressable={true} />
            </View>
          )
        })}
      </ScrollView>
    </ScreenMask>
  )
}

export default memo(Index)
