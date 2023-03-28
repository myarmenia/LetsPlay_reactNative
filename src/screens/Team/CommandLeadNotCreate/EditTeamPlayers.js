import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { LIGHT_LABEL, WHITE } from '@/theme/colors'
import { font, RH, RW } from '@/theme/utils'
import { _storageUrl } from '@/constants'
import User from '@/components/User/user'
import Modal from '@/components/modal'
import BorderGradient from '@/assets/svgs/BorderGradiend'
import LightButton from '@/assets/imgs/Button'
import { createTeamGame } from '@/store/Slices/TeamSlice'
import { useDispatch } from 'react-redux'

const EditTeamPlayers = ({ route }) => {
  const { item, sendingData } = route.params
  const [modalVisible, setModalVisible] = useState(false)
  const [acceptedPlayers, setAcceptedPlayers] = useState([1])

  const dispatch = useDispatch()

  return (
    <ScreenMask>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.rowBox}>
          <Text style={styles.topTitle}>
            {sendingData?.enemy_team_name ? sendingData?.enemy_team_name : sendingData?.enemy_team}
          </Text>
          <Image
            style={styles.commandImg}
            source={{ uri: _storageUrl + item?.img }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.gridBox}>
          {[1].map((elm, i) => {
            return (
              <EachUser
                elm={elm}
                key={i}
                acceptedPlayers={acceptedPlayers}
                setAcceptedPlayers={setAcceptedPlayers}
              />
            )
          })}
        </View>
      </ScrollView>
      <View style={styles.bottomBtn}>
        <LightButton
          label={'Подтвердить'}
          size={{ width: 280, height: 40 }}
          onPress={() => {
            console.log(sendingData)
            dispatch(createTeamGame(sendingData, setModalVisible))
          }}
        />
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

export default EditTeamPlayers

const EachUser = React.memo(({ elm, acceptedPlayers, setAcceptedPlayers }) => {
  const [visible, setVisible] = useState(false)
  const handleClick = useCallback(
    elm => {
      setVisible(!visible), setAcceptedPlayers(acceptedPlayers.concat(elm))
    },
    [acceptedPlayers],
  )
  return (
    <Pressable
      style={{ alignItems: 'center', justifyContent: 'center', padding: RH(3) }}
      onPress={() => {
        handleClick(elm)
      }}
    >
      <BorderGradient height={142} width={105} opacity={visible ? 1 : 0} />
      <View style={{ position: 'absolute' }}>
        <User
          size={120}
          // pressedUser={{ avatar: '/team/image/4caea4a8-8864-4ad1-bd20-bf5539558622.jpg' }}
        />
      </View>
    </Pressable>
  )
})

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
