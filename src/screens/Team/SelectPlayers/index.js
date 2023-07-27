import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import Modal from '@/components/modal'
import Button from '@/assets/imgs/Button'
import PlayerList from '@/screens/Mafia/AddPlayers/componnets/PlayerList'
import FastImage from 'react-native-fast-image'
import { RH, RW, font } from '@/theme/utils'
import { WHITE } from '@/theme/colors'

function Index({ route, navigation }) {
  const [modal, setModal] = useState(false)
  const [user, setUser] = useState([])
  const [activePlayers, setActivePlayers] = useState([])
  const data = route.params
  useEffect(() => {
    if (data.statusOrganizer === 'Весь состав команды') {
      setModal(true)
    }
  }, [data.statusOrganizer])

  useEffect(() => {
    if (modal) {
      setTimeout(() => {
        navigation.navigate('Home')
      }, 2000)
    }
  }, [modal])

  const handlerActiveUser = (id) => {
    if (user.includes(id)) {
      const temp = user.filter((item, i) => item !== id)
      setUser(temp)
    } else {
      setUser([...user, id])
    }
  }

  return (
    <ScreenMask>
      <View style={styles.titleBlock}>
        <View style={styles.imageBlock}>
          <FastImage resizeMode="contain" style={styles.image} source={{ uri: data.game.image }} />
        </View>
        <Text style={styles.title}>{data.game.name}</Text>
      </View>
      <PlayerList
        players={[]}
        activePlayers={activePlayers}
        setActivePlayers={setActivePlayers}
        isSelected={true}
      />
      <View style={styles.btn}>
        <Button
          onPress={() => setModal(true)}
          size={{ width: 281, height: 48 }}
          label={'Подтвердить'}
        />
      </View>
      <Modal
        modalClose={setModal}
        modalVisible={modal}
        setIsVisible={setModal}
        item={
          <View style={styles.bg}>
            <Text style={styles.text}>Вы успешно создали</Text>
            <Text style={styles.text}>командную игру!</Text>
          </View>
        }
      />
    </ScreenMask>
  )
}
const styles = StyleSheet.create({
  btn: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: RH(85),
  },
  titleBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBlock: {
    width: RW(50),
    height: RW(50),
    borderRadius: RW(50),
    marginRight: RW(15),
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: RW(50),
  },
  title: {
    textAlign: 'center',
    ...font('bold', 24, WHITE),
    marginVertical: RH(30),
  },
  bg: {
    width: RW(306),
    height: RH(120),
    borderRadius: RW(20),
    backgroundColor: '#001034',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    ...font('bold', 16, WHITE),
  },
})
export default Index
