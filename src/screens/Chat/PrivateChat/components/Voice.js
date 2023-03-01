import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import AudioRecorderPlayer, {
  AudioEncoderAndroidType,
  AudioSourceAndroidType,
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
} from 'react-native-audio-recorder-player'

const Voice = () => {
  const audioRecorderPlayer = new AudioRecorderPlayer()
  const startRecord = async () => {
    const path = Platform.select({
      ios: 'hello.m4a',
      android: 'sdcard/hello.mp4', // should give extra dir name in android. Won't grant permission to the first level of dir.
    })
    const audioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
    }
    const meteringEnabled = false

    let uri

    try {
      uri = await this.audioRecorderPlayer.startRecorder(path, meteringEnabled, audioSet)
    } catch (e) {
      console.log('ERR audioRecorderPlayer.startRecorder: ', e)
    }
    audioRecorderPlayer.addRecordBackListener((e) => {
      setState((state) => ({
        ...state,
        recordSecs: e.current_position,
        recordTime: audioRecorderPlayer.mmssss(Math.floor(e.current_position)),
      }))
      return
    })
    console.log('uri: ', uri)
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable
        onPress={startRecord}
        style={{ backgroundColor: 'orange', padding: 15, margin: 15 }}
      >
        <Text>start</Text>
      </Pressable>
      <Pressable style={{ backgroundColor: 'orange', padding: 15, margin: 15 }}>
        <Text>stop</Text>
      </Pressable>
    </View>
  )
}

export default Voice

const styles = StyleSheet.create({})
