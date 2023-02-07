import React from 'react'
import { View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import LightButton from '@/assets/imgs/Button'
import { ActiveGames, BoardGames } from '@/assets/TestData'

const dataBoardGames = BoardGames.map((item, i) => ({
  ...item,
  navigateTo: 'Tournament',
  screenTwo: 'CreateActiveGame',
}))

const dataActiveGames = ActiveGames.map((item, i) => ({
  ...item,
  navigateTo: 'Tournament',
  screenTwo: 'CreateActiveGame',
}))

const Organize = ({ navigation }) => {
  return (
    <ScreenMask>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <LightButton
            onPress={() => {
              navigation.navigate('GameListCarousel', { list: dataActiveGames })
            }}
            label={'Активные игры'}
            size={{ width: 284, height: 48 }}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <LightButton
            label={'Настольные игры'}
            onPress={() => navigation.navigate('GameListCarousel', { list: dataBoardGames })}
            size={{ width: 284, height: 48 }}
          />
        </View>
      </View>
    </ScreenMask>
  )
}

export default Organize
