import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { LIGHT_LABEL, WHITE } from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'
import { _storageUrl } from '@/constants'
import User from '@/components/User/user'
import Modal from '@/components/modal'
import BorderGradient from '@/assets/svgs/BorderGradiend'
import LightButton from '@/components/buttons/Button'
import { createTeamGame } from '@/store/Slices/TeamSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'

const EditTeamPlayers = () => {

  const { savedTeam, createGameInfo } = useSelector(({ teams }) => teams)
  const [modalVisible, setModalVisible] = useState(false)
  const [acceptedPlayers, setAcceptedPlayers] = useState([])
  console.log(acceptedPlayers, 'acceptedPlayers');
  const dispatch = useDispatch()
  const navigation = useNavigation()


  return (
    <ScreenMask>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.rowBox}>
          <Text style={styles.topTitle}>
            {savedTeam?.name}
          </Text>
          <FastImage
            style={styles.commandImg}
            source={{ uri: _storageUrl + savedTeam?.img }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.gridBox}>

          {savedTeam.invited_players.map((elm, i) => {
            return (
              <SingleUser
                elm={elm}
                key={i}
                setAcceptedPlayers={setAcceptedPlayers}
                acceptedPlayers={acceptedPlayers}
              />
            )
          })}
        </View>
      </ScrollView>
      <View style={styles.bottomBtn}>
        <LightButton
          label={'Подтвердить'}
          size={{ width: 284, height: 48 }}
          onPress={() => {
            const arr = []
            savedTeam?.invited_players.forEach((item) => { arr.push(item._id) })
            const players = acceptedPlayers.length ? acceptedPlayers : arr
            dispatch(createTeamGame({
              players,
              all_players: false,
              team: savedTeam?._id,
              address_name: createGameInfo.address_name,
              latitude: createGameInfo.latitude,
              longitude: createGameInfo.longitude,
              between_players: false,
              ticket_price: 0,
              enemy_team: createGameInfo.enemy_team,
              enemy_team_name: createGameInfo.enemy_team_name,
              game: createGameInfo?.game?._id,
              format: createGameInfo.format,
              start_date: createGameInfo.start_date,
              name: null,
              description: null
            }, setModalVisible))
          }}
        />
        {createGameInfo?.format &&
          <View style={{ marginTop: RH(15) }}>
            <LightButton
              label={'Схема игры'}
              size={{ width: 284, height: 48 }}
              onPress={() => {
                const arr = []
                savedTeam?.invited_players.forEach((item) => { arr.push(item) })

                const players = acceptedPlayers.length ? acceptedPlayers : arr
                navigation.navigate('TeamSchemes', players)
              }}
            />
          </View>
        }
      </View>

      {!!modalVisible[0] && (
        <Modal
          modalVisible={modalVisible[0]}
          setIsVisible={setModalVisible}
          navigationText="Home"
          item={
            <View style={styles.modal}>
              <Text style={styles.successTeam}>
                {!acceptedPlayers.length && modalVisible[1] !== 'ok'
                  ? 'Необходимо утвердить состав игроков команды на игру!'
                  : 'Вы успешно создали командную игру!'}
              </Text>
            </View>
          }
        />
      )}
    </ScreenMask>
  )
}

const SingleUser = ({ elm, setAcceptedPlayers, acceptedPlayers }) => {
  const [visible, setVisible] = useState(false)
  const handleClick = () => {
    setVisible(!visible)
    if (!visible) {
      setAcceptedPlayers([...acceptedPlayers, elm])
    } else {
      setAcceptedPlayers(acceptedPlayers.filter(item => item._id !== elm._id))
    }
  }
  return (
    <Pressable
      style={{ alignItems: 'center', justifyContent: 'center', padding: RH(3), }}
    >
      <BorderGradient height={142} width={105} opacity={visible ? 1 : 0} />
      <View style={{ position: 'absolute' }}>
        <User
          size={120}
          user={elm}
          onPressItem={{
            item: <User size={390} />,
            modalClose: false,
            onClickFunc: () => { handleClick() }
          }}
        />
      </View>
    </Pressable>
  )
}



export default EditTeamPlayers



const styles = StyleSheet.create({
  topTitle: {
    textAlign: 'center',
    ...font('bold', 22, WHITE),
    marginVertical: RH(15),
  },
  commandImg: {
    width: RW(40),
    height: RW(40),
    borderRadius: RW(20),
    marginRight: '3%',
    borderWidth: 1,
    borderColor: WHITE,
  },
  rowBox: {
    width: '100%',
    flexDirection: 'row-reverse',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    top: RH(15),
  },
  gridBox: {
    width: '95%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: RH(60),
  },
  bottomBtn: {
    alignSelf: 'center',
    paddingVertical: RH(50),
  },
  modal: {
    width: RW(285),
    backgroundColor: LIGHT_LABEL,
    borderRadius: RW(20),
    alignSelf: 'center',
    padding: RW(40),
    marginHorizontal: RW(30.5),
  },
  successTeam: {
    ...font('inter', 17, WHITE, 20),
    textAlign: 'center',
    lineHeight: RH(28),
  },
})
