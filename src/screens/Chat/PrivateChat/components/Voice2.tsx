import AudioRecorderPlayer, {
    AVEncoderAudioQualityIOSType,
    AVEncodingOption,
    AudioEncoderAndroidType,
    AudioSourceAndroidType,
    OutputFormatAndroidType,
  } from 'react-native-audio-recorder-player';
  import type {
    AudioSet,
    RecordBackType,
  } from 'react-native-audio-recorder-player';
  import {
    Dimensions,
    PermissionsAndroid,
    Platform,
    Pressable,
  } from 'react-native';
  import React, {Component} from 'react';
  // import RNFetchBlob from 'rn-fetch-blob';
  import type {ReactElement} from 'react';
import VoiceSvg from '@/assets/svgs/voiceSvg';
  
  
  interface State {
    isLoggingIn: boolean;
    recordSecs: number;
    recordTime: string;
    currentPositionSec: number;
    currentDurationSec: number;
    playTime: string;
    duration: string;
  }
  
  const screenWidth = Dimensions.get('screen').width;
  
  class Voice extends Component<any, State> {
    // private dirs = RNFetchBlob.fs.dirs;
    private path = Platform.select({
      ios: undefined,
      android: undefined,
  
      // Discussion: https://github.com/hyochan/react-native-audio-recorder-player/discussions/479
      // ios: 'https://firebasestorage.googleapis.com/v0/b/cooni-ebee8.appspot.com/o/test-audio.mp3?alt=media&token=d05a2150-2e52-4a2e-9c8c-d906450be20b',
      // ios: 'https://staging.media.ensembl.fr/original/uploads/26403543-c7d0-4d44-82c2-eb8364c614d0',
      // ios: 'hello.m4a',
      // android: `${this.dirs.CacheDir}/hello.mp3`,
    });
  
    private audioRecorderPlayer: AudioRecorderPlayer;
  
    constructor(props: any) {
      super(props);
      this.state = {
        isLoggingIn: false,
        recordSecs: 0,
        recordTime: '00:00:00',
        currentPositionSec: 0,
        currentDurationSec: 0,
        playTime: '00:00:00',
        duration: '00:00:00',
      };
  
      this.audioRecorderPlayer = new AudioRecorderPlayer();
      this.audioRecorderPlayer.setSubscriptionDuration(0.1); // optional. Default is 0.5
    }
  
    public render(): ReactElement {
      let playWidth =
        (this.state.currentPositionSec / this.state.currentDurationSec) *
        (screenWidth - 56);
  
      if (!playWidth) {
        playWidth = 0;
      }
  
      return (
        <Pressable
        onPressIn={this.onStartRecord}
        onPressOut={this.onStopRecord}>
          <VoiceSvg />
        </Pressable>
      );
    }
  
    private onStartRecord = async (): Promise<void> => {
      if (Platform.OS === 'android') {
        try {
          const grants = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          ]);
  
          console.log('write external stroage', grants);
  
          if (
            grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
              PermissionsAndroid.RESULTS.GRANTED &&
            grants['android.permission.READ_EXTERNAL_STORAGE'] ===
              PermissionsAndroid.RESULTS.GRANTED &&
            grants['android.permission.RECORD_AUDIO'] ===
              PermissionsAndroid.RESULTS.GRANTED
          ) {
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
        AVNumberOfChannelsKeyIOS: 2,
        AVFormatIDKeyIOS: AVEncodingOption.aac,
        OutputFormatAndroid: OutputFormatAndroidType.AAC_ADTS,
      };
  
      // console.log('audioSet', audioSet);
  
      const uri = await this.audioRecorderPlayer.startRecorder(
        this.path,
        audioSet,
      );
  
      this.audioRecorderPlayer.addRecordBackListener((e: RecordBackType) => {
        // console.log('record-back', e);
        this.setState({
          recordSecs: e.currentPosition,
          recordTime: this.audioRecorderPlayer.mmssss(
            Math.floor(e.currentPosition),
          ),
        });
      });
      console.log(`uri: ${uri}`);
    };
  
    private onStopRecord = async (): Promise<void> => {
      const result = await this.audioRecorderPlayer.stopRecorder();
      this.audioRecorderPlayer.removeRecordBackListener();
      this.setState({
        recordSecs: 0,
      });
      console.log(result);
    };
  
  }
  
  export default Voice;
  