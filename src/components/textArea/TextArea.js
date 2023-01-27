import React from 'react'
import { SafeAreaView, StyleSheet, TextInput } from 'react-native'
import { useState } from 'react'
import { RH, RW } from '@/theme/utils'
import { BACKGROUND, ICON } from '@/theme/colors'

const UselessTextInput = () => {
  const [number, onChangeNumber] = useState(null)

  return (
    <SafeAreaView>
      <TextInput
        multiline
        numberOfLines={13}
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Описание турнира (можно использовать ссылку на интернет страничку):"
        placeholderTextColor="#657AC5"
        textAlignVertical={'top'}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    borderRadius: RW(20),
    backgroundColor: BACKGROUND,
    width: RW(375),
    height: RH(256),
    paddingHorizontal: RW(20),
    color: ICON,
  },
})

export default UselessTextInput
