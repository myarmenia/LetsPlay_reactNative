import React from 'react'
import { Text, Pressable, View, ScrollView } from 'react-native'
import { styles } from './styles'
import { useSelector } from 'react-redux'

function ModalRules({ setModalRules }) {
  const rules = useSelector(({ mafia }) => mafia.rules)
  return (
    <ScrollView>
      <Pressable onPress={() => setModalRules(false)} style={styles.body}>
        <Text style={styles.title}>Правила</Text>
        <Text style={{ ...styles.text, marginBottom: 20 }}>
          Словесная игра «Крокодил».{'\n'}
          {'\n'} Цель и задачи – нужно показать загаданное слово, используя только жесты и мимику.
          {'\n'}
          {'\n'}
          Есть два варианта этой игры — индивидуальный и командный.{'\n'}
          {'\n'} Индивидуальный - игрок показывает загаданное слово остальным игрокам. Кто отгадает
          получит право показывать следующее слово или любой другой игрок на усмотрение игрока,
          который показывал угаданное слово.{'\n'}
          {'\n'} Командный - все игроки делятся на две команды. Начинает первая команда. Игрок от
          первой команды получает загаданное слово и он должен показать его участникам своей команды
          за определенное время. За угаданное слово команда получает 1 балл.{'\n'}
          {'\n'}
          Далее показывает вторая команда. Выигрывает та команда, которая быстрее наберет заранее
          определенное количество баллов.{'\n'}
          {'\n'} Количество игроков должно быть не менее 3 человек.{'\n'}
          {'\n'} Удачной игры!
        </Text>
      </Pressable>
    </ScrollView>
  )
}

export default ModalRules
