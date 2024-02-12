import { Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { _storageUrl } from '@/constants'
import FastImage from 'react-native-fast-image'
import Video from 'react-native-video'
import { RH, RW } from '@/theme/utils'
import CloseSvg from '@/assets/svgs/closeSvg'
import { deleteGaleryTeamCreateGameFile, deleteGalleryFile, setDeleteGalleryFile, setModalOptions } from '@/store/Slices/AppSlice'
import { useDispatch } from 'react-redux'
import { rejectImage } from '@/store/Slices/TournamentReducer/TournamentApies'

const GalleryItem = ({ item, isMe, canDelete }) => {
  const dispatch = useDispatch()
  return (
    <Pressable
      onPress={() => {
        dispatch(
          setModalOptions({
            visible: true,
            type: 'GaleryOpenPhoto',
            body: {
              image_path: item.image_path,
              video_path: item.video_path,
            },
          }),
        )
      }}
    >
      {isMe && canDelete ? (
        <Pressable
          onPress={() => {
            if (item.tourney) {
              dispatch(rejectImage({ file_id: item?._id })).unwrap().then((res) => {
                if (res.data.statusCode === 200) {
                  dispatch(setDeleteGalleryFile(item?._id))
                }
              })
            } else if (item.create_game) {
              dispatch(deleteGalleryFile({ file_id: item?._id }))
            } else {
              deleteGaleryTeamCreateGameFile({ file_id: item?._id })
            }

          }}
          style={styles.deleteBtn}
        >
          <CloseSvg color="#000" />
        </Pressable>
      ) : null}

      {item.image_path ? (
        <FastImage
          resizeMode="cover"
          source={{ uri: _storageUrl + item.image_path }}
          style={styles.image}
        />
      ) : item.video_path ? (
        <Video
          style={styles.image}
          paused
          controls={false}
          source={{ uri: _storageUrl + item.video_path }}
        />
      ) : null}
    </Pressable>
  )
}

export default GalleryItem

const styles = StyleSheet.create({
  image: {
    margin: RW(6),
    height: RH(120),
    width: RW(180),
    backgroundColor: '#D9D9D9',
  },
  deleteBtn: {
    position: 'absolute',
    zIndex: 99,
    top: RW(10),
    right: RW(10),
    backgroundColor: 'transparent',
  },
})
