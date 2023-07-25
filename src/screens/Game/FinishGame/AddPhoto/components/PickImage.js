import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import AddSvg from '@/assets/svgs/addSvg'
import { RH, RW, font } from '@/theme/utils'
import { BACKGROUND } from '@/theme/colors'
import { SheetManager } from 'react-native-actions-sheet'
import FastImage from 'react-native-fast-image'
import Video from 'react-native-video'
import { useDispatch } from 'react-redux'
import { setGameFinishPhoto } from '@/store/Slices/GamesSlice'
import CloseSVG from '../../../../Alias/components/CloseSVG'

const PickImage = ({ gameFinishPhoto }) => {
  const dispatch = useDispatch()
  return (
    <Pressable
      onPress={() => {
        if (!gameFinishPhoto) {
          SheetManager.show('selectMedia')
        }
      }}
      style={[styles.container, { justifyContent: gameFinishPhoto ? 'flex-end' : 'center' }]}
    >
      {gameFinishPhoto ? (
        <Pressable style={styles.deleteBtn} onPress={() => dispatch(setGameFinishPhoto(null))}>
          <CloseSVG width={RW(30)} height={RW(30)} />
        </Pressable>
      ) : null}

      {gameFinishPhoto?.type?.includes('video') ? (
        <Video style={styles.image} paused controls source={{ uri: gameFinishPhoto.uri }} />
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
    width: RW(370),
    height: RH(280),
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
  },
  text: {
    ...font('regular', 20, BACKGROUND, 22),
    marginTop: RH(20),
  },
  image: {
    width: RW(350),
    height: RH(230),
    marginBottom: RW(10),
  },
  deleteBtn: {
    zIndex: 99,
    marginRight: RW(10),
    marginVertical: RW(5),
    alignSelf: 'flex-end',
    backgroundColor: 'transparent',
  },
})
