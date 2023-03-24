import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import Modal from '@/components/modal'
import ModalItem from '@/screens/Team/SelectTeam/ModalItem'
import { styles } from '@/screens/Team/SelectPlayers/style'
import { Players } from '@/assets/TestData'
import User from '@/components/User/user'
import Button from '@/assets/imgs/Button'
import PlayerList from '@/screens/Mafia/AddPlayers/componnets/PlayerList'

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
          <Image style={styles.image} source={{ uri: data.game.image }} />
        </View>
        <Text style={styles.title}>{data.game.name}</Text>
      </View>
      <PlayerList
        players={Players}
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
        item={<ModalItem />}
      />
    </ScreenMask>
  )
}

export default Index
