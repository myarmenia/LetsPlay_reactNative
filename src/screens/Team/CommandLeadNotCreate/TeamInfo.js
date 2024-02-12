import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { font, RH, RW } from '@/theme/utils'
import { _storageUrl } from '@/constants'
import { WHITE } from '@/theme/colors'
import { useNavigation } from '@react-navigation/native'
import ScreenMask from '@/components/wrappers/screen'
import LightButton from '@/components/buttons/Button'
import User from '@/components/User/User'
import { useSelector } from 'react-redux'
import FastImage from 'react-native-fast-image'
import moment from 'moment'

const TeamInfo = () => {

  const { savedTeam, createGameInfo } = useSelector(({ teams }) => teams)
  const navigation = useNavigation()

  return (
    <ScreenMask>
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <FastImage
            source={{ uri: _storageUrl + savedTeam?.img }}
            resizeMode="contain"
            style={styles.img}
          />
          <Text style={styles.text}>
            Соперник :{'  '}
            {createGameInfo?.enemy_team_name}
          </Text>
          <Text style={styles.text}>Дата и время игры :  {moment(createGameInfo?.start_date).format('DD.MM.YYYY, HH:MM')}</Text>
          <Text style={styles.text}>Адрес проведения игры: {createGameInfo?.address_name} </Text>
          <View style={{ flexDirection: 'row', width: '35%', alignItems: 'center' }}>
            <Text style={styles.text}>Организатор игры :</Text>
            <User
              size={30} />
          </View>
        </View>
        <View style={styles.rowBox}>
          <LightButton
            label={'Редактировать'}
            onPress={() => navigation.goBack()}
          />
          <LightButton
            label={'Далее >>'}
            onPress={() =>
              navigation.navigate('EditTeamPlayers')
            }
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
    marginRight: RH(30)
  },
  rowBox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    paddingHorizontal: RH(15),
    bottom: RH(25),
  },
})
