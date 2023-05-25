import React, { useState } from 'react'
import { Text, View, StyleSheet, ScrollView, Pressable } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import Button from '@/assets/imgs/Button'
import { RH, RW, font } from '@/theme/utils'
import Slider from '@/components/range'
import ToggleSwitch from '@/components/ToggleSwitch'
import { RED, WHITE } from '@/theme/colors'
import Row from '@/components/wrappers/row'
import Modal from '@/components/modal'
import ModalRules from '../QrCode/ModalRules'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCountWords, setStoping, setTime } from '@/store/Slices/CrocodileSlice'

function Index({ navigation }) {
  //===================states=====================
  const [modalRules, setModalRules] = useState(true)
  const [countOfWords, setCountOfWords] = useState(10)
  const [timeOfRounds, setTimeOfRounds] = useState(30)
  const [isOn, setIsOn] = useState(false)
  //==================states end==================
  const [error, setError] = useState(false)

  const dispatch = useDispatch()

  const handleSubmit = () => {
    if (countOfWords == 0 || timeOfRounds == 0) {
      setError(true)
    } else {
      setError(false)
    }
    if (countOfWords !== 0 || timeOfRounds !== 0) {
      dispatch(setCountWords(countOfWords))
      dispatch(setStoping(true))
      dispatch(setTime(timeOfRounds))
      navigation.navigate('SelectComplexity')
    }
  }
  return (
    <ScreenMask>
      <View style={styles.body}>
        {modalRules ? (
          <Modal
            modalVisible={modalRules}
            setIsVisible={setModalRules}
            item={
              <Pressable onPress={() => setModalRules(false)} style={styles.modalBody}>
                <ScrollView
                  style={{ flex: 1 }}
                  contentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                    // paddingVertical: RH(80),
                  }}
                  horizontal={false}
                >
                  <Text style={styles.modalTitle}>Правила</Text>
                  <Text style={{ ...styles.text, marginBottom: 20 }}>
                    Словесная игра «Крокодил».{'\n'}
                    {'\n'} Цель и задачи – нужно показать загаданное слово, используя только жесты и
                    мимику.
                    {'\n'}
                    {'\n'}
                    Есть два варианта этой игры — индивидуальный и командный.{'\n'}
                    {'\n'} Индивидуальный - игрок показывает загаданное слово остальным игрокам. Кто
                    отгадает получит право показывать следующее слово или любой другой игрок на
                    усмотрение игрока, который показывал угаданное слово.{'\n'}
                    {'\n'} Командный - все игроки делятся на две команды. Начинает первая команда.
                    Игрок от первой команды получает загаданное слово и он должен показать его
                    участникам своей команды за определенное время. За угаданное слово команда
                    получает 1 балл.{'\n'}
                    {'\n'}
                    Далее показывает вторая команда. Выигрывает та команда, которая быстрее наберет
                    заранее определенное количество баллов.{'\n'}
                    {'\n'} Количество игроков должно быть не менее 3 человек.{'\n'}
                    {'\n'} Удачной игры!
                  </Text>
                </ScrollView>
              </Pressable>
            }
          />
        ) : null}
      </View>
      <Text style={styles.title}>Настройки</Text>
      <Row
        wrapper={{
          justifyContent: 'space-between',
          marginBottom: RH(10),
          marginTop: RH(60),
        }}
      >
        <View>
          <Text style={styles.timeTitle}>Количество слов</Text>
          <Text style={styles.timeSubtitle}>для достижения победы</Text>
        </View>

        <Text style={styles.time}>{countOfWords}</Text>
      </Row>

      <Slider
        step={1}
        count={5}
        maxValue={15}
        minValue={5}
        containerStyle={{
          width: '100%',
          paddingLeft: '48.5%',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        setValue={setCountOfWords}
        value={countOfWords}
      />

      <Row
        wrapper={{
          justifyContent: 'space-between',
          marginBottom: RH(10),
          marginTop: RH(60),
        }}
      >
        <View>
          <Text style={styles.timeTitle}>Время раунда</Text>
          <Text style={styles.timeSubtitle}>продолжительность в секундах</Text>
        </View>

        <Text style={styles.time}>{timeOfRounds}</Text>
      </Row>

      <Slider
        step={10}
        count={60}
        maxValue={240}
        minValue={60}
        containerStyle={{
          width: '65%',
          paddingLeft: '30%',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        setValue={setTimeOfRounds}
        value={timeOfRounds}
      />
      <View style={styles.btnContainer}>
        {error ? <Text style={styles.errorText}>Заполните все поля</Text> : null}
        <Button onPress={handleSubmit} size={styles.btn} label={'Продолжить'} />
      </View>
    </ScreenMask>
  )
}
const styles = StyleSheet.create({
  title: {
    ...font('bold', 24, WHITE),
    textAlign: 'center',
  },

  timeTitle: {
    ...font('bold', 20, WHITE),
    marginBottom: RH(8),
  },
  timeSubtitle: {
    ...font('regular', 12, WHITE),
  },
  time: {
    ...font('bold', 25, WHITE),
  },
  playersDescription: {
    ...font('bold', 18, '#B3B7C2'),
    marginTop: RH(65),
  },
  btnContainer: {
    position: 'absolute',
    bottom: RH(50),
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  btn: {
    width: 281,
    height: 48,
  },
  errorText: {
    color: RED,
    left: RW(12),
    fontSize: RW(16),
    bottom: '100%',
  },
  modalBody: {
    backgroundColor: '#001034',
    borderRadius: 20,
    height: '85%',
    paddingVertical: RH(50),
    paddingHorizontal: RH(25),
    alignSelf: 'center',
  },
  modalTitle: {
    ...font('bold', 24, WHITE),
    paddingVertical: RH(20),
  },
  text: {
    color: WHITE,
    textAlign: 'center',
    fontSize: RH(16),
    marginBottom: RH(6),
  },
})

export default Index
