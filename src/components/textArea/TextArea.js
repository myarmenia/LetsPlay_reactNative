<<<<<<< HEAD
import React from 'react'
import { SafeAreaView, StyleSheet, TextInput } from 'react-native'
import { useState } from 'react'

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
        keyboardType="numeric"
        placeholderTextColor="#657AC5"
        textAlignVertical={'top'}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 12,
    borderRadius: 20,
    backgroundColor: '#142A5C',
    width: 375,
    paddingHorizontal:20
  },
})

export default UselessTextInput
=======
import React from 'react'
import { SafeAreaView, StyleSheet, TextInput } from 'react-native'
import { useState } from 'react'

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
        keyboardType="numeric"
        placeholderTextColor="#657AC5"
        textAlignVertical={'top'}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 12,
    borderRadius: 20,
    backgroundColor: '#142A5C',
    width: 375,
    paddingHorizontal:20
  },
})

export default UselessTextInput
>>>>>>> a6bf9b1f955cf66f812a859938c3c3fcf62b5f1b
