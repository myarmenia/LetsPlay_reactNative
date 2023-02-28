import { PermissionsAndroid, Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VoiceSvg from '@/assets/svgs/voiceSvg';
import AudioRecorderPlayer, { AudioEncoderAndroidType, AudioSourceAndroidType, AVEncoderAudioQualityIOSType, AVEncodingOption } from 'react-native-audio-recorder-player';

const Voice = () => {
    const audioRecorderPlayer = new AudioRecorderPlayer();
    const onStartRecord = React.useCallback(async () => { 
        if (Platform.OS === 'android') { 
            try { 
                const grants = await PermissionsAndroid.requestMultiple([
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, 
                    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, 
                    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO, 
                ]);
                console.log('write external stroage', grants); 
                if ( grants['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED && grants['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED && grants['android.permission.RECORD_AUDIO'] === PermissionsAndroid.RESULTS.GRANTED ) { 
                    console.log('permissions granted'); 
                } else { 
                    console.log('All required permissions not granted'); 
                    return; 
                }
            } catch (err) {
                console.warn(err);
                return; 
            } 
        } 
        const audioSet: AudioSet = { 
            AudioEncoderAndroid: AudioEncoderAndroidType.AAC, 
            AudioSourceAndroid: AudioSourceAndroidType.MIC, 
            AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high, 
            AVNumberOfChannelsKeyIOS: 2, AVFormatIDKeyIOS: AVEncodingOption.aac, 
        };
        console.log('audioSet', audioSet); 
        const uri = await audioRecorderPlayer.startRecorder(undefined, audioSet); 
        audioRecorderPlayer.addRecordBackListener((e: RecordBackType) => { 
            console.log('record-back', e);         
            // setrecordSecs(e.currentPosition); 
            // setrecordTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition))); 
        })
        console.log(`uri: ${uri}`);
    }, []);
  return (
    <Pressable onPress={onStartRecord}>
      <VoiceSvg/>
    </Pressable>
  )
}

export default Voice

const styles = StyleSheet.create({})