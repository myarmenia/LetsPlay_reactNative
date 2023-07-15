import React from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { Pressable, Text, View } from 'react-native'
import style from '@/screens/Profile/style'
import { RH } from '@/theme/utils'
import { SheetManager } from 'react-native-actions-sheet'

function Index(props) {
  return (
    <ScreenMask>
      <Pressable
        onPress={() => {
          console.log('SheetManager.show')
          SheetManager.show('selectMedia')
        }}
        style={{ ...style.container, marginTop: RH(16) }}
      >
        <Text style={style.title}>Моя галерея</Text>
        <View style={style.galleryTextBlock}>
          <Text style={style.GalleryTitle}>Галерея пуста.</Text>
          <Text style={style.galleryText}>
            Фото/Видео добавляются после вашего подтверждения по окончанию проведенной игры.
          </Text>
        </View>
      </Pressable>
    </ScreenMask>
  )
}

export default Index
