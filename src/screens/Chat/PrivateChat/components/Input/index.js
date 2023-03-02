import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import React, { memo } from 'react'
import { font, RH, RW, shadow } from '@/theme/utils'
import { BACKGROUND, BLACK, ICON, WHITE } from '@/theme/colors'
import SendSvg from '@/screens/Chat/assets/SendSvg'
import Voice from '../Voice'
import WaveForm from 'react-native-audiowaveform'

const index = ({
  onSend,
  disabled,
  textStyle,
  containerStyle,
  secure = false,
  placeholder = 'Написать',
}) => {
  const [voiceMessage, setVoiceMessage] = React.useState(null)
  const [text, setText] = React.useState('')

  const send = () => {
    if (text.trim()) {
      onSend?.(text)
    }
    setText('')
  }
  return (
    <View style={[styles.container, containerStyle]}>
      {voiceMessage ? (
        <WaveForm
          source={{ uri: voiceMessage }}
          waveFormStyle={{ waveColor: 'red', scrubColor: 'white' }}
        ></WaveForm>
      ) : (
        <TextInput
          value={text}
          editable={!disabled}
          onChangeText={setText}
          secureTextEntry={secure}
          placeholderTextColor={ICON}
          placeholder={placeholder || ''}
          style={[styles.textStyle, textStyle, { color: ICON }]}
        />
      )}

      {text.length ? (
        <Pressable onPress={send}>
          <SendSvg />
        </Pressable>
      ) : (
        <Voice
          voicePath={(path) => {
            console.log('VoicePath', path)
            setVoiceMessage(path)
          }}
        />
      )}
    </View>
  )
}

export default memo(index)

const styles = StyleSheet.create({
  container: {
    ...shadow,
    maxHeight: RH(48),
    shadowColor: BLACK,
    paddingLeft: RW(24),
    paddingRight: RW(21),
    flexDirection: 'row',
    borderRadius: RW(10),
    alignItems: 'center',
    paddingVertical: RH(10),
    backgroundColor: BACKGROUND,
    justifyContent: 'space-between',
  },
  textStyle: {
    width: RW(330),
    paddingVertical: 0,
    ...font('regular', 16, WHITE, 18),
  },
})
