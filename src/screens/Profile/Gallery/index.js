import React from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { Text, View } from 'react-native'
import style from '@/screens/Profile/style'
import { RH } from '@/theme/utils'

function Index(props) {
  return (
    <ScreenMask>
      <View style={{ ...style.container, marginTop: RH(16) }}>
        <Text style={style.title}>Моя галерея</Text>
        <Text style={style.galleryText}>
          Фотографии с игр нету. Для того, чтобы фотографии отображались, нужно по окончанию игры,
          поделиться впечатлениями.
        </Text>
      </View>
    </ScreenMask>
  )
}

export default Index
