import AudioRecorderPlayer from 'react-native-audio-recorder-player'
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Row from '@/components/wrappers/row'
import { font, RH, RW, shadow } from '@/theme/utils'
import { BACKGROUND, BLACK, ICON } from '@/theme/colors'
import PouseSvg from './Assets/PouseSvg'
import PlaySvg from './Assets/PlaySvg'
import { _storageUrl } from '@/constants'
import { useDispatch, useSelector } from 'react-redux'
import { setPausedMessageId, setPlayMessageId } from '@/store/Slices/ChatsSlice'
import DeleteSvg from './Assets/DeleteSvg'

const screenWidth = Dimensions.get('screen').width

const audioRecorderPlayer = new AudioRecorderPlayer()
audioRecorderPlayer.setSubscriptionDuration(0.05)
const InputPlayer = ({ voicePath, onPressDelete }) => {
  const [playTime, setPlayTime] = useState('00:00:00')
  const [duration, setDuration] = useState('00:00:00')
  const [playWidth, setPlayWidth] = useState(0)

  const dispatch = useDispatch()
  const { playMessageId, pausedMessageId } = useSelector(({ chats }) => chats)

  const onStartPlay = async () => {
    if (pausedMessageId == 'input') {
      await audioRecorderPlayer.resumePlayer()
      dispatch(setPausedMessageId(null))
    } else {
      await audioRecorderPlayer.stopPlayer()
      dispatch(setPlayMessageId('input'))
      await audioRecorderPlayer.startPlayer(voicePath)

      try {
        audioRecorderPlayer.addPlayBackListener(async (e) => {
          setPlayTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)))
          setDuration(audioRecorderPlayer.mmssss(Math.floor(e.duration)))
          setPlayWidth((e.currentPosition / e.duration) * (screenWidth - 176))
          if (e.currentPosition == e.duration) {
            audioRecorderPlayer.removePlayBackListener()
            dispatch(setPlayMessageId(null))
            await audioRecorderPlayer.stopPlayer()
          }
        })
      } catch (err) {
        console.log('startPlayer error', err)
      }
    }
  }

  const onStopPlay = async () => {
    await audioRecorderPlayer.pausePlayer()
    dispatch(setPausedMessageId('input'))
    dispatch(setPlayMessageId('input'))
  }
  const onPressDeleteFunc = () => {
    onPressDelete()
    dispatch(setPlayMessageId(null))
    dispatch(setPausedMessageId(null))
  }

  return (
    <Row wrapper={styles.container}>
      {playMessageId == 'input' && pausedMessageId != 'input' ? (
        <Pressable
          onPress={() => {
            onStopPlay()
          }}
        >
          <PouseSvg fill={ICON} />
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            onStartPlay()
          }}
        >
          <PlaySvg fill={ICON} />
        </Pressable>
      )}

      <View style={{ height: '100%', justifyContent: 'space-between' }}>
        <Pressable style={styles.viewBarWrapper}>
          <View style={styles.viewBar}>
            <View
              style={[styles.viewBarPlay, { width: playMessageId == 'input' ? playWidth : 0 }]}
            />
          </View>
        </Pressable>
        <Text style={styles.txtCounter}>
          {playMessageId == 'input' ? `${playTime} / ${duration}` : '00:00:00 / 00:00:00'}
        </Text>
      </View>
      <Pressable onPress={onPressDeleteFunc}>
        <DeleteSvg fill={ICON} />
      </Pressable>
    </Row>
  )
}

export default InputPlayer

const styles = StyleSheet.create({
  container: {
    ...shadow,
    height: RH(55),
    shadowColor: BLACK,
    paddingLeft: RW(8),
    paddingRight: RW(8),
    flexDirection: 'row',
    borderRadius: RW(12),
    alignItems: 'center',
    paddingVertical: RH(10),
    backgroundColor: BACKGROUND,
    justifyContent: 'space-between',
  },
  viewBarWrapper: {
    width: screenWidth - 180,
  },
  viewBar: {
    backgroundColor: ICON,
    height: 6,
    borderRadius: 3,
    alignSelf: 'stretch',
    width: screenWidth - 180,
    marginBottom: 6,
  },
  viewBarPlay: {
    backgroundColor: 'rgba(10, 13, 58, 1)',
    height: 6,
    borderRadius: 3,
    width: 0,
  },
  txtCounter: {
    ...font('regular', 16, ICON, 16),
  },
})
