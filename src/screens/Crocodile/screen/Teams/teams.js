import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import { font, RH, RW } from '@/theme/utils'
import {LIGHT_LABEL, RADIO, WHITE} from '@/theme/colors'
import LightButton from '@/assets/imgs/Button'
import Index from '@/components/modal'
import { useNavigation } from '@react-navigation/native'
import User from "@/assets/imgs/user/user";
import {Players} from "@/assets/TestData";

const Teams = () => {
  const [modalUser, setModalUser] = useState(true)
  const [modalRules, setModalRules] = useState(true)
  const navigation = useNavigation()
  return (
    <ScreenMask>
      <Index
          modalVisible={modalUser}
          setIsVisible={setModalUser}
          modalClose={true}
          item={
            <View style={styles.modal}>

              <Text style={styles.showStyle}>Показывает</Text>

              <View>
                <User size={370} user={Players[0]}/>
              </View>
              <View style={styles.btnStart}>
                <LightButton
                    label={'Начать'}
                    size={{ width: 281, height: 48 }}
                    onPress={() => navigation.navigate('Words')}
                />
              </View>
            </View>
          }
      />
      <Index
          modalVisible={modalRules}
          setIsVisible={setModalRules}
          navigation={navigation}
          navigationText={"Teams"}
          item={
            <View style={styles.modalBody}>
              <View style={styles.modalRules}>
                <Text style={styles.rulesText}>
                  "Правила"
                </Text>
                <Text style={styles.wordGame}>
                  Словесная игра «Крокодил».
                </Text>
                <Text style={styles.wordGame}>
                  Цель и задачи – нужно показать загаданное слово, используя только жесты и мимику.
                </Text>
                <Text style={styles.wordGame}>
                  Есть два варианта этой игры — индивидуальный и командный.
                </Text>
                <Text style={styles.wordGame}>
                  Индивидуальный - игрок показывает загаданное слово остальным игрокам. Кто отгадает
                  получит
                  право показывать следующее слово или любой другой игрок на усмотрение игрока,
                  который
                  показывал угаданное слово.
                </Text>
                <Text style={styles.wordGame}>
                  Командный - все игроки делятся на две команды. Начинает первая команда. Игрок от
                  первой
                  команды получает загаданное слово и он должен показать его участникам своей команды
                  за
                  определенное время. За угаданное слово команда получает 1 балл.
                </Text>
                <Text style={styles.wordGame}>
                  Далее показывает вторая команда. Выигрывает та команда, которая быстрее наберет
                  заранее
                  определенное колличество баллов.
                </Text>
                <Text style={styles.wordGame}>
                  Количество игроков должно быть не менее 3 человек.
                </Text>
                <Text style={styles.wordGame}>
                  Удачной игры!
                </Text>
              </View>
            </View>
          }
      />
      <View style={styles.common}>
        <View style={styles.team}>
          <Text style={styles.teamText}>Каманда 1</Text>
        </View>
        <View style={styles.btnTimer}>
          <View style={styles.btn}>
            <LightButton label={'Стоп'} size={{ width: 98, height: 36 }} />
          </View>
          <View style={styles.timerView}>
            <Text style={styles.timerText}>Оставшееся время</Text>
            <Text style={styles.timerTextTwo}>2:00</Text>
          </View>
        </View>
      </View>

    </ScreenMask>
  )
}
const styles = StyleSheet.create({
  modalBody:{
    alignItems:'center',
    justifyContent:'center'
  },
  rulesText: {
    ...font("inter", 24, WHITE, 24),
    fontWeight: "700",
    textAlign: "center",
    marginTop: RH(42),
    marginBottom: RH(40)
  },
  wordGame: {
    ...font("inter", 16, WHITE, 19),
    fontWeight: "400",
    textAlign: "center",
    marginBottom: RH(20)
  },
  modalRules: {
    width: RW(358),
    backgroundColor: LIGHT_LABEL,
    borderRadius: RW(20),
    paddingHorizontal: RW(18),

  },
  common: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  team: {
    marginVertical: RH(50),
  },
  teamText: {
    ...font('inter', 24, RADIO, 24),
    fontWeight: '400',
  },
  btnTimer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: RH(40),
  },
  btn: {
    marginRight: RW(150),
  },
  timerView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerText: {
    ...font('inter', 10, WHITE, 24),
    fontWeight: '400',
  },
  timerTextTwo: {
    ...font('inter', 24, WHITE, 24),
    fontWeight: '700',
  },
  modal: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  showStyle: {
    marginBottom: RH(53),
    ...font('bold', 28, WHITE, 28),
    fontWeight: '400',
  },
  btnStart: {
    marginTop: RH(186),
  },
})

export default Teams
