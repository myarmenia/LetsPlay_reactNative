import React from 'react'
import { Text, Pressable, View } from 'react-native'
import { styles } from './styles'
import { useSelector } from 'react-redux'

function ModalRules({ setModalRules }) {
  const rules = useSelector(({ mafia }) => mafia.rules)
  return (
    <Pressable onPress={() => setModalRules(false)} style={styles.body}>
      <Text style={styles.title}>Правила</Text>
      <Text style={{ ...styles.text, marginBottom: 20 }}>{rules}</Text>
    </Pressable>
  )
}

export default ModalRules
