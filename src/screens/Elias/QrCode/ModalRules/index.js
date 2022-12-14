import React from 'react'
import { Text, Pressable, View } from 'react-native'
import { styles } from './styles'

function ModalRules({ setModalRules }) {
  return (
    <Pressable onPress={() => setModalRules(false)} style={styles.body}>
      <Text style={styles.title}>Правила</Text>
      <Text style={styles.text}>Словесная игра “Элиас”.</Text>
      <Text style={styles.text}>
        Командная игра в которой нужно объяснить как можно больше слов за определенное время,
        используя только синонимы, антонимы и мимику.
      </Text>
      <Text style={styles.text}>
        Правилами запрещено давать объяснения по частям и на иностранных языках, а также недопустимо
        использование однокоренных слов.
      </Text>
      <Text style={styles.text}>
        Все игроки делятся на две и более (до 5) команды. Начинает первая команда. Игрок от первой
        команды должен объяснить как можно больше слов участникам своей команды за определенное
        время. За угаданное слово команда получает 1 балл. Далее объясняет вторая команда.
        Выигрывает та команда, которая быстрее наберет заранее определенное колличество баллов.
      </Text>
      <Text style={styles.text}>Количество игроков должно быть не менее 4 человек.</Text>
      <Text style={styles.text}>Удачной игры!</Text>
    </Pressable>
  )
}

export default ModalRules
