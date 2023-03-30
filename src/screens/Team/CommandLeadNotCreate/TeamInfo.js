import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { font, RH, RW } from '@/theme/utils'
import { _storageUrl } from '@/constants'
import { WHITE } from '@/theme/colors'
import { useNavigation } from '@react-navigation/native'
import ScreenMask from '@/components/wrappers/screen'
import LightButton from '@/assets/imgs/Button'
import User from '@/components/User/user'

const TeamInfo = ({ route }) => {
  const { sendingData, gameId } = route.params
  const navigation = useNavigation()
  return (
    <ScreenMask>
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Image
            source={{ uri: _storageUrl + gameId?.img }}
            resizeMode="contain"
            style={styles.img}
          />
          <Text style={styles.text}>
            Соперник:{' '}
            {sendingData?.enemy_team_name ? sendingData?.enemy_team_name : sendingData?.enemy_team}
          </Text>
          <Text style={styles.text}>Дата и время игры: {sendingData?.start_date}</Text>
          <Text style={styles.text}>Адрес проведения игры: {sendingData?.address_name} </Text>
          <Text style={styles.text}>
            Стоимость входного билета на игру:{' '}
            {sendingData?.ticket_price ? sendingData?.ticket_price : 0}
          </Text>
          <View style={{ flexDirection: 'row', width: '35%', alignItems: 'center' }}>
            <Text style={styles.text}>Организатор игры:</Text>
            <User size={10} />
          </View>
        </View>
        <View style={styles.rowBox}>
          <LightButton
            label={'Редактировать'}
            size={{ width: 192, height: 36 }}
            onPress={() => navigation.goBack()}
          />
          <LightButton
            label={'Далее>>'}
            style={{ width: 166, height: 36 }}
            onPress={() => navigation.navigate('EditTeamPlayers', { gameId, sendingData })}
          />
        </View>
      </View>
    </ScreenMask>
  )
}

export default TeamInfo

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    top: RH(50),
    width: '100%',
  },
  img: {
    height: RH(200),
    width: RW(200),
    alignSelf: 'center',
    marginVertical: RH(25),
  },
  text: {
    paddingVertical: RH(8),
    ...font('medium', 15.5, WHITE),
    width: '100%',
  },
  rowBox: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    position: 'absolute',
    bottom: RH(25),
  },
})
