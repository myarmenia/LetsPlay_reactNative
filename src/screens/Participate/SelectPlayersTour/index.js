import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import Modal from '@/components/modal'
import { styles } from '@/screens/Team/SelectPlayers/style'
import { Players } from '@/assets/TestData'
import User from '@/assets/imgs/user/user'
import Button from '@/assets/imgs/Button'
import { RH, RW } from '@/theme/utils'
import { LIGHT_LABEL } from '@/theme/colors'
import modalStyle from '@/screens/GameCreating/style'

function Index({ route, navigation }) {
  const [isVisible, setIsVisible] = useState(false)
  const [user, setUser] = useState([])
  const { item, isTeam } = route.params

  const handlerActiveUser = (id) => {
    if (user.includes(id)) {
      const temp = user.filter((item, i) => item !== id)
      setUser(temp)
    } else {
      setUser([...user, id])
    }
  }
  const handleSubmit = () => {
    if (user.length > 0) {
      if (isTeam === 'Индивидуальный') {
        navigation.navigate('DataGame', { isTeam })
      } else {
        navigation.navigate('DataGameTeam', { isTeam })
      }
    } else {
      setIsVisible(true)
    }
  }

  return (
    <ScreenMask>
      <View style={styles.titleBlock}>
        <View style={styles.imageBlock}>
          <Image style={styles.image} source={{ uri: item.image }} />
        </View>
        <Text style={styles.title}>{item.name}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <View style={styles.container}>
          {Players.map((item, i) => (
            <TouchableOpacity
              onPress={() => handlerActiveUser(item.id)}
              key={i}
              style={user.includes(item.id) ? styles.activeItem : styles.item}
            >
              <User user={item} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.btn}>
        <Button
          onPress={() => navigation.navigate('TournamentTicket')}
          size={{ width: 281, height: 48 }}
          label={'Подтвердить'}
        />
      </View>
      <View style={{ position: 'absolute' }}>
        <Modal
          modalClose={false}
          modalVisible={isVisible}
          setIsVisible={setIsVisible}
          item={
            <View style={modalStyle.secondTicketModalBlock}>
              <Text style={modalStyle.text}>
                Необходимо утвердить состав игроков команды {'\n'} на игру!
              </Text>
            </View>
          }
        />
      </View>
    </ScreenMask>
  )
}

export default Index
