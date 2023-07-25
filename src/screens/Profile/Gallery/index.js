import React, { useEffect } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import { RH, RW, font } from '@/theme/utils'
import { useDispatch, useSelector } from 'react-redux'
import { getGalleries } from '@/store/Slices/AppSlice'
import { LIGHT_LABEL, WHITE } from '@/theme/colors'
import FastImage from 'react-native-fast-image'
import Video from 'react-native-video'
import { _storageUrl } from '@/constants'
import GalleryItem from './GalleryItem'

function Index() {
  const userGalleries = useSelector(({ app }) => app.userGalleries)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getGalleries())
  }, [])
  return (
    <ScreenMask>
      <View style={{ ...styles.container, marginTop: RH(16) }}>
        <Text style={styles.title}>Моя галерея</Text>
        {userGalleries.length ? (
          <FlatList
            data={userGalleries}
            style={styles.flatList}
            contentContainerStyle={styles.flatListContent}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({ index, item }) => <GalleryItem item={item} />}
          />
        ) : (
          <View style={styles.galleryTextBlock}>
            <Text style={styles.GalleryTitle}>Галерея пуста.</Text>
            <Text style={styles.galleryText}>
              Фото/Видео добавляются после вашего подтверждения по окончанию проведенной игры.
            </Text>
          </View>
        )}
      </View>
    </ScreenMask>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: RW(27),
    alignItems: 'center',
  },
  title: {
    ...font('bold', 24, WHITE, 24),
    marginBottom: RW(15),
  },
  galleryText: {
    ...font('regular', 18, WHITE, 25),
    textAlign: 'center',
    marginTop: RH(40),
  },
  GalleryTitle: {
    ...font('regular', 24, WHITE, 26),
  },
  galleryTextBlock: {
    marginTop: RH(208),
    paddingTop: RH(23),
    paddingBottom: RH(40),
    borderRadius: RW(20),
    backgroundColor: LIGHT_LABEL,
    width: RW(325),
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default Index
