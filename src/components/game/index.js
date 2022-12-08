import React from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { Image, ScrollView, Text, View } from 'react-native'
import { styles } from '@/components/game/style'
import BgGamesLiner from '@/assets/imgs/games/BgGamesLiner'
import Border from '@/assets/imgs/games/Border'
import Button from '@/assets/imgs/Button'

function Index({ data }) {
  return (
    <View style={styles.bgFon}>
      <View style={{ ...styles.border, ...styles.leftBorder }}>
        <Border />
      </View>
      <View style={{ ...styles.border, ...styles.rightBorder }}>
        <Border />
      </View>
      <View style={styles.bgGamesLiner}>
        <BgGamesLiner />
      </View>
      <View style={styles.title}>
        <Image source={data.image} />
      </View>
      <View style={styles.btn}>
        <Button
          label={data.title}
          labelStyle={{ fontSize: 18 }}
          size={{ width: 195, height: 48 }}
        />
      </View>
    </View>
  )
}

export default Index
