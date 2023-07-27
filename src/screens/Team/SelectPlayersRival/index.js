import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ScreenMask from '@/components/wrappers/screen'
import Modal from '@/components/modal'
import Button from '@/assets/imgs/Button'
import ModalStartItem from '@/screens/Team/SelectPlayersRival/ModalStartItem'
import PlayerList from '@/screens/Mafia/AddPlayers/componnets/PlayerList'
import { RH, font } from '@/theme/utils'
import { WHITE } from '@/theme/colors'

function Index({ route, navigation }) {
  const [modalStart, setModalStart] = useState(true)
  const [activeUser, setActiveUser] = useState([])
  const { data, team } = route.params

  return (
    <ScreenMask>
      <View>
        <Text style={styles.title}>ФК “Динамо”</Text>
      </View>

      <PlayerList
        players={[]}
        isSelected={true}
        setActivePlayers={setActiveUser}
        activePlayers={activeUser}
      />
      <View style={styles.btn}>
        <Button
          onPress={() => navigation.navigate('Home')}
          size={{ width: 281, height: 48 }}
          label={'Подтвердить'}
        />
        <View style={{ marginTop: RH(21) }}>
          {data.game.scheme ? (
            <Button
              onPress={() => navigation.navigate('Scheme', { team, data: data.game })}
              size={{ width: 281, height: 48 }}
              label={'Схема игры'}
            />
          ) : null}
        </View>
      </View>
      <Modal
        setIsVisible={setModalStart}
        modalVisible={modalStart}
        modalClose={false}
        item={<ModalStartItem />}
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
  title: {
    textAlign: 'center',
    ...font('bold', 24, WHITE),
    marginVertical: RH(30),
  },
})

export default Index
