import { WHITE } from '@/theme/colors'
import { RH, RW } from '@/theme/utils'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { _storageUrl } from '@/constants'
import { useNavigation } from '@react-navigation/native'
import { Image, Text, View, StyleSheet, ScrollView, Pressable } from 'react-native'
import Button from '@/assets/imgs/Button'
import ScreenMask from '@/components/wrappers/screen'
import Modal from '@/components/modal'

function Index({ route }) {
  const commandsCount = route?.params
  const [modalRules, setModalRules] = useState(true)
  const { qrGameImg } = useSelector(({ crocodile }) => crocodile)
  const navigation = useNavigation()

  return (
    <ScreenMask>
      <View>
        <View style={styles.body}>
          <Text style={styles.title}>Пригласить игроков</Text>
          <View style={styles.qrBlock}>
            <Image style={styles.qr} source={{ uri: _storageUrl + qrGameImg }} />
          </View>
          <Button
            onPress={() => navigation.navigate('InviteTeamPlayers', commandsCount)}
            size={styles.btn}
            label={'Продолжить'}
          />
        </View>
      </View>
      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      {modalRules ? (
        <Modal
          modalVisible={modalRules}
          setIsVisible={setModalRules}
          item={
            <ScrollView style={{flex: 1,
             }} contentContainerStyle={{justifyContent:"center", alignItems:"center", flex:1}} horizontal={false} >
              <Pressable onPress={() => setModalRules(false)} style={styles.modalBody}>
                <Text style={styles.title}>Правила</Text>
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
              </Pressable>
            </ScrollView>
          }
          />
          ) : null}
          </View>
    </ScreenMask>
  )
}
const styles = StyleSheet.create({
  title: {
    color: WHITE,
    textAlign: 'center',
    fontSize: 24,
  },
  body: {
    marginTop: RW(125),
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
  },
  qrBlock: {
    width: RW(281),
    height: RH(280),
    marginTop: RH(127),
    marginBottom: RH(90),
  },
  qr: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  btn: {
    width: 281,
    height: 48,
  },
  modalBody: {
    backgroundColor: '#001034',
    borderRadius: 20,
    padding: 25,
    alignSelf:"center"
  },
  title: {
    color: WHITE,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: RH(10),
  },
  text: {
    color: WHITE,
    textAlign: 'center',
    fontSize: 16,
    marginBottom: RH(6),
  },
})

export default Index
