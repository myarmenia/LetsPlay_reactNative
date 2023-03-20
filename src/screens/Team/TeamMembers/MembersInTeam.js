import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import ScreenMask from '@/components/wrappers/screen'
import { font, RH, RW } from '@/theme/utils'
import { SCREEN_BACKGROUND, DARK_BLUE, WHITE } from '@/theme/colors'
import User from '@/components/User/user'
import EmptyBorderedAvatar from '@/assets/svgs/EmptyBorderedAvatar'
import LightButton from '@/assets/imgs/Button'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import UserEditSvg from '@/assets/svgs/userEdit'
import { _storageUrl } from '@/constants'
import BorderGradient from '@/assets/svgs/BorderGradiend'
import Modal from '@/components/modal'
import { useDispatch, useSelector } from 'react-redux'
import { searchTeam } from '@/store/Slices/TeamSlice'

const MembersInTeam = ({ route }) => {
  const command = route.params
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)
  const [invitedPlayers, setInvitedPlayers] = useState([0, 2, 0, 0, 0, 0, 0, 0])
  const dispatch = useDispatch()
  // const { findedTeam } = useSelector(({ teams }) => teams)
  const findedTeam = [{ players: [2, 2, 0, 0] }]
  useEffect(() => {
    dispatch(searchTeam(command._id, () => {}, false))
  }, [])
  useEffect(() => {
    setInvitedPlayers(
      invitedPlayers?.map((elm, i) => {
        if (findedTeam[0]?.players[i]) {
          return (elm = findedTeam[0]?.players[i])
        } else {
          return 0
        }
      }),
    )
  }, [findedTeam?.[0]?.players?.length])

  const UserItem = ({ elm }) => {
    const [visible, setVisible] = useState(false)

    return (
      <>
        <Pressable
          style={styles.eachUser}
          onPressIn={() => setVisible(true)}
          onPressOut={() => setVisible(false)}
          onPress={() =>
            elm == 3
              ? setModalVisible(true)
              : elm == 2
              ? navigation.navigate('EachMember', { member: elm, command: command })
              : null
          }
        >
          {elm == 2 ? (
            //need detect user accept invite or not and set opacity and don't navigate another show modal
            // <View style={{ opacity: 0.6 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <BorderGradient height={142} width={105} opacity={visible ? 1 : 0} />
              <View style={{ position: 'absolute' }}>
                <User
                  size={120}
                  // pressedUser={{ avatar: '/team/image/4caea4a8-8864-4ad1-bd20-bf5539558622.jpg' }}
                />
              </View>
            </View>
          ) : (
            <EmptyBorderedAvatar />
          )}
        </Pressable>
      </>
    )
  }

  return (
    <ScreenMask>
      <View style={styles.rowBox}>
        <Text style={styles.topTitle}>{command?.name}</Text>
        <Image
          style={styles.commandImg}
          source={{ uri: _storageUrl + command?.img }}
          resizeMode="cover"
        />
        {/* <View style={styles.rowBox}>
          <Text style={styles.topTitle}>{command?.name}</Text>
          <Image
            source={{ uri: _storageUrl + commandImg }}
            resizeMode="cover"
            style={styles.commandImg}
          ></Image>
        </View> */}
      </View>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.membersBox}>
          {invitedPlayers.map((elm, i) => {
            return <UserItem elm={elm} key={i} />
          })}
        </View>
        <View style={styles.btnBox}>
          <LightButton
            label={'Пригласить игрока'}
            size={{ width: 380, height: 45 }}
            onPress={() => navigation.navigate('TeamMembers', command)}
          />
        </View>
      </ScrollView>
      {modalVisible && (
        <Modal
          modalVisible={modalVisible}
          setIsVisible={setModalVisible}
          item={
            <View style={styles.modalContainer}>
              <View style={styles.userBox}>
                <User
                  size={370}
                  //pass elm to paddedUser for draw inside user component with reading elm
                  pressedUser={{ avatar: '/team/image/4caea4a8-8864-4ad1-bd20-bf5539558622.jpg' }}
                />
              </View>
              <Text style={styles.playerMessage}>
                Игроку отправлен запрос на участие в команде. Ждем подтверждения!
              </Text>
            </View>
          }
        />
      )}
    </ScreenMask>
  )
}

export default MembersInTeam

const styles = StyleSheet.create({
  team: {
    textAlign: 'center',
    ...font('bold', 22, WHITE),
    marginVertical: RH(15),
  },
  membersBox: {
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: RW(10),
    width: '98%',
  },
  eachUser: {
    paddingTop: RW(25),
  },
  btnBox: {
    // width: '100%',
    position: 'relative',
    paddingVertical: RH(50),
    alignSelf: 'center',
  },
  topTitle: {
    textAlign: 'center',
    ...font('bold', 22, WHITE),
    marginVertical: RH(15),
  },
  commandImg: {
    width: RW(40),
    height: RW(40),
    borderRadius: RW(20),
    marginLeft: '3%',
    borderWidth: 1,
    borderColor: WHITE,
  },
  rowBox: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    top: RH(15),
  },
  modalContainer: {
    width: '90%',
    borderRadius: RW(20),
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    // height: '6%',
    backgroundColor: SCREEN_BACKGROUND,
  },
  playerMessage: {
    ...font('regular', 16, WHITE),
    textAlign: 'center',
    width: '55%',
    paddingBottom: RH(20),
  },
  userBox: {
    paddingVertical: RH(30),
  },
})
