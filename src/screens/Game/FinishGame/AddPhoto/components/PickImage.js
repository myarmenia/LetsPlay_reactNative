import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AddSvg from '@/assets/svgs/addSvg'
import { RH, RW, font } from '@/theme/utils'
import { BACKGROUND } from '@/theme/colors'
import { SheetManager } from 'react-native-actions-sheet'
import FastImage from 'react-native-fast-image'
import Video from 'react-native-video'
import DeleteIconSVG from '@/assets/svgs/DeleteIconSVG'
import { useDispatch } from 'react-redux'
import { setGameFinishPhoto } from '@/store/Slices/GamesSlice'

const PickImage = ({ gameFinishPhoto }) => {
  const dispatch = useDispatch()
  return (
    <Pressable
      onPress={() => {
        if (!gameFinishPhoto) {
          SheetManager.show('selectMedia')
        }
      }}
      style={styles.container}
    >
      {gameFinishPhoto ? (
        <Pressable style={styles.deleteBtn} onPress={() => dispatch(setGameFinishPhoto(null))}>
          <DeleteIconSVG color="#FF0000" style={{ right: 0 }} />
        </Pressable>
      ) : null}

      {gameFinishPhoto?.type?.includes('video') ? (
        <Video
          style={styles.image}
          resizeMode="cover"
          paused
          controls
          source={{ uri: gameFinishPhoto.uri }}
        />
      ) : gameFinishPhoto ? (
        <FastImage style={styles.image} source={{ uri: gameFinishPhoto.uri }} />
      ) : (
        <>
          <AddSvg width={RW(60)} height={RH(60)} strokeWidth={3} />
          <Text style={styles.text}>Добавить фото/видео</Text>
        </>
      )}
    </Pressable>
  )
}

export default PickImage

const styles = StyleSheet.create({
  container: {
    width: RW(350),
    height: RH(230),
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...font('regular', 20, BACKGROUND, 22),
    marginTop: RH(20),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  deleteBtn: {
    position: 'absolute',
    top: RH(10),
    right: RW(10),
    zIndex: 99,
    backgroundColor: 'transparent',
  },
})
